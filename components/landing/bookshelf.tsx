import { Bookshelf as BookshelfDisplay } from "@/components/ui/bookshelf";
import { bookshelfConfig } from "@/config/books";
import type { Book } from "@/config/types";
import { AnimeShelfDecorations } from "@/components/landing/anime-decorations";

export function Bookshelf({ books }: { books: Book[] }) {
  return (
    <section
      className="border-t border-dashed pt-8"
      aria-label={bookshelfConfig.title}
    >
      <div className="px-6 mb-3">
        <h2 className="section-heading mb-1">{bookshelfConfig.title}</h2>
        <p className="text-xs text-muted-foreground">
          Shonen Jump classics, iconic manga volumes & influential engineering reads
        </p>
      </div>

      {/* Interactive anime character cast decoration */}
      <AnimeShelfDecorations />

      <BookshelfDisplay
        books={books}
        defaultBookId={bookshelfConfig.defaultBookId}
        label={bookshelfConfig.title}
        emptyMessage={bookshelfConfig.empty}
        coverUnavailableMessage={bookshelfConfig.coverUnavailable}
        revealOnScroll
      />
    </section>
  );
}
