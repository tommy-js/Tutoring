import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import styles from "./styles.module.scss";

const dice = require("../../../../../../public/dice.png");

export const Logarithms: React.FC = () => {
  const [problems, setProblems] = useState([] as any);

  const problem_base = [
    {
      problem: "\\log_5(x+5)=2",
      solution: "x=20",
      text: "Solve",
      ind: 0,
    },
    {
      problem: "\\log_2(x-7)=3",
      solution: "x=15",
      text: "Solve",
      ind: 1,
    },
    {
      problem: "\\log(x-3)+\\log(x)=2",
      solution: "x=\\frac{3\\pm \\sqrt{409}}{2}",
      text: "Solve",
      ind: 2,
    },
    {
      problem: "\\log_4(x-3)-\\log_4(2)=3",
      solution: "x=131",
      text: "Solve",
      ind: 3,
    },
    {
      problem: "\\ln(4x)=7",
      solution: "x=\\frac{e^7}{4}",
      text: "Solve",
      ind: 4,
    },
    {
      problem: "\\log(\\frac{x}{3})=1",
      solution: "x=30",
      text: "Solve",
      ind: 5,
    },
    {
      problem: "\\ln(x)=1",
      solution: "x=e",
      text: "Solve",
      ind: 6,
    },
    {
      problem: "\\log_2(x-1)+\\log_2(x+3)=3",
      solution: "x=\\frac{-2\\pm \\sqrt{48}}{2}",
      text: "Solve",
      ind: 7,
    },
    {
      problem: "\\ln(x+2)-\\ln(x)=2",
      solution: "x=-\\frac{2}{1-e^2}",
      text: "Solve",
      ind: 8,
    },
    {
      problem: "\\log(x^2)=2",
      solution: "x=\\pm 10",
      text: "Solve",
      ind: 9,
    },
    {
      problem: "\\ln(2x)-\\ln(6)=3",
      solution: "x=3e^3",
      text: "Solve",
      ind: 10,
    },
    {
      problem: "\\log(x-6)=3",
      solution: "x=1006",
      text: "Solve",
      ind: 11,
    },
    {
      problem: "2\\ln(3x-4)=5",
      solution: "x=\\frac{\\sqrt{e^5}+4}{3}",
      text: "Solve",
      ind: 12,
    },
    {
      problem: "3\\log(4x-1)=2",
      solution: "x=\\frac{\\sqrt[3]{100}+1}{4}",
      text: "Solve",
      ind: 13,
    },
    {
      problem: "\\ln(x+3)=8",
      solution: "x=e^8-3",
      text: "Solve",
      ind: 14,
    },
    {
      problem: "\\log_3(x-7)+\\log_3(2)=4",
      solution: "x=39",
      text: "Solve",
      ind: 15,
    },
    {
      problem: "\\log_5(8x-1)-\\log_5(3)=1",
      solution: "x=2",
      text: "Solve",
      ind: 16,
    },
    {
      problem: "\\ln(x)-\\ln(2)+\\ln(2x)=5",
      solution: "x=\\sqrt{e^5}",
      text: "Solve",
      ind: 17,
    },
    {
      problem: "2\\ln(2x)+3\\ln(x)=2",
      solution: "x=\\sqrt[5]{\\frac{e^5}{4}}",
      text: "Solve",
      ind: 18,
    },
    {
      problem: "3\\log_2(x)-2\\log_2(3)=8",
      solution: "x=\\pm\\frac{8}{3}",
      text: "Solve",
      ind: 19,
    },
    {
      problem: "3\\log(2x)=2",
      solution: "x=\\sqrt[3]{\\frac{25}{2}}",
      text: "Solve",
      ind: 20,
    },
    {
      problem: "2\\ln(7x-9)=6",
      solution: "x=\\frac{e^3+9}{7}",
      text: "Solve",
      ind: 21,
    },
    {
      problem: "5\\log_2(x)-\\log_2(x^2)=2",
      solution: "x=\\pm \\sqrt[3]{4}",
      text: "Solve",
      ind: 22,
    },
    {
      problem: "2\\ln(3x^2)=7",
      solution: "x=\\pm \\frac{\\sqrt[4]{e^7}}{\\sqrt{3}}",
      text: "Solve",
      ind: 23,
    },
    {
      problem: "2\\log_4(x-3)=6",
      solution: "x=67",
      text: "Solve",
      ind: 24,
    },
    {
      problem: "\\log_3(2x-2)+\\log_3(4x+3)=10",
      solution: "x=\\frac{2\\pm 1374.69}{16}",
      text: "Solve",
      ind: 25,
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
        Logarithm Practice{" "}
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
      <h2 className={styles.subheader}>Note: Remember your log rules!</h2>
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
