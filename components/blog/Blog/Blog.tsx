import React from "react";
import { LinkElement } from "../LinkElement/LinkElement";
import { Footer } from "../../Footer/Footer";
import styles from "./styles.module.scss";

const blog1 = require("../../../public/blogs/distance_learning.jpg");
const blog2 = require("../../../public/blogs/online_tutoring.jpg");
const blog3 = require("../../../public/blogs/work.jpg");
const blog4 = require("../../../public/blogs/parent.jpg");

export const Blog: React.FC = () => {
  const blog_posts = [
    {
      id: 0,
      title: "Daily Calculus 3/22/21",
      description:
        "Assorted calculus problems to get you through your semester",
      route: "/blog/daily-posts/3-22-21",
      date: "3/22/2021",
      image: blog4,
    },
    {
      id: 1,
      title: "Families in Lockdown",
      description:
        "How lockdown is impacting families and revealing gender inequality",
      route: "/blog/families-in-lockdown",
      date: "3/17/2021",
      image: blog4,
    },
    {
      id: 2,
      title: "The Online Inequality",
      description:
        "Is online education accessible for the Americans who need it?",
      route: "/blog/the-online-inequality",
      date: "3/8/2021",
      image: blog3,
    },
    {
      id: 3,
      title: "The Role Tutoring Will Play",
      description:
        "What can we expect from the future of the online tutoring industry?",
      route: "/blog/the-role-tutoring-will-play",
      date: "3/1/2021",
      image: blog2,
    },
    {
      id: 4,
      title: "Mathematics in the Pandemic",
      description: "How have our students been affected by the pandemic?",
      route: "/blog/math-in-the-pandemic",
      date: "2/22/2021",
      image: blog1,
    },
  ];

  return (
    <div className={styles.blog_container}>
      <div className={styles.blog}>
        <h1 className={styles.header}>Our Thoughts on the World</h1>
        <h2 className={styles.subheader}>The Functional Tutoring Blog</h2>
        <div className={styles.post_containers}>
          {blog_posts.map((el: any) => (
            <LinkElement
              title={el.title}
              description={el.description}
              route={el.route}
              date={el.date}
              image={el.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
