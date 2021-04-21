import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const image = require("../../../public/blogs/calculus_thumbnail_2.png");

export const RecentBlog: React.FC = () => {
  return (
    <Link href="/blog/daily-posts/4-21-21">
      <div className={styles.recent_blog}>
        <h2 className={styles.header}>Check out our latest blog post!</h2>
        <div className={styles.image_block}>
          <img src={image} className={styles.image} />
        </div>
        <div className={styles.subtext}>
          <h3 className={styles.text_header}>
            Calculus | Chain & Product Rules
          </h3>
          <h4 className={styles.date}>4/21/21</h4>
          <p className={styles.text}>
            Review the Chain and Product Rues and get up to speed for your
            exams!
          </p>
          <div className={styles.button_container}>
            <button className={styles.button}>Read More</button>
          </div>
        </div>
      </div>
    </Link>
  );
};
