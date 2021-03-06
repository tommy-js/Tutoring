import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BlockMath, InlineMath } from "react-katex";
import { LongFormProblem } from "../../../../Questions/LongFormProblem/LongFormProblem";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const dice = require("../../../../../../public/dice.png");

export const Percentages: React.FC = () => {
  const [problems, setProblems] = useState([] as any);

  const problem_base = [
    {
      problem: (
        <span>
          Determine <InlineMath>53\%</InlineMath> of 24:
        </span>
      ),
      solution: "12.72",
      index: 0,
    },
    {
      problem: (
        <span>
          Determine <InlineMath>22\%</InlineMath> of 100:
        </span>
      ),
      solution: "22",
      index: 1,
    },
    {
      problem: (
        <span>
          Determine <InlineMath>95\%</InlineMath> of 18:
        </span>
      ),
      solution: "17.1",
      index: 2,
    },
    {
      problem: (
        <span>
          Determine <InlineMath>4\%</InlineMath> of 13:
        </span>
      ),
      solution: "0.52",
      index: 3,
    },
    {
      problem: (
        <span>
          Determine <InlineMath>106\%</InlineMath> of 85:
        </span>
      ),
      solution: "90.1",
      index: 4,
    },
    {
      problem: (
        <span>
          Determine <InlineMath>200\%</InlineMath> of 16:
        </span>
      ),
      solution: "32",
      index: 5,
    },
    {
      problem: <span>What percent is 16 of 54?</span>,
      solution: "~29.63\\%",
      index: 6,
    },
    {
      problem: <span>Determine what percent 104 is of 83:</span>,
      solution: "~125.3\\%",
      index: 7,
    },
    {
      problem: <span>What percent is 29 of 33?</span>,
      solution: "~87.88\\%",
      index: 8,
    },
    {
      problem: <span>Determine what percent 201 is of 19:</span>,
      solution: "~1,057.89\\%",
      index: 9,
    },
    {
      problem: <span>Determine 16% of 65:</span>,
      solution: "10.4",
      index: 10,
    },
    {
      problem: <span>Determine 35% of 82:</span>,
      solution: "26.24",
      index: 11,
    },
    {
      problem: <span>How much of a percent increase is 80 to 105?</span>,
      solution: "31.25\\%",
      index: 12,
    },
    {
      problem: <span>How much of a percent decrease is 208 to 195?</span>,
      solution: "~6.67\\%",
      index: 13,
    },
    {
      problem: <span>How much of a percent decrease is 925 to 83?</span>,
      solution: "~91.03\\%",
      index: 14,
    },
    {
      problem: <span>How much of a percent increase is 203 from 87?</span>,
      solution: "~233.33\\%",
      index: 15,
    },
    {
      problem: <span>Determine 22% of 85:</span>,
      solution: "18.7\\%",
      index: 16,
    },
    {
      problem: <span>Determine 185% of 93:</span>,
      solution: "172.05\\%",
      index: 17,
    },
    {
      problem: <span>Determine 9% of 8:</span>,
      solution: "0.72",
      index: 18,
    },
    {
      problem: (
        <span>
          John has 6 apples. He goes to the store and buy 4 more. What percent
          did his total number of apples grow by?
        </span>
      ),
      solution: "~66.67\\%",
      index: 19,
    },
    {
      problem: (
        <span>
          Erin paints for a living. She has a total of 12 paintings and sells 5.
          How much did her collection of paintings decrease by, in percentages?
        </span>
      ),
      solution: "~41.67\\%",
      index: 20,
    },
    {
      problem: (
        <span>
          Ray has 35 movies in his collection. He decides he doesn't need to
          many and sells 12. What percent is his new collection of his old one?
        </span>
      ),
      solution: "~65.71\\%",
      index: 21,
    },
    {
      problem: <span>Determine 18% of 192:</span>,
      solution: "34.56",
      index: 22,
    },
    {
      problem: <span>How much of a percent decrease is 27 from 35?</span>,
      solution: "~22.86\\%",
      index: 23,
    },
    {
      problem: <span>How much of a percent decrease is 75 from 100?</span>,
      solution: "25\\%",
      index: 24,
    },
    {
      problem: <span>How much of a percent increase is 208 from 93?</span>,
      solution: "~223.66\\%",
      index: 25,
    },
    {
      problem: <span>Determine what 160% of 64 is:</span>,
      solution: "102.4",
      index: 26,
    },
    {
      problem: <span>What percent is 45 of 50?</span>,
      solution: "90\\%",
      index: 27,
    },
    {
      problem: <span>What percent is 109 of 111?</span>,
      solution: "~98.2\\%",
      index: 28,
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
    <div className={styles.percentages}>
      <h1 className={styles.header}>
        Practice With Percentages{" "}
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
        <div key={el.index}>
          <LongFormProblem
            problem={el.problem}
            index={el.index}
            solution={el.solution}
          />
        </div>
      ))}
      <div className={styles.bottom}></div>
    </div>
  );
};
