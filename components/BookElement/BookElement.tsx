import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  author: string;
  description: string;
  url: string;
}

export const BookElement: React.FC<Props> = (props) => {
  return (
    <Link href={props.url}>
      <div className={styles.book_element}>
        <h2 className={styles.header}>
          "{props.title}" by {props.author}
        </h2>
        <p className={styles.description}>{props.description}</p>
      </div>
    </Link>
  );
};
