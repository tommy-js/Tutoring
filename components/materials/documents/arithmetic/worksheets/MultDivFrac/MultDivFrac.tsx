import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import styles from "./styles.module.scss";

const dice = require("../../../../../../public/dice.png");

export const MultDivFrac: React.FC = () => {
  const [problems, setProblems] = useState([] as any);

  const problem_base = [
    {
      problem: "\\frac{5}{3}\\cdot\\frac{2}{4}",
      solution: "\\frac{5}{6}",
      text: "Solve",
      ind: 0,
    },
    {
      problem: "\\frac{2}{3}\\cdot\\frac{4}{7}",
      solution: "\\frac{8}{21}",
      text: "Solve",
      ind: 1,
    },
    {
      problem: "\\frac{18}{6}\\cdot\\frac{2}{3}",
      solution: "2",
      text: "Solve",
      ind: 2,
    },
    {
      problem: "\\frac{1}{5}\\div\\frac{2}{9}",
      solution: "\\frac{9}{10}",
      text: "Solve",
      ind: 3,
    },
    {
      problem: "5\\cdot\\frac{1}{3}",
      solution: "\\frac{5}{3}",
      text: "Solve",
      ind: 4,
    },
    {
      problem: "\\frac{1}{4}\\cdot\\frac{3}{2}",
      solution: "\\frac{3}{8}",
      text: "Solve",
      ind: 5,
    },
    {
      problem: "\\frac{1}{7}\\div\\frac{2}{5}",
      solution: "\\frac{5}{14}",
      text: "Solve",
      ind: 6,
    },
    {
      problem: "\\frac{5}{4}\\div\\frac{6}{7}",
      solution: "\\frac{35}{24}",
      text: "Solve",
      ind: 7,
    },
    {
      problem: "\\frac{1}{12}\\div\\frac{1}{8}",
      solution: "\\frac{2}{3}",
      text: "Solve",
      ind: 8,
    },
    {
      problem: "\\frac{3}{7}\\div\\frac{2}{5}",
      solution: "\\frac{15}{14}",
      text: "Solve",
      ind: 9,
    },
    {
      problem: "\\frac{2}{3}\\div\\frac{1}{3}",
      solution: "\\frac{9}{2}",
      text: "Solve",
      ind: 10,
    },
    {
      problem: "\\frac{7}{11}\\cdot\\frac{2}{3}",
      solution: "\\frac{14}{33}",
      text: "Solve",
      ind: 11,
    },
    {
      problem: "\\frac{6}{5}\\div\\frac{3}{15}",
      solution: "6",
      text: "Solve",
      ind: 12,
    },
    {
      problem: "\\frac{7}{9}\\div\\frac{21}{6}",
      solution: "\\frac{2}{9}",
      text: "Solve",
      ind: 13,
    },
    {
      problem: "\\frac{1}{3}\\cdot\\frac{4}{5}",
      solution: "\\frac{4}{15}",
      text: "Solve",
      ind: 14,
    },
    {
      problem: "\\frac{12}{5}\\div\\frac{3}{10}",
      solution: "8",
      text: "Solve",
      ind: 15,
    },
    {
      problem: "\\frac{1}{4}\\cdot\\frac{2}{3}\\cdot\\frac{5}{4}",
      solution: "\\frac{5}{24}",
      text: "Solve",
      ind: 16,
    },
    {
      problem: "\\frac{3}{8}\\div\\frac{1}{4}",
      solution: "\\frac{3}{2}",
      text: "Solve",
      ind: 17,
    },
    {
      problem: "\\frac{9}{4}\\cdot\\frac{1}{6}",
      solution: "\\frac{3}{8}",
      text: "Solve",
      ind: 18,
    },
    {
      problem: "\\frac{1}{6}\\div\\frac{9}{3}",
      solution: "\\frac{1}{18}",
      text: "Solve",
      ind: 19,
    },
    {
      problem: "\\frac{1}{7}\\div\\frac{4}{14}",
      solution: "\\frac{1}{2}",
      text: "Solve",
      ind: 20,
    },
    {
      problem: "\\frac{5}{6}\\div\\frac{15}{4}",
      solution: "\\frac{2}{9}",
      text: "Solve",
      ind: 21,
    },
    {
      problem: "\\frac{1}{3}\\cdot\\frac{6}{4}",
      solution: "\\frac{1}{2}",
      text: "Solve",
      ind: 22,
    },
    {
      problem: "\\frac{11}{9}\\div\\frac{3}{5}",
      solution: "\\frac{55}{27}",
      text: "Solve",
      ind: 23,
    },
    {
      problem: "5\\div\\frac{2}{3}",
      solution: "\\frac{15}{2}",
      text: "Solve",
      ind: 24,
    },
    {
      problem: "\\frac{1}{3}\\div 4",
      solution: "\\frac{1}{12}",
      text: "Solve",
      ind: 25,
    },
    {
      problem: "\\frac{2}{7}\\div 3",
      solution: "\\frac{2}{21}",
      text: "Solve",
      ind: 26,
    },
    {
      problem: "\\frac{1}{6}\\div\\frac{8}{9}",
      solution: "\\frac{3}{16}",
      text: "Solve",
      ind: 27,
    },
    {
      problem: "\\frac{2}{13}\\cdot\\frac{26}{4}",
      solution: "1",
      text: "Solve",
      ind: 28,
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
    <div className={styles.mult_div_frac}>
      <h1 className={styles.header}>
        Practice Multiplying and Dividing Fractions{" "}
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
      <h2 className={styles.subheader}>
        Note: Remember your rules for converting division into multiplication!
        Also keep in mind to reduce your final answer to lowest terms.
      </h2>
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
