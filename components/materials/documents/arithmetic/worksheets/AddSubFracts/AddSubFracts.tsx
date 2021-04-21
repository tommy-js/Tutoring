import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import styles from "./styles.module.scss";

const dice = require("../../../../../../public/dice.png");

export const AddSubFracts: React.FC = () => {
  const [problems, setProblems] = useState([] as any);

  const problem_base = [
    {
      problem: "\\frac{5}{10}+\\frac{2}{10}",
      solution: "\\frac{7}{10}",
      text: "Solve",
      ind: 0,
    },
    {
      problem: "\\frac{2}{5}+\\frac{3}{5}",
      solution: "1",
      text: "Solve",
      ind: 1,
    },
    {
      problem: "\\frac{5}{6}-\\frac{3}{6}",
      solution: "\\frac{1}{3}",
      text: "Solve",
      ind: 2,
    },
    {
      problem: "\\frac{2}{3}+\\frac{5}{6}",
      solution: "\\frac{3}{2}",
      text: "Solve",
      ind: 3,
    },
    {
      problem: "\\frac{4}{3}-\\frac{8}{6}",
      solution: "0",
      text: "Solve",
      ind: 4,
    },
    {
      problem: "\\frac{5}{3}+\\frac{10}{3}",
      solution: "5",
      text: "Solve",
      ind: 5,
    },
    {
      problem: "\\frac{8}{2}+\\frac{2}{2}",
      solution: "5",
      text: "Solve",
      ind: 6,
    },
    {
      problem: "\\frac{3}{5}+\\frac{8}{5}-\\frac{11}{5}",
      solution: "0",
      text: "Solve",
      ind: 7,
    },
    {
      problem: "\\frac{5}{7}+\\frac{6}{5}",
      solution: "\\frac{67}{35}",
      text: "Solve",
      ind: 8,
    },
    {
      problem: "\\frac{4}{9}+\\frac{2}{3}",
      solution: "\\frac{10}{9}",
      text: "Solve",
      ind: 9,
    },
    {
      problem: "\\frac{3}{5}-\\frac{2}{11}",
      solution: "\\frac{23}{55}",
      text: "Solve",
      ind: 10,
    },
    {
      problem: "5+\\frac{2}{3}",
      solution: "\\frac{17}{3}",
      text: "Solve",
      ind: 11,
    },
    {
      problem: "1-\\frac{7}{9}",
      solution: "\\frac{2}{9}",
      text: "Solve",
      ind: 12,
    },
    {
      problem: "\\frac{12}{5}-\\frac{2}{3}",
      solution: "\\frac{26}{15}",
      text: "Solve",
      ind: 13,
    },
    {
      problem: "\\frac{8}{11}+\\frac{2}{11}",
      solution: "\\frac{10}{11}",
      text: "Solve",
      ind: 14,
    },
    {
      problem: "6-2+\\frac{1}{3}",
      solution: "\\frac{13}{3}",
      text: "Solve",
      ind: 15,
    },
    {
      problem: "\\frac{3}{4}+\\frac{5}{6}",
      solution: "\\frac{19}{12}",
      text: "Solve",
      ind: 16,
    },
    {
      problem: "\\frac{15}{13}+\\frac{1}{2}",
      solution: "\\frac{43}{26}",
      text: "Solve",
      ind: 17,
    },
    {
      problem: "\\frac{8}{5}-\\frac{3}{5}",
      solution: "1",
      text: "Solve",
      ind: 18,
    },
    {
      problem: "\\frac{3}{2}-\\frac{1}{3}",
      solution: "\\frac{7}{6}",
      text: "Solve",
      ind: 19,
    },
    {
      problem: "\\frac{5}{4}-\\frac{8}{7}",
      solution: "\\frac{3}{28}",
      text: "Solve",
      ind: 20,
    },
    {
      problem: "\\frac{6}{9}-\\frac{5}{3}",
      solution: "-\\frac{4}{3}",
      text: "Solve",
      ind: 21,
    },
    {
      problem: "\\frac{6}{13}-\\frac{8}{3}",
      solution: "-\\frac{43}{18}",
      text: "Solve",
      ind: 22,
    },
    {
      problem: "\\frac{17}{2}-\\frac{15}{3}",
      solution: "\\frac{7}{2}",
      text: "Solve",
      ind: 23,
    },
    {
      problem: "\\frac{7}{8}-\\frac{9}{4}",
      solution: "-\\frac{11}{8}",
      text: "Solve",
      ind: 24,
    },
    {
      problem: "\\frac{1}{2}-\\frac{4}{3}",
      solution: "-\\frac{5}{6}",
      text: "Solve",
      ind: 25,
    },
    {
      problem: "\\frac{10}{3}+\\frac{1}{2}",
      solution: "\\frac{23}{6}",
      text: "Solve",
      ind: 26,
    },
    {
      problem: "\\frac{5}{3}+\\frac{1}{3}",
      solution: "2",
      text: "Solve",
      ind: 27,
    },
    {
      problem: "\\frac{6}{5}-\\frac{1}{4}",
      solution: "\\frac{19}{20}",
      text: "Solve",
      ind: 28,
    },
    {
      problem: "\\frac{8}{9}+\\frac{3}{9}",
      solution: "\\frac{4}{3}",
      text: "Solve",
      ind: 29,
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
    <div className={styles.add_sub_fract}>
      <h1 className={styles.header}>
        Practice Adding and Subtracting Fractions{" "}
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
      <h2 className={styles.subheader}>Note: Remember how to distribute!</h2>
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
