import type { SVGProps } from "react";
import { cn } from "@/lib/utils";
import styles from "./logo.module.css";

export interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

// The same ordered 4 by 4 Bayer pattern and blue palette as the footer Earth.
const DITHER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
const PALETTE = ["deep", "ocean", "light", "cloud"] as const;

function insideMark(x: number, y: number) {
  // 40x40 canvas: E Jayanth Madhav 'JM' monogram mark
  // J: left section (x from 4 to 18, y from 8 to 32)
  const isJ_top = y >= 8 && y <= 12 && x >= 4 && x <= 18;
  const isJ_stem = x >= 13 && x <= 17 && y >= 8 && y <= 28;
  const isJ_bottom = y >= 27 && y <= 31 && x >= 5 && x <= 17;
  const isJ_hook = x >= 4 && x <= 8 && y >= 21 && y <= 29;
  const isJ = isJ_top || isJ_stem || isJ_bottom || isJ_hook;

  // M: right section (x from 21 to 37, y from 8 to 32)
  const isM_left = x >= 21 && x <= 24 && y >= 8 && y <= 31;
  const isM_right = x >= 34 && x <= 37 && y >= 8 && y <= 31;
  const isM_diag1 =
    x >= 23 && x <= 30 && y >= 8 && y <= 22 && Math.abs(y - 8 - (x - 23) * 1.8) <= 2.2;
  const isM_diag2 =
    x >= 28 && x <= 35 && y >= 8 && y <= 22 && Math.abs(y - 8 - (35 - x) * 1.8) <= 2.2;
  const isM = isM_left || isM_right || isM_diag1 || isM_diag2;

  return isJ || isM;
}

const pixelPaths = PALETTE.map(() => "");

for (let y = 0; y < 40; y++) {
  for (let x = 0; x < 40; x++) {
    const front = insideMark(x + 0.5, y + 0.5);
    const side = insideMark(x - 1.5, y - 1.5);
    if (!front && !side) continue;

    const threshold = (DITHER[(y % 4) * 4 + x % 4] + 0.5) / 16;
    const light = 1 - (x / 40 * 0.65 + y / 40 * 0.35);
    if (front && threshold > 0.84 + light * 0.14) continue;

    const shade = front
      ? Math.min(3, Math.floor(0.45 + light * 2.5 + threshold))
      : threshold > 0.8 ? 1 : 0;
    pixelPaths[shade] += `M${x} ${y}h1v1h-1z`;
  }
}

export function Logo({ size = 20, className, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="none"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", styles.logo, className)}
      {...props}
    >
      {PALETTE.map((shade, index) => (
        <path key={shade} d={pixelPaths[index]} fill={`rgb(var(--footer-earth-${shade}))`} />
      ))}
    </svg>
  );
}

export default Logo;
