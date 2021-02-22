import React from "react";
import { LinkElement } from "../LinkElement/LinkElement";
import styles from "./styles.module.scss";

const blog1 = require("../../../public/algebra.png");

export const Blog: React.FC = () => {
  const blog_posts = [
    {
      id: 0,
      title: "Mathematics in the Pandemic",
      description: "How have our students been affected by the pandemic?",
      route: "/blog/math-in-the-pandemic",
      image: blog1,
    },
  ];

  return (
    <div className={styles.blog}>
      <h1 className={styles.header}>Blog</h1>
      {blog_posts.map((el: any) => (
        <LinkElement
          title={el.title}
          description={el.description}
          route={el.route}
          image={el.image}
        />
      ))}
    </div>
  );
};
