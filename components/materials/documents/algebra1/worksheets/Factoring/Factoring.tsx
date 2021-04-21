import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import styles from "./styles.module.scss";

const dice = require("../../../../../../public/dice.png");

export const Factoring: React.FC = () => {
  const [problems, setProblems] = useState([] as any);

  const problem_base = [
    {
      text: "Factor",
      problem: "x^2+6x+8",
      solution: "(x+4)(x+2)",
      ind: 0,
    },
    {
      text: "Factor",
      problem: "x^2+12x+36",
      solution: "(x+6)^2",
      ind: 1,
    },
    {
      text: "Distribute",
      problem: "(x^2+y^3)(x^3+y)",
      solution: "x^5+x^2y+x^3y^3+y^4",
      ind: 2,
    },
    {
      text: "Factor",
      problem: "5x^2+22x+21",
      solution: "(5x+7)(x+3)",
      ind: 3,
    },
    {
      text: "Distribute",
      problem: "4x(x^2-x)(x^3+2x)",
      solution: "4x^6+8x^4-4x^5-8x^3",
      ind: 4,
    },
    {
      text: "Distribute",
      problem: "(ax+by)(cd+ef)",
      solution: "axcd+axef+bycd+byef",
      ind: 5,
    },
    {
      text: "Factor",
      problem: "x^2-2x-35",
      solution: "(x+5)(x-7)",
      ind: 6,
    },
    {
      text: "Factor",
      problem: "2x^2-9x-18",
      solution: "(2x+3)(x-6)",
      ind: 7,
    },
    {
      text: "Factor",
      problem: "4x^2-22x+28",
      solution: "(2x-4)(2x-7)",
      ind: 8,
    },
    {
      text: "Factor",
      problem: "7x^2-19x-6",
      solution: "(7x+2)(x-3)",
      ind: 9,
    },
    {
      text: "Factor",
      problem: "x^2+5x-36",
      solution: "(x+9)(x-4)",
      ind: 10,
    },
    {
      text: "Factor",
      problem: "3x^2-x-14",
      solution: "(3x-7)(x+2)",
      ind: 11,
    },
    {
      text: "Factor",
      problem: "x^2+13x+22",
      solution: "(x+11)(x+2)",
      ind: 12,
    },
    {
      text: "Factor",
      problem: "x^2-6x-16",
      solution: "(x-8)(x+2)",
      ind: 13,
    },
    {
      text: "Distribute",
      problem: "(6x+11)(3x-2)",
      solution: "18x^2+21x-22",
      ind: 14,
    },
    {
      text: "Distribute",
      problem: "(x^2+6x-2)(3x-7)",
      solution: "3x^3+11x^2-48x+14",
      ind: 15,
    },
    {
      text: "Distribute",
      problem: "4a^2(3b+5a)",
      solution: "12a^2b+20a^3",
      ind: 16,
    },
    {
      text: "Distribute",
      problem: "13a(4ab-3b)",
      solution: "52a^2b-39ab",
      ind: 17,
    },
    {
      text: "Distribute",
      problem: "(6x^2+2x)(4x+6)",
      solution: "24x^3+42x^2+12x",
      ind: 18,
    },
    {
      text: "Distribute",
      problem: "(3c+2a)(4a-7a)",
      solution: "-9ac-6a^2",
      ind: 19,
    },
    {
      text: "Distribute",
      problem: "(12x^2+6)(3x^2-4)",
      solution: "36x^4-30x^2-24",
      ind: 20,
    },
    {
      text: "Factor",
      problem: "x^2-1",
      solution: "(x-1)(x+1)",
      ind: 21,
    },
    {
      text: "Factor",
      problem: "x^2+2x+1",
      solution: "(x+1)^2",
      ind: 22,
    },
    {
      text: "Factor",
      problem: "x^2-x-6",
      solution: "(x-3)(x+2)",
      ind: 23,
    },
    {
      text: "Factor",
      problem: "x^2-9x-22",
      solution: "(x-11)(x+2)",
      ind: 24,
    },
    {
      text: "Factor",
      problem: "x^2+15x-34",
      solution: "(x+17)(x-2)",
      ind: 25,
    },
    {
      text: "Factor",
      problem: "x^2-10x+21",
      solution: "(x-7)(x-3)",
      ind: 26,
    },
    {
      text: "Factor",
      problem: "x^2+4x+4",
      solution: "(x+2)^2",
      ind: 27,
    },
    {
      text: "Factor",
      problem: "(x-7)^2",
      solution: "x^2-14x+49",
      ind: 28,
    },
    {
      text: "Factor",
      problem: "9x^2+12x+4",
      solution: "(3x+2)^2",
      ind: 29,
    },
    {
      text: "Factor",
      problem: "6x^2-11x-7",
      solution: "(3x-7)(2x+1)",
      ind: 30,
    },
    {
      text: "Factor",
      problem: "6x^2+22x-8",
      solution: "(x+4)(6x-2)",
      ind: 31,
    },
    {
      text: "Factor",
      problem: "x^2+8x+16",
      solution: "(x+4)^2",
      ind: 32,
    },
    {
      text: "Distribute",
      problem: "3x(4x^2-7)",
      solution: "12x^2-21x",
      ind: 33,
    },
    {
      text: "Distribute",
      problem: "12a(3b+a)",
      solution: "36ab+12a^2",
      ind: 34,
    },
    {
      text: "Distribute",
      problem: "(a-b)(2b+3a)",
      solution: "3a^2-2b^2-ab",
      ind: 35,
    },
    {
      text: "Distribute",
      problem: "\\frac{12}{13}a(7b-3a)",
      solution: "\\frac{84}{13}ab-\\frac{36}{13}a^2",
      ind: 36,
    },
  ];

  useEffect(() => {
    let arrayCopy = [...problem_base];
    let arr = [];
    for (let i = 0; i < 10; i++) {
      let ind = Math.floor(Math.random() * arrayCopy.length);
      arr.push(arrayCopy[ind]);
      arrayCopy.splice(ind, 1);
    }
    setProblems(arr);
  }, []);

  return (
    <div className={styles.factoring}>
      <h1 className={styles.header}>
        Factoring & Distribution Practice{" "}
        <div className={styles.image_container}>
          <img className={styles.image} src={dice} alt="image of orange dice" />
        </div>
        <div className={styles.hidden_explanation}>
          <span>This page randomly generates problems!</span>
        </div>
      </h1>
      <Link href="/formatting">
        <a className={styles.formatting_link}>Need help formatting?</a>
      </Link>
      {problems.map((el: any) => (
        <div key={el.ind}>
          <WordQuestion
            index={problems.indexOf(el) + 1}
            text={el.text}
            function={el.problem}
            solution={el.solution}
            key={el.ind}
          />
        </div>
      ))}
      <div className={styles.bottom}></div>
    </div>
  );
};
