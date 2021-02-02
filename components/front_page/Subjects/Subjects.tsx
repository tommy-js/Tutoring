import React from "react";
import { Subject } from "../Subject/Subject";
import styles from "./styles.module.scss";
const regents = require("../../../public/regents.png");
const sat = require("../../../public/sat.png");
const algebra1 = require("../../../public/algebra.png");
const algebra2 = require("../../../public/algebra2.png");
const trigonometry = require("../../../public/trigonometry.png");
const geometry = require("../../../public/geometry.png");
const calculus = require("../../../public/calculus.png");

export const Subjects: React.FC = () => {
  const subjects = [
    {
      id: 0,
      title: "Regents Prep",
      subtext:
        "Prepare to take the New York State Regents examination in mathematics!",
      image: regents,
    },
    {
      id: 1,
      title: "SAT Prep",
      subtext: "Get ready for the SAT mathematics exam!",
      image: sat,
    },
    {
      id: 2,
      title: "Geometry",
      subtext: "The study of shapes and their properties.",
      image: geometry,
    },
    {
      id: 3,
      title: "Algebra I",
      subtext:
        "Basics of functions, real numbers, exponents, inequalities, polynomials, rational expressions, etc...",
      image: algebra1,
    },
    {
      id: 4,
      title: "Algebra II",
      subtext:
        "Graphs, functions, matrices, quadratics, the Binomial Theorem, logarithms, etc..",
      image: algebra2,
    },
    {
      id: 5,
      title: "Pre-Calculus",
      subtext:
        "Complex numbers, polynomials, trigonometry, matrices, series, probability, etc... A general preparatory course for the beginning calculus student.",
      image: trigonometry,
    },
    {
      id: 6,
      title: "Calculus 1",
      subtext:
        "Limits, continuity at a point, discontinuities, infinite limits, Intermediate Value Theorem(IVT), properties of limits, etc...",
      image: calculus,
    },
  ];

  return (
    <div className={styles.subjects}>
      <h2 className={styles.header}>Subjects I Tutor</h2>
      <p className={styles.text}>
        I am currently offering tutoring in the follow subjects:
      </p>
      {subjects.map((el: any) => (
        <Subject
          id={el.id}
          title={el.title}
          subtext={el.subtext}
          image={el.image}
        />
      ))}
      <p className={styles.text}>
        Please reach out if you have another subject you'd need tutoring in,
        though. I have a great deal of experience in a number of subjects, and
        so I may be able to do something for you!
      </p>
    </div>
  );
};
