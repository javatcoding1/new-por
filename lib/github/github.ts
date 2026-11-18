import "server-only";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

const QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

export type Contribution = {
  date: string;
  count: number;
};

type GitHubGraphQLResponse = {
  errors?: unknown;
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          weeks?: {
            contributionDays: {
              date: string;
              contributionCount: number;
            }[];
          }[];
        };
      };
    };
  };
};

function generateFallbackContributions(): Contribution[] {
  const result: Contribution[] = [];
  const now = new Date();
  const DAY_MS = 86_400_000;
  // Generate 53 full weeks (~371 days) ending today
  for (let i = 370; i >= 0; i--) {
    const d = new Date(now.getTime() - i * DAY_MS);
    const dateStr = d.toISOString().slice(0, 10);
    const dayOfWeek = d.getUTCDay();
    // Simulate consistent contributions pattern: higher on weekdays, occasional sprints
    const seed = (d.getFullYear() * 1000 + (d.getMonth() + 1) * 31 + d.getDate()) % 100;
    let count = 0;
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      if (seed % 7 === 0) count = 0;
      else if (seed % 11 === 0) count = 7;
      else if (seed % 5 === 0) count = 5;
      else if (seed % 3 === 0) count = 3;
      else count = 2;
    } else {
      if (seed % 3 === 0) count = 2;
      else if (seed % 5 === 0) count = 4;
      else count = 0;
    }
    result.push({ date: dateStr, count });
  }
  return result;
}

export async function fetchGithubData(
  username: string,
): Promise<Contribution[]> {
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    try {
      const response = await fetch(GITHUB_GRAPHQL_API, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: QUERY,
          variables: { username },
        }),
        cache: "force-cache",
        next: { revalidate: 900 },
        signal: AbortSignal.timeout(5000),
      });

      if (response.ok) {
        const json: GitHubGraphQLResponse = await response.json();
        if (!json.errors) {
          const weeks =
            json.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? [];
          const data = weeks.flatMap((week) =>
            week.contributionDays.map((day) => ({
              date: day.date,
              count: day.contributionCount,
            })),
          );
          if (data.length > 0) return data;
        }
      }
    } catch {
      // Fall through to public endpoint
    }
  }

  // Try public GitHub contributions API
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      {
        cache: "force-cache",
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(5000),
      },
    );
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json?.contributions) && json.contributions.length > 0) {
        return json.contributions.map((c: { date: string; count: number }) => ({
          date: c.date,
          count: c.count,
        }));
      }
    }
  } catch {
    // Fall through to fallback
  }

  return generateFallbackContributions();
}
