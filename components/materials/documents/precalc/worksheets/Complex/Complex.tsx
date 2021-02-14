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
      ind: 0,
    },
    {
      problem: "\\frac{6i+3}{4-12i}",
      solution: "\\frac{30i-19}{80}",
      ind: 1,
    },
    {
      problem: "(\\frac{4i}{3})^3",
      solution: "\\frac{-64i}{27}",
      ind: 2,
    },
    {
      problem: "(6i-4)-(2i+7)",
      solution: "4i-11",
      ind: 3,
    },
    {
      problem: "4i(3-7i)",
      solution: "12i+28",
      ind: 4,
    },
    {
      problem: "6i(2+3i)",
      solution: "12i-18",
      ind: 5,
    },
    {
      problem: "(4i-6)(2+7i)",
      solution: "-34i-40",
      ind: 6,
    },
    {
      problem: "(3i-14)-(2i+7)",
      solution: "i-21",
      ind: 7,
    },
    {
      problem: "(2i+12)(6i-3)",
      solution: "44i-50",
      ind: 8,
    },
    {
      problem: "(7i-2)+(2i+4)",
      solution: "9i+2",
      ind: 9,
    },
    {
      problem: "8i(2i-3)-(4i-6)",
      solution: "-28i-10",
      ind: 10,
    },
    {
      problem: "6i+(3i-4)^2",
      solution: "7-18i",
      ind: 11,
    },
    {
      problem: "\\frac{4-7i}{3+i}",
      solution: "\\frac{1}{2}-\\frac{3}{5}i",
      ind: 12,
    },
    {
      problem: "(\\frac{1}{3}+7i)(4-3i)",
      solution: "\\frac{67}{3}+27i",
      ind: 13,
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
          <img className={styles.image} src={dice} />
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
            text="Simplify"
            function={el.problem}
            key={el.ind}
          />
        </div>
      ))}
      <div className={styles.bottom}></div>
    </div>
  );
};
