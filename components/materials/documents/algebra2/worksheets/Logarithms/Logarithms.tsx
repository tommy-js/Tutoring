import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const dice = require("../../../../../../public/dice.png");

export const Logarithms: React.FC = () => {
  const [problems, setProblems] = useState([] as any);

  const problem_base = [
    {
      text: "Simplify",
      problem: "\\log(10)",
      solution: "1",
      ind: 1,
    },
    {
      text: "Simplify",
      problem: "\\ln(e^2)",
      solution: "2",
      ind: 2,
    },
    {
      text: "Simplify",
      problem: "\\log(1)",
      solution: "0",
      ind: 3,
    },
    {
      text: "Simplify",
      problem: "\\frac{\\ln(e)+\\ln(e^3)}{\\log(100)}",
      solution: "2",
      ind: 4,
    },
    {
      text: "Simplify",
      problem: "\\log(1000)-\\log(10)",
      solution: "2",
      ind: 5,
    },
    {
      text: "Simplify",
      problem: "\\log(200)-\\log(20)+\\log(10)",
      solution: "2",
      ind: 6,
    },
    {
      text: "Simplify",
      problem: "\\frac{\\ln(e^3)}{\\ln(e)}",
      solution: "3",
      ind: 7,
    },
    {
      text: "Simplify",
      problem: "\\log_{4}(16)",
      solution: "4",
      ind: 8,
    },
    {
      text: "Simplify",
      problem: "\\log_{2}(32)-\\log_{2}(16)",
      solution: "1",
      ind: 9,
    },
    {
      text: "Simplify",
      problem: "\\log_{3}(12)-\\log_{3}(4)",
      solution: "1",
      ind: 10,
    },
    {
      text: "Simplify",
      problem: "\\log_{6}(12)+\\log_{6}(3)",
      solution: "2",
      ind: 11,
    },
    {
      text: "Simplify",
      problem: "log_{9}(81)",
      solution: "2",
      ind: 12,
    },
    {
      text: "Simplify",
      problem: "2\\ln(e^2)+\\ln(e)",
      solution: "5",
      ind: 13,
    },
    {
      text: "Simplify",
      problem: "\\frac{\\ln(e^2)}{\\ln(e)}-\\ln(e)",
      solution: "1",
      ind: 14,
    },
    {
      text: "Simplify",
      problem: "14\\ln(e)-7\\ln(e^2)",
      solution: "0",
      ind: 15,
    },
    {
      text: "Simplify",
      problem: "\\log_{7}(343)-\\log_{7}(7)",
      solution: "2",
      ind: 16,
    },
    {
      text: "Simplify",
      problem: "2\\log_{4}(64)",
      solution: "6",
      ind: 17,
    },
    {
      text: "Simplify",
      problem: "3\\ln(2e)-3\\ln(3)",
      solution: "3",
      ind: 18,
    },
    {
      text: "Simplify",
      problem: "\\log_{3}(27)",
      solution: "3",
      ind: 19,
    },
    {
      text: "Simplify",
      problem: "\\log_{2}(64)",
      solution: "6",
      ind: 20,
    },
    {
      text: "Simplify",
      problem: "\\log_{12}(144)",
      solution: "2",
      ind: 21,
    },
    {
      text: "Simplify",
      problem: "\\log_{4}(4)",
      solution: "1",
      ind: 22,
    },
    {
      text: "Simplify",
      problem: "\\log_{6}(1)",
      solution: "0",
      ind: 23,
    },
    {
      text: "Simplify",
      problem: "\\log(20)-\\log(2)",
      solution: "1",
      ind: 24,
    },
    {
      text: "Simplify",
      problem: "\\log(5)+\\log(20)",
      solution: "2",
      ind: 25,
    },
    {
      text: "Simplify",
      problem: "\\log_{5}(50)-\\log_{5}(2)",
      solution: "2",
      ind: 26,
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
    <div className={styles.logarithms}>
      <h1 className={styles.header}>
        Practice with Logarithms
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
