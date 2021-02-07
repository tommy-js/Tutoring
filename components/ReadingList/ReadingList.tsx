import React from "react";
import { BookElement } from "../BookElement/BookElement";
import styles from "./styles.module.scss";

export const ReadingList: React.FC = () => {
  const list = [
    {
      title: "Fundamentals of College Mathematics",
      author: "Charles Harold Helliwell",
      description:
        "Published in 1935/36, this college textbook gives a full overview of the mathematics a graduating mathematics major should know. I originally picked this book up at a thriftstore, and was surprised as the good condition it was in. I was also surprised at the depth the text went into regarding its proofs and theorems.",
      url:
        "https://www.goodreads.com/book/show/6261463-fundamentals-of-college-mathematics",
    },
    {
      title: "e: the Story of a Number",
      author: "Eli Maor",
      description:
        "This little book was published in 1993 and goes into a fair bit of detail regarding not only the number e, but also the development of the Calculus, the relationship of geometry to modern science, and a variety of other topics. It could probably be read in a day, but is a lot of fun regardless.",
      url: "https://www.goodreads.com/book/show/271361.e",
    },
    {
      title: "Journey through Genius: The Great Theorems of Mathematics",
      author: "William Dunham",
      description:
        "Another great book for the mathematically inclined generalist. It was published in 1991 and is a bit more advanced than the book by Maor. It focuses largely on geometry, no doubt due to the fact that this study has occupied the minds of mathematics for over two thousand years.",
      url: "https://www.goodreads.com/book/show/116185.Journey_through_Genius",
    },
  ];

  return (
    <div className={styles.reading_list}>
      <h1 className={styles.header}>My Reading List</h1>
      <h2 className={styles.subheader}>
        Books and papers I'm currently reading
      </h2>
      {list.map((el: any) => (
        <BookElement
          title={el.title}
          author={el.author}
          description={el.description}
          url={el.url}
        />
      ))}
    </div>
  );
};
