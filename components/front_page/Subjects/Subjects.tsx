import React from "react";
import { Subject } from "../Subject/Subject";
import styles from "./styles.module.scss";
const algebra1 = require("../../../public/algebra.png");
const algebra2 = require("../../../public/algebra2.png");
const trigonometry = require("../../../public/trigonometry.png");
const geometry = require("../../../public/geometry.png");
const calculus = require("../../../public/calculus.png");

export const Subjects: React.FC = () => {
  const subjects = [
    {
      id: 0,
      title: "Algebra I",
      subtext:
        "Basics of functions, real numbers, exponents, inequalities, polynomials, rational expressions, etc...",
      image: algebra1,
    },
    {
      id: 1,
      title: "Algebra II",
      subtext:
        "Graphs, functions, matrices, quadratics, the Binomial Theorem, logarithms, etc..",
      image: algebra2,
    },
    {
      id: 2,
      title: "Geometry",
      subtext: "The study of shapes and their properties.",
      image: geometry,
    },
    {
      id: 3,
      title: "Trigonometry",
      subtext:
        "The study of triangles and the relationships between their angles and sides",
      image: trigonometry,
    },
    {
      id: 4,
      title: "Calculus",
      subtext:
        "Limits, continuity at a point, discontinuities, infinite limits, Intermediate Value Theorem(IVT), properties of limits, etc...",
      image: calculus,
    },
  ];

  return (
    <div className={styles.subjects}>
      <h2 className={styles.header}>Subjects I Tutor</h2>
      <p className={styles.text}>
        I'm currently offering tutoring in the follow subjects:
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
        Of course, if you have another subject you'd like tutored, which isn't
        listed above, feel free to reach out. I may be able to do something for
        you!
      </p>
    </div>
  );
};
