// newsData.ts

export interface NewsArticle {
  title: string;
  date: string;
  image: string;
  content: string;
}

export const newsArticles: NewsArticle[] = [
  {
    title: "Wrestleverse Season 2 Begins!",
    date: "28 February 2026",
    image: "/Images/News/WrestleverseImage.png",
    content:
      "Season 2 of Wrestleverse officially begins with major roster shakeups, new rivalries and championship changes expected!",
  },

  {
    title: "WWE 2K26 out March 13th",
    date: "30th January 2026",
    image: "/Images/News/WWE2K26.png",
    content:
      "The Show never stops! Thats right, the next installment of the WWE 2K Games is ready and will be out 13th March",
  },



];