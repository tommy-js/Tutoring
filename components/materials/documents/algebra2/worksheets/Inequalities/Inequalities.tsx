import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const dice = require("../../../../../../public/dice.png");

export const Inequalities: React.FC = () => {
  const [problems, setProblems] = useState([] as any);

  const problem_base = [
    {
      text: "Simplify",
      problem: "4x \\geq \\frac{4}{5}",
      solution: "x \\geq \\frac{1}{5}",
      ind: 1,
    },
    {
      text: "Simplify",
      problem: "\\frac{3}{2}x+7 > 2",
      solution: "x > -\\frac{10}{3}",
      ind: 2,
    },
    {
      text: "Simplify",
      problem: "4x^2-2 > 0",
      solution: "x > \\frac{\\sqrt{2}}{2}",
      ind: 3,
    },
    {
      text: "Simplify",
      problem: "7+x < 4",
      solution: "x < -3",
      ind: 4,
    },
    {
      text: "Simplify",
      problem: "2x+3 < 12",
      solution: "x < \\frac{9}{2}",
      ind: 5,
    },
    {
      text: "Simplify",
      problem: "3 < 5x-9 < 8",
      solution: "\\frac{12}{5} < x < \\frac{17}{5}",
      ind: 6,
    },
    {
      text: "Simplify",
      problem: "12-2x > 5",
      solution: "x < \\frac{5}{24}",
      ind: 7,
    },
    {
      text: "Simplify",
      problem: "7x-3 \\leq 9x \\leq 7x +4",
      solution: "-\\frac{3}{2} \\leq x \\leq 2",
      ind: 8,
    },
    {
      text: "Simplify",
      problem: "-3x^2+20 \\geq 17",
      solution: "x \\leq 1",
      ind: 9,
    },
    {
      text: "Simplify",
      problem: "-\\frac{4}{5}x+7 > x-3",
      solution: "\\frac{35}{9} > x",
      ind: 10,
    },
    {
      text: "Simplify",
      problem: "-\\frac{7}{3}x+2 \\geq -3x",
      solution: "-3 \\leq x",
      ind: 11,
    },
    {
      text: "Simplify",
      problem: "-15x^2+7 \\leq -53",
      solution: "x \\geq 2",
      ind: 12,
    },
    {
      text: "Simplify",
      problem: "3x-13 < 12",
      solution: "x < \\frac{25}{3}",
      ind: 13,
    },
    {
      text: "Simplify",
      problem: "4x^2-12 > 24",
      solution: "x > 3",
      ind: 14,
    },
    {
      text: "Simplify",
      problem: "-7x \\geq 14",
      solution: "x \\leq 2",
      ind: 15,
    },
    {
      text: "Simplify",
      problem: "-\\frac{2}{3}x+12 > 14",
      solution: "x < 3",
      ind: 16,
    },
    {
      text: "Simplify",
      problem: "-7x^2+13 > 12",
      solution: "x < \\frac{\\sqrt{7}}{7}",
      ind: 17,
    },
    {
      text: "Simplify",
      problem: "42x+12 > 54",
      solution: "x > 1",
      ind: 18,
    },
    {
      text: "Simplify",
      problem: "7x^2-8 \\leq 55",
      solution: "x \\leq 3",
      ind: 19,
    },
    {
      text: "Simplify",
      problem: "\\frac{3}{2} < 8x-7 < 4",
      solution: "\\frac{17}{16} < x < \\frac{11}{8}",
      ind: 20,
    },
    {
      text: "Simplify",
      problem: "8 > 7x-3 > 22",
      solution: "\\frac{11}{7} > x > \\frac{25}{7}",
      ind: 21,
    },
    {
      text: "Simplify",
      problem: "-2x \\geq 12x-7",
      solution: "x \\leq \\frac{1}{2}",
      ind: 22,
    },
    {
      text: "Simplify",
      problem: "-4x \\leq -5x-3",
      solution: "x \\leq -3",
      ind: 23,
    },
    {
      text: "Simplify",
      problem: "\\frac{4}{3x} < -4",
      solution: "-\\frac{1}{3} > x",
      ind: 24,
    },
    {
      text: "Simplify",
      problem: "\\frac{6}{5}x-3 > \\frac{1}{x}-3",
      solution: "x > \\sqrt{\\frac{5}{6}}",
      ind: 25,
    },
    {
      text: "Simplify",
      problem: "15x-7 < 43",
      solution: "x < \\frac{10}{3}",
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
    <div className={styles.inequalities}>
      <h1 className={styles.header}>
        Practice with Inequalities
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
