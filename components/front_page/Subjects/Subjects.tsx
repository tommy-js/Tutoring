import React from "react";
import Link from "next/link";
import { Subject } from "../Subject/Subject";
import styles from "./styles.module.scss";
const regents = require("../../../public/regents_prep.png");
const sat = require("../../../public/sat_prep.png");
const arithmetic = require("../../../public/arithmetic.png");
const geometry = require("../../../public/geometry.png");
const algebra1 = require("../../../public/algebra.png");
const algebra2 = require("../../../public/algebra2.png");
const trigonometry = require("../../../public/trigonometry.png");
const calculus = require("../../../public/calculus.png");

export const Subjects: React.FC = () => {
  const subjects = [
    {
      id: 0,
      title: "Regents Prep",
      subtext:
        "Prepare to take the New York State Regents examination in mathematics!",
      image: regents,
      link: "/materials/regents_prep",
    },
    {
      id: 1,
      title: "SAT Prep",
      subtext: "Get ready for the SAT mathematics exam!",
      image: sat,
      link: "/materials/sat",
    },
    {
      id: 2,
      title: "Arithmetic",
      subtext:
        "Addition, subtraction, multiplication, division, the basics of fractions and more.",
      image: arithmetic,
      link: "/materials/arithmetic",
    },
    {
      id: 3,
      title: "Geometry",
      subtext: "The study of shapes and their properties.",
      image: geometry,
      link: "/materials/geometry",
    },
    {
      id: 4,
      title: "Algebra I",
      subtext:
        "Basics of functions, real numbers, exponents, inequalities, polynomials, rational expressions, etc...",
      image: algebra1,
      link: "/materials/algebra1",
    },
    {
      id: 5,
      title: "Algebra II",
      subtext:
        "Graphs, functions, matrices, quadratics, the Binomial Theorem, logarithms, etc..",
      image: algebra2,
      link: "/materials/algebra2",
    },
    {
      id: 6,
      title: "Pre-Calculus",
      subtext:
        "Complex numbers, polynomials, trigonometry, matrices, series, probability, etc... A general preparatory course for the beginning calculus student.",
      image: trigonometry,
      link: "/materials/precalc",
    },
    {
      id: 7,
      title: "Calculus 1",
      subtext:
        "Limits, continuity at a point, discontinuities, infinite limits, Intermediate Value Theorem(IVT), properties of limits, etc...",
      image: calculus,
      link: "/materials/calculus1",
    },
  ];

  return (
    <div className={styles.subjects}>
      <h2 className={styles.header}>Get The Help You Need</h2>
      <p className={styles.text}>
        I'm currently offering tutoring in a variety of subjects
      </p>
      {subjects.map((el: any) => (
        <Subject
          id={el.id}
          title={el.title}
          subtext={el.subtext}
          image={el.image}
          link={el.link}
        />
      ))}
      <p className={styles.text}>
        Don't see what you need?{" "}
        <Link href="/contact">
          <a className={styles.link}>Reach out</a>
        </Link>
        !
      </p>
    </div>
  );
};
