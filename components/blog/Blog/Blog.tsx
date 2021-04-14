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
const arithmetic_header = require("../../../public/blogs/Arithmetic_Thumbnail.png");
const arithmetic_header_2 = require("../../../public/blogs/arithmetic_thumbnail_2.png");
const algebra_header = require("../../../public/blogs/Algebra_Thumbnail.png");
const algebra_header_2 = require("../../../public/blogs/algebra_thumbnail_2.png");
const precalc_header = require("../../../public/blogs/Precalculus_Thumbnail.png");
const precalc_header_2 = require("../../../public/blogs/precalculus_thumbnail_2.png");
const sat_header = require("../../../public/blogs/SAT_Thumbnail.png");
const sat_header_2 = require("../../../public/blogs/sat_prep_thumbnail_2.png");
const calculus_header = require("../../../public/blogs/Calculus_Thumbnail.png");
const calculus_header_2 = require("../../../public/blogs/calculus_thumbnail_2.png");

export const Blog: React.FC = () => {
  const blog_posts = [
    {
      id: "584b70b1-5d20-4f15-bea8-86c88a1ad2d1",
      title: "Daily Precalculus",
      description:
        "Complex Simplification, Synthetic Division & Fundamental Theorem of Algebra",
      route: "/blog/daily-posts/4-14-21",
      date: "4/14/2021",
      image: precalc_header_2,
    },
    {
      id: "2b60f91e-64be-460b-996b-6b2f6694c189",
      title: "Daily Algebra",
      description:
        "Zero Product Property, Polynomial Addition & Systems of Equations",
      route: "/blog/daily-posts/4-13-21",
      date: "4/13/2021",
      image: algebra_header_2,
    },
    {
      id: "178e7a4c-4717-4821-bb94-c35a506044aa",
      title: "Daily Arithmetic",
      description:
        "Fraction Simplification, Adding Decimals & Rewriting Decimals as Fractions",
      route: "/blog/daily-posts/4-12-21",
      date: "4/12/2021",
      image: arithmetic_header_2,
    },
    {
      id: "3e8668c7-db24-4277-ad8a-3aa7b73a561a",
      title: "Daily Calculus",
      description: "Optimization, Definite Integration & Derivative Definition",
      route: "/blog/daily-posts/4-11-21",
      date: "4/11/2021",
      image: calculus_header_2,
    },
    {
      id: "3390435c-78f1-487e-bec7-b483caa5ae47",
      title: "Daily SAT Prep",
      description: "Solving for x, Inequality Equations, Quadratics",
      route: "/blog/daily-posts/4-10-21",
      date: "4/10/2021",
      image: sat_header_2,
    },
    {
      id: "6ae7733f-3416-40e2-8d5e-102780b769d8",
      title: "Daily Precalculus",
      description: "Function Inverses, Vectors, & Polynomial Simplification",
      route: "/blog/daily-posts/4-9-21",
      date: "4/9/2021",
      image: precalc_header_2,
    },
    {
      id: "4f2b12b7-79f1-4daf-9268-eb8e12b40aaa",
      title: "Daily Algebra",
      description: "Scientific Notation, Absolute Value & Reciprocals",
      route: "/blog/daily-posts/4-8-21",
      date: "4/8/2021",
      image: algebra_header_2,
    },
    {
      id: "21a867d8-31cb-4cf1-8955-bc1f9466a3d2",
      title: "Daily Arithmetic",
      description: "Improper Fractions, Addition & Decimals",
      route: "/blog/daily-posts/4-7-21",
      date: "4/7/2021",
      image: arithmetic_header_2,
    },
    {
      id: "ef2a4776-1d68-4b3f-8fef-df1c73589513",
      title: "Daily Calculus",
      description:
        "Intermediate Value Theorem, Maximums & Minimums & Inflection Points",
      route: "/blog/daily-posts/4-6-21",
      date: "4/6/2021",
      image: calculus_header,
    },
    {
      id: "d264d74c-6b20-4c5f-bdc1-7ae04e63adbd",
      title: "Daily SAT Prep",
      description: "Equation Solving, Imaginary Numbers & System of Equations",
      route: "/blog/daily-posts/4-5-21",
      date: "4/5/2021",
      image: sat_header,
    },
    {
      id: "6ec0b075-15f1-4762-93c6-af6068ab1388",
      title: "Daily Precalculus",
      description: "Function Composition & Complex Roots",
      route: "/blog/daily-posts/4-4-21",
      date: "4/4/2021",
      image: precalc_header,
    },
    {
      id: "1b67f113-a65b-4340-a5cc-c91c32f66f11",
      title: "Daily Algebra",
      description: "Root Solving, Expression Simplification & Factorials",
      route: "/blog/daily-posts/4-3-21",
      date: "4/3/2021",
      image: algebra_header,
    },
    {
      id: "d6cc5061-1501-4f70-b059-6c92a916faf6",
      title: "Daily Arithmetic",
      description: "Greatest Common Divisor, Squaring & Square Rooting",
      route: "/blog/daily-posts/4-2-21",
      date: "4/2/2021",
      image: arithmetic_header,
    },
    {
      id: "058ebd8f-fd7a-49c9-9c9b-750f5dfaef53",
      title: "Daily Calculus",
      description: "Continuity, Derivatives & Radius of Convergence",
      route: "/blog/daily-posts/4-1-21",
      date: "4/1/2021",
      image: calculus_header,
    },
    {
      id: "4e3e1ace-d275-435d-a8b6-4d2c4755d5a5",
      title: "Daily SAT Prep",
      description: "Word Problems",
      route: "/blog/daily-posts/3-31-21",
      date: "3/31/2021",
      image: sat_header,
    },
    {
      id: "88b045e8-eff4-48bb-8bca-49e4deda71e3",
      title: "Daily Precalculus",
      description:
        "Series Convergence, Trigonometric Equations & Function Domains domains",
      route: "/blog/daily-posts/3-30-21",
      date: "3/30/2021",
      image: precalc_header,
    },
    {
      id: "3f162d26-c29a-41b1-a32e-613794f7b45a",
      title: "Daily Algebra",
      description: "Solving Exponential Equations, Series & Binomial Theorem",
      route: "/blog/daily-posts/3-29-21",
      date: "3/29/2021",
      image: algebra_header,
    },
    {
      id: "118fa07b-aadb-424c-8838-35bb9df4ff4c",
      title: "Daily Arithmetic",
      description: "Simplification, Multiplication & Long Division",
      route: "/blog/daily-posts/3-28-21",
      date: "3/28/2021",
      image: blog11,
    },
    {
      id: "77c6594f-20ff-4722-be32-9357c806b6ce",
      title: "Daily Calculus",
      description: "Derivatives, Limits & Continuity",
      route: "/blog/daily-posts/3-27-21",
      date: "3/27/2021",
      image: blog10,
    },
    {
      id: "2a76b837-85ef-4a30-a0fc-5c783703b1b0",
      title: "Daily Sat Prep",
      description: "word problems & inequalities",
      route: "/blog/daily-posts/3-26-21",
      date: "3/26/2021",
      image: blog9,
    },
    {
      id: "3bd6c13d-694f-4c62-9037-cfcc8a35f125",
      title: "Daily Pre-Calc",
      description:
        "Logarithmic equations, complex simplification & imaginary roots",
      route: "/blog/daily-posts/3-25-21",
      date: "3/25/2021",
      image: blog8,
    },
    {
      id: "f5b14f99-3d34-426b-a6ca-3177dc3f380b",
      title: "Daily Arithmetic",
      description:
        "Simplification of simple expressions, fractional multiplication and fractional division",
      route: "/blog/daily-posts/3-24-21",
      date: "3/24/2021",
      image: blog7,
    },
    {
      id: "a1a5967f-b12d-4699-a06b-8a34df5a61f9",
      title: "Daily Algebra",
      description: "Factoring, root solving, and distribution",
      route: "/blog/daily-posts/3-23-21",
      date: "3/23/2021",
      image: blog6,
    },
    {
      id: "ff5abbac-2f96-46f3-92ff-572805652ad2",
      title: "Daily Calculus",
      description:
        "Solving limits, finding the derivative by definition, and determining the antiderivative",
      route: "/blog/daily-posts/3-22-21",
      date: "3/22/2021",
      image: blog5,
    },
    {
      id: "26f49210-f223-4304-b133-e00fc3eb09d1",
      title: "Families in Lockdown",
      description:
        "How lockdown is impacting families and revealing gender inequality",
      route: "/blog/families-in-lockdown",
      date: "3/17/2021",
      image: blog4,
    },
    {
      id: "4cebbd71-d862-4d45-a491-b6ca977b2f78",
      title: "The Online Inequality",
      description:
        "Is online education accessible for the Americans who need it?",
      route: "/blog/the-online-inequality",
      date: "3/8/2021",
      image: blog3,
    },
    {
      id: "3fd199a8-ba2e-40d3-aeb5-a1f011055e9d",
      title: "The Role Tutoring Will Play",
      description:
        "What can we expect from the future of the online tutoring industry?",
      route: "/blog/the-role-tutoring-will-play",
      date: "3/1/2021",
      image: blog2,
    },
    {
      id: "be255845-2c65-4519-9645-527d9e29b360",
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
