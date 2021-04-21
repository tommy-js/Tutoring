import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import styles from "./styles.module.scss";

const dice = require("../../../../../../public/dice.png");

export const AddSub: React.FC = () => {
  const [problems, setProblems] = useState([] as any);

  const problem_base = [
    {
      problem: "1+3",
      solution: "4",
      text: "Solve",
      ind: 0,
    },
    {
      problem: "9+2",
      solution: "11",
      text: "Solve",
      ind: 1,
    },
    {
      problem: "3-2",
      solution: "1",
      text: "Solve",
      ind: 2,
    },
    {
      problem: "2+8",
      solution: "10",
      text: "Solve",
      ind: 3,
    },
    {
      problem: "29+2",
      solution: "31",
      text: "Solve",
      ind: 4,
    },
    {
      problem: "6+3-5",
      solution: "4",
      text: "Solve",
      ind: 5,
    },
    {
      problem: "2-1+3",
      solution: "4",
      text: "Solve",
      ind: 6,
    },
    {
      problem: "-4+7",
      solution: "3",
      text: "Solve",
      ind: 7,
    },
    {
      problem: "19-2+10",
      solution: "27",
      text: "Solve",
      ind: 8,
    },
    {
      problem: "-1+1",
      solution: "0",
      text: "Solve",
      ind: 9,
    },
    {
      problem: "8-10+6",
      solution: "4",
      text: "Solve",
      ind: 10,
    },
    {
      problem: "19+1",
      solution: "20",
      text: "Solve",
      ind: 11,
    },
    {
      problem: "3+7+2",
      solution: "12",
      text: "Solve",
      ind: 12,
    },
    {
      problem: "-7+3+2",
      solution: "-2",
      text: "Solve",
      ind: 13,
    },
    {
      problem: "-10+10+2",
      solution: "2",
      text: "Solve",
      ind: 14,
    },
    {
      problem: "6+3",
      solution: "9",
      text: "Solve",
      ind: 15,
    },
    {
      problem: "8-2",
      solution: "6",
      text: "Solve",
      ind: 16,
    },
    {
      problem: "2-(3+4)",
      solution: "-5",
      text: "Solve",
      ind: 17,
    },
    {
      problem: "5+2-(6-3)",
      solution: "4",
      text: "Solve",
      ind: 18,
    },
    {
      problem: "2+3",
      solution: "5",
      text: "Solve",
      ind: 19,
    },
    {
      problem: "2-(2+3)",
      solution: "-3",
      text: "Solve",
      ind: 20,
    },
    {
      problem: "-(5+3)-(2-1)",
      solution: "-9",
      text: "Solve",
      ind: 21,
    },
    {
      problem: "2+12",
      solution: "14",
      text: "Solve",
      ind: 22,
    },
    {
      problem: "100+101",
      solution: "201",
      text: "Solve",
      ind: 23,
    },
    {
      problem: "50+25",
      solution: "75",
      text: "Solve",
      ind: 24,
    },
    {
      problem: "8-1",
      solution: "7",
      text: "Solve",
      ind: 25,
    },
    {
      problem: "4-6",
      solution: "-2",
      text: "Solve",
      ind: 26,
    },
    {
      problem: "20-1+5",
      solution: "24",
      text: "Solve",
      ind: 27,
    },
    {
      problem: "1+2+3+4",
      solution: "10",
      text: "Solve",
      ind: 28,
    },
    {
      problem: "8-5-3",
      solution: "0",
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
    <div className={styles.add_sub}>
      <h1 className={styles.header}>
        Addition and Subtraction Practice{" "}
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
