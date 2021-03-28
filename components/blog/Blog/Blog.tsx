import React from "react";
import { LinkElement } from "../LinkElement/LinkElement";
import { Footer } from "../../Footer/Footer";
import styles from "./styles.module.scss";

const blog1 = require("../../../public/blogs/distance_learning.jpg");
const blog2 = require("../../../public/blogs/online_tutoring.jpg");
const blog3 = require("../../../public/blogs/work.jpg");
const blog4 = require("../../../public/blogs/parent.jpg");
const blog5 = require("../../../public/blogs/3-22-21/calc_header.png");
const blog6 = require("../../../public/blogs/algebra_header.png");
const blog7 = require("../../../public/blogs/arithmetic_header.png");
const blog8 = require("../../../public/blogs/precalc_header.png");
const blog9 = require("../../../public/blogs/sat_header.png");
const blog10 = require("../../../public/blogs/3-27-21/calc_header_3_27_21.png");
const blog11 = require("../../../public/blogs/3-28-21/arithmetic_header.png");

export const Blog: React.FC = () => {
  const blog_posts = [
    {
      id: 0,
      title: "Arithmetic 3/28/21",
      description: "Simplification, Multiplication & Long Division",
      route: "/blog/daily-posts/3-28-21",
      date: "3/28/2021",
      image: blog11,
    },
    {
      id: 1,
      title: "Calculus 3/27/21",
      description: "Derivatives, Limits & Continuity",
      route: "/blog/daily-posts/3-27-21",
      date: "3/27/2021",
      image: blog10,
    },
    {
      id: 2,
      title: "Daily Sat Prep 3/26/21",
      description: "word problems & inequalities",
      route: "/blog/daily-posts/3-26-21",
      date: "3/26/2021",
      image: blog9,
    },
    {
      id: 3,
      title: "Daily Pre-Calc 3/25/21",
      description:
        "Logarithmic equations, complex simplification & imaginary roots",
      route: "/blog/daily-posts/3-25-21",
      date: "3/25/2021",
      image: blog8,
    },
    {
      id: 4,
      title: "Daily Arithmetic 3/24/21",
      description:
        "Simplification of simple expressions, fractional multiplication and fractional division",
      route: "/blog/daily-posts/3-24-21",
      date: "3/24/2021",
      image: blog7,
    },
    {
      id: 5,
      title: "Daily Algebra 3/23/21",
      description: "Factoring, root solving, and distribution",
      route: "/blog/daily-posts/3-23-21",
      date: "3/23/2021",
      image: blog6,
    },
    {
      id: 6,
      title: "Daily Calculus 3/22/21",
      description:
        "Solving limits, finding the derivative by definition, and determining the antiderivative",
      route: "/blog/daily-posts/3-22-21",
      date: "3/22/2021",
      image: blog5,
    },
    {
      id: 7,
      title: "Families in Lockdown",
      description:
        "How lockdown is impacting families and revealing gender inequality",
      route: "/blog/families-in-lockdown",
      date: "3/17/2021",
      image: blog4,
    },
    {
      id: 8,
      title: "The Online Inequality",
      description:
        "Is online education accessible for the Americans who need it?",
      route: "/blog/the-online-inequality",
      date: "3/8/2021",
      image: blog3,
    },
    {
      id: 9,
      title: "The Role Tutoring Will Play",
      description:
        "What can we expect from the future of the online tutoring industry?",
      route: "/blog/the-role-tutoring-will-play",
      date: "3/1/2021",
      image: blog2,
    },
    {
      id: 10,
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
