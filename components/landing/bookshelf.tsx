import { Bookshelf as BookshelfDisplay } from "@/components/ui/bookshelf";
import { bookshelfConfig } from "@/config/books";
import type { Book } from "@/config/types";

export function Bookshelf({ books }: { books: Book[] }) {
  return (
    <section
      className="border-t border-dashed pt-8"
      aria-label={bookshelfConfig.title}
    >
      <div className="px-6 mb-2">
        <h2 className="section-heading mb-1">{bookshelfConfig.title}</h2>
        <p className="text-xs text-muted-foreground">
          Shonen Jump classics, iconic manga volumes & influential engineering reads
        </p>
      </div>

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
