import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import styles from "./styles.module.scss";

const dice = require("../../../../../../public/dice.png");

export const Complex: React.FC = () => {
  const [problems, setProblems] = useState([] as any);

  const problem_base = [
    {
      problem: "(2+4i)^2",
      solution: "16i-12",
      text: "Simplify",
      ind: 0,
    },
    {
      problem: "\\frac{6i+3}{4-12i}",
      solution: "\\frac{30i-19}{80}",
      text: "Simplify",
      ind: 1,
    },
    {
      problem: "(\\frac{4i}{3})^3",
      solution: "\\frac{-64i}{27}",
      text: "Simplify",
      ind: 2,
    },
    {
      problem: "(6i-4)-(2i+7)",
      solution: "4i-11",
      text: "Simplify",
      ind: 3,
    },
    {
      problem: "4i(3-7i)",
      solution: "12i+28",
      text: "Simplify",
      ind: 4,
    },
    {
      problem: "6i(2+3i)",
      solution: "12i-18",
      text: "Simplify",
      ind: 5,
    },
    {
      problem: "(4i-6)(2+7i)",
      solution: "-34i-40",
      text: "Simplify",
      ind: 6,
    },
    {
      problem: "(3i-14)-(2i+7)",
      solution: "i-21",
      text: "Simplify",
      ind: 7,
    },
    {
      problem: "(2i+12)(6i-3)",
      solution: "44i-50",
      text: "Simplify",
      ind: 8,
    },
    {
      problem: "(7i-2)+(2i+4)",
      solution: "9i+2",
      text: "Simplify",
      ind: 9,
    },
    {
      problem: "8i(2i-3)-(4i-6)",
      solution: "-28i-10",
      text: "Simplify",
      ind: 10,
    },
    {
      problem: "6i+(3i-4)^2",
      solution: "7-18i",
      text: "Simplify",
      ind: 11,
    },
    {
      problem: "\\frac{4-7i}{3+i}",
      solution: "\\frac{1}{2}-\\frac{3}{5}i",
      text: "Simplify",
      ind: 12,
    },
    {
      problem: "(\\frac{1}{3}+7i)(4-3i)",
      solution: "\\frac{67}{3}+27i",
      text: "Simplify",
      ind: 13,
    },
    {
      problem: "7+3i-6+2i",
      solution: "1+5i",
      text: "Simplify",
      ind: 14,
    },
    {
      problem: "(2+4\\sqrt{-1})(3-6\\sqrt{-1})",
      solution: "30",
      text: "Simplify",
      ind: 15,
    },
    {
      problem: "x^2+3=0",
      solution: "x=\\pm i\\sqrt{3}",
      text: "Solve for roots",
      ind: 16,
    },
    {
      problem: "x^2+4x+23=0",
      solution: "x=-2\\pm i\\sqrt{19}",
      text: "Solve for roots",
      ind: 17,
    },
    {
      problem: "x^2+5=0",
      solution: "x=\\pm i\\sqrt{5}",
      text: "Solve for roots",
      ind: 18,
    },
    {
      problem: "x^2+4=0",
      solution: "x=\\pm 2i",
      text: "Solve for roots",
      ind: 19,
    },
    {
      problem: "x^2-3x+7=0",
      solution: "x=\\frac{3\\pm i\\sqrt{19}}{2}",
      text: "Solve for roots",
      ind: 20,
    },
    {
      problem: "x^2+16=0",
      solution: "x=\\pm 4i",
      text: "Solve for roots",
      ind: 21,
    },
    {
      problem: "4x^2+3x+7=0",
      solution: "\\frac{-3\\pm 4i\\sqrt{6}}{8}",
      text: "Solve for roots",
      ind: 22,
    },
    {
      problem: "0^{3i}",
      solution: "0",
      text: "Simplify",
      ind: 23,
    },
    {
      problem: "\\frac{0}{4i}",
      solution: "0",
      text: "Simplify",
      ind: 24,
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
    <div className={styles.complex}>
      <h1 className={styles.header}>
        Complex Numbers Practice{" "}
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
        Note: Remember your imaginary number rules and the Quadratic Formula!
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
