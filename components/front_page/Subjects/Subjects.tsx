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
      id: 1,
      title: "SAT Prep",
      subtext: "Get ready for the SAT mathematics exam!",
      image: sat,
      link: "/subjects/sat",
    },
    {
      id: 2,
      title: "Arithmetic",
      subtext:
        "Addition, subtraction, multiplication, division, the basics of fractions and more.",
      image: arithmetic,
      link: "/subjects/arithmetic",
    },
    {
      id: 3,
      title: "Geometry",
      subtext: "The study of shapes and their properties.",
      image: geometry,
      link: "/subjects/geometry",
    },
    {
      id: 4,
      title: "Algebra I",
      subtext:
        "Basics of functions, real numbers, exponents, inequalities, polynomials, rational expressions, etc...",
      image: algebra1,
      link: "/subjects/algebra",
    },
    {
      id: 5,
      title: "Algebra II",
      subtext:
        "Graphs, functions, matrices, quadratics, the Binomial Theorem, logarithms, etc..",
      image: algebra2,
      link: "/subjects/algebraII",
    },
    {
      id: 6,
      title: "Pre-Calculus",
      subtext:
        "Complex numbers, polynomials, trigonometry, matrices, series, probability, etc... A general preparatory course for the beginning calculus student.",
      image: trigonometry,
      link: "/subjects/precalculus",
    },
    {
      id: 7,
      title: "Calculus I",
      subtext:
        "Limits, continuity at a point, discontinuities, infinite limits, Intermediate Value Theorem(IVT), properties of limits, etc...",
      image: calculus,
      link: "/subjects/calculus",
    },
  ];

  return (
    <div className={styles.subjects}>
      <h2 className={styles.header}>Get The Help You Need</h2>
      <p className={styles.text}>Select a subject to get started:</p>
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
