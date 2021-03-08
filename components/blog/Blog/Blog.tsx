import React from "react";
import { LinkElement } from "../LinkElement/LinkElement";
import styles from "./styles.module.scss";

const blog1 = require("../../../public/blogs/distance_learning.jpg");
const blog2 = require("../../../public/blogs/online_tutoring.jpg");
const blog3 = require("../../../public/blogs/work.jpg");

export const Blog: React.FC = () => {
  const blog_posts = [
    {
      id: 0,
      title: "Mathematics in the Pandemic",
      description: "How have our students been affected by the pandemic?",
      route: "/blog/math-in-the-pandemic",
      image: blog1,
    },
    {
      id: 1,
      title: "The Role Tutoring Will Play",
      description:
        "What can we expect from the future of the online tutoring industry?",
      route: "/blog/the-role-tutoring-will-play",
      image: blog2,
    },
    {
      id: 2,
      title: "The Online Inequality",
      description:
        "Is online education accessible for the Americans who need it?",
      route: "/blog/the-online-inequality",
      image: blog3,
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
