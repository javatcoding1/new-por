import type { Book } from "@/config/types";

export const bookshelfConfig = {
  title: "Manga & Bookshelf",
  href: "/#bookshelf",
  defaultBookId: "naruto",
  coverUnavailable: "Cover unavailable",
  empty: "More manga and volumes will find their way here.",
};

export const booksConfig: Book[] = [
  {
    id: "naruto",
    title: "Naruto, Vol. 1: Uzumaki Naruto",
    author: "Masashi Kishimoto",
    cover: {
      src: "/images/books/naruto.svg",
      width: 1050,
      height: 1600,
      alt: "Naruto Vol. 1 by Masashi Kishimoto, classic orange cover with Konoha forehead protector emblem",
    },
    sourceUrl: "https://www.viz.com/read/manga/naruto-volume-1/product/1",
    coverSourceUrl: "https://www.viz.com/read/manga/naruto-volume-1/product/1",
    spine: { src: "/images/books/naruto-spine.svg", height: 265, width: 38 },
    order: 0,
    enabled: true,
  },
  {
    id: "bleach",
    title: "Bleach, Vol. 1: The Death & The Strawberry",
    author: "Tite Kubo",
    cover: {
      src: "/images/books/bleach.svg",
      width: 1050,
      height: 1600,
      alt: "Bleach Vol. 1 by Tite Kubo, stark white cover with Hollow skull emblem",
    },
    sourceUrl: "https://www.viz.com/read/manga/bleach-volume-1/product/4",
    coverSourceUrl: "https://www.viz.com/read/manga/bleach-volume-1/product/4",
    spine: { src: "/images/books/bleach-spine.svg", height: 265, width: 38 },
    order: 1,
    enabled: true,
  },
  {
    id: "one-piece",
    title: "One Piece, Vol. 1: Romance Dawn",
    author: "Eiichiro Oda",
    cover: {
      src: "/images/books/one-piece.svg",
      width: 1050,
      height: 1600,
      alt: "One Piece Vol. 1 by Eiichiro Oda, ocean blue cover with straw hat jolly roger emblem",
    },
    sourceUrl: "https://www.viz.com/read/manga/one-piece-volume-1/product/3",
    coverSourceUrl: "https://www.viz.com/read/manga/one-piece-volume-1/product/3",
    spine: { src: "/images/books/one-piece-spine.svg", height: 265, width: 38 },
    order: 2,
    enabled: true,
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen, Vol. 1: Ryomen Sukuna",
    author: "Gege Akutami",
    cover: {
      src: "/images/books/jujutsu-kaisen.svg",
      width: 1050,
      height: 1600,
      alt: "Jujutsu Kaisen Vol. 1 by Gege Akutami, obsidian and cursed purple cover with Sukuna insignia",
    },
    sourceUrl: "https://www.viz.com/read/manga/jujutsu-kaisen-volume-1/product/6105",
    coverSourceUrl: "https://www.viz.com/read/manga/jujutsu-kaisen-volume-1/product/6105",
    spine: { src: "/images/books/jujutsu-kaisen-spine.svg", height: 265, width: 38 },
    order: 3,
    enabled: true,
  },
  {
    id: "attack-on-titan",
    title: "Attack on Titan, Vol. 1: To You, in 2,000 Years",
    author: "Hajime Isayama",
    cover: {
      src: "/images/books/attack-on-titan.svg",
      width: 1050,
      height: 1600,
      alt: "Attack on Titan Vol. 1 by Hajime Isayama, charcoal and crimson cover with Wings of Freedom shield",
    },
    sourceUrl: "https://kodansha.us/series/attack-on-titan/",
    coverSourceUrl: "https://kodansha.us/series/attack-on-titan/",
    spine: { src: "/images/books/attack-on-titan-spine.svg", height: 265, width: 38 },
    order: 4,
    enabled: true,
  },
  {
    id: "death-note",
    title: "Death Note, Vol. 1: Boredom",
    author: "Tsugumi Ohba · Takeshi Obata",
    cover: {
      src: "/images/books/death-note.svg",
      width: 1050,
      height: 1600,
      alt: "Death Note Vol. 1 by Tsugumi Ohba and Takeshi Obata, gothic black cover with red apple motif",
    },
    sourceUrl: "https://www.viz.com/read/manga/death-note-volume-1/product/682",
    coverSourceUrl: "https://www.viz.com/read/manga/death-note-volume-1/product/682",
    spine: { src: "/images/books/death-note-spine.svg", height: 265, width: 38 },
    order: 5,
    enabled: true,
  },
  {
    id: "berserk",
    title: "Berserk, Vol. 1: The Black Swordsman",
    author: "Kentaro Miura",
    cover: {
      src: "/images/books/berserk.svg",
      width: 1050,
      height: 1600,
      alt: "Berserk Vol. 1 by Kentaro Miura, dark fantasy cover with Brand of Sacrifice rune",
    },
    sourceUrl: "https://www.darkhorse.com/Books/12-077/Berserk-Volume-1-TPB",
    coverSourceUrl: "https://www.darkhorse.com/Books/12-077/Berserk-Volume-1-TPB",
    spine: { src: "/images/books/berserk-spine.svg", height: 265, width: 38 },
    order: 6,
    enabled: true,
  },
  {
    id: "high-output-management",
    title: "High Output Management",
    author: "Andrew S. Grove",
    cover: {
      src: "/images/books/high-output-management.svg",
      width: 1050,
      height: 1600,
      alt: "High Output Management by Andrew S. Grove, deep navy cover with managerial leverage diagram",
    },
    sourceUrl: "https://www.penguinrandomhouse.com/books/72224/high-output-management-by-andrew-s-grove/",
    coverSourceUrl: "https://www.penguinrandomhouse.com/books/72224/high-output-management-by-andrew-s-grove/",
    spine: { src: "/images/books/high-output-management-spine.svg", height: 265, width: 40 },
    order: 7,
    enabled: true,
  },
  {
    id: "shoe-dog",
    title: "Shoe Dog",
    author: "Phil Knight",
    cover: {
      src: "/images/books/shoe-dog.svg",
      width: 1067,
      height: 1600,
      alt: "Shoe Dog by Phil Knight, black cover with gold lettering and a red swoosh",
    },
    sourceUrl:
      "https://www.simonandschuster.com/books/Shoe-Dog/Phil-Knight/9781501135927",
    coverSourceUrl:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501135927/shoe-dog-9781501135927_hr.jpg",
    spine: { src: "/images/books/shoe-dog-spine.svg", height: 260, width: 37 },
    order: 8,
    enabled: true,
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    cover: {
      src: "/images/books/atomic-habits.svg",
      width: 1045,
      height: 1600,
      alt: "Atomic Habits by James Clear, cream cover with dotted brown lettering",
    },
    sourceUrl:
      "https://www.penguinrandomhouse.com/books/543993/atomic-habits-by-james-clear/9780735211292/",
    coverSourceUrl:
      "https://hermiene.net/images/books/hi-res/atomic-habits--clear_front.png",
    spine: { src: "/images/books/atomic-habits-spine.svg", height: 252, width: 29 },
    order: 9,
    enabled: true,
  },
];

export function getEnabledBooks() {
  return booksConfig
    .filter((book) => book.enabled !== false)
    .sort((a, b) => a.order - b.order);
}
