import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BlockMath, InlineMath } from "react-katex";
import { LongFormProblem } from "../../../../Questions/LongFormProblem/LongFormProblem";
import styles from "./styles.module.scss";

const dice = require("../../../../../../public/dice.png");

export const Prep1: React.FC = () => {
  const problem1 = "\\frac{x+3}{4}";
  const problem2 = "i=\\sqrt{-1}";
  const problem5 = "(x^4y^2-4y^3+3xy)-(x^4y^2+7y^3+8-6xy)";
  const problem6 = "h = 3a + 28.6";
  const problem7_1 = "\\frac{a}{b}=8";
  const problem7_2 = "\\frac{3b}{5a}";
  const problem8_1 = "5x+8y=7";
  const problem8_2 = "3y-6x=-12";
  const problem9 = "g(x) = ax^2+45";
  const problem10 = "\\frac{3}{5}";

  const problem_base = [
    {
      problem: (
        <span>
          If <InlineMath>{problem1}</InlineMath> and{" "}
          <InlineMath>k=4</InlineMath>, what is the value of k?
        </span>
      ),
      solution: "12.72",
      index: 0,
    },
    {
      problem: (
        <span>
          For <InlineMath>{problem2}</InlineMath>, what is the sum{" "}
          <InlineMath>(3+12i) + (2-6i)</InlineMath>
        </span>
      ),
      solution: "22",
      index: 1,
    },
    {
      problem: (
        <span>
          On Friday evening, Joseph sent t text messages each hour for 6 hours,
          and Noah sent x text messages each hour for 3 hours. What equation
          represents the total number of messages sent by Joseph and Noah on
          Friday evening?
        </span>
      ),
      solution: "17.1",
      index: 2,
    },
    {
      problem: (
        <span>
          Kathy is a repair technician for a phone company. Each week, she
          receives a batch of phones that need repairs. The number of phones
          that she has left to fix at the end of each day can be estimated with
          the equation P = 108 − 23d, where P is the number of phones left and d
          is the number of days she has worked that week. What is the meaning of
          the value 108 in this equation?
        </span>
      ),
      solution: "0.52",
      index: 3,
    },
    {
      problem: (
        <span>
          Simplify the equation <InlineMath>{problem5}</InlineMath>.
        </span>
      ),
      solution: "90.1",
      index: 4,
    },
    {
      problem: (
        <span>
          A pediatrician uses the model <InlineMath>{problem6}</InlineMath> to
          estimate the height h of a boy, in inches, in terms of the boy’s age
          a, in years, between the ages of 2 and 5. Based on the model, what is
          the estimated increase, ininches, of a boy’s height each year?
        </span>
      ),
      solution: "32",
      index: 5,
    },
    {
      problem: (
        <span>
          If <InlineMath>{problem7_1}</InlineMath>, what is the value of{" "}
          <InlineMath>{problem7_2}</InlineMath>?
        </span>
      ),
      solution: "~29.63\\%",
      index: 6,
    },
    {
      problem: (
        <span>
          What is the solution, (x,y), to the system of equations,{" "}
          <InlineMath>{problem8_1}</InlineMath> and{" "}
          <InlineMath>{problem8_2}</InlineMath>?
        </span>
      ),
      solution: "~125.3\\%",
      index: 7,
    },
    {
      problem: (
        <span>
          For the function <InlineMath>{problem9}</InlineMath>, a is a constant
          and <InlineMath>g(3)=12</InlineMath>. What is the value of{" "}
          <InlineMath>g(-6)</InlineMath>?
        </span>
      ),
      solution: "~87.88\\%",
      index: 8,
    },
    {
      problem: (
        <span>
          A line in the xy-plane passes through the origin and has a slope of{" "}
          <InlineMath>{problem10}</InlineMath>. Which of the following points
          lies on the line?
        </span>
      ),
      solution: "~1,057.89\\%",
      index: 9,
    },
    {
      problem: <span></span>,
      solution: "10.4",
      index: 10,
    },
    {
      problem: <span></span>,
      solution: "26.24",
      index: 11,
    },
    {
      problem: <span></span>,
      solution: "31.25\\%",
      index: 12,
    },
    {
      problem: <span>H</span>,
      solution: "~6.67\\%",
      index: 13,
    },
    {
      problem: <span></span>,
      solution: "~91.03\\%",
      index: 14,
    },
    {
      problem: <span></span>,
      solution: "~233.33\\%",
      index: 15,
    },
  ];

  return (
    <div className={styles.sat}>
      <h1 className={styles.header}>SAT Practice Problem Set 1</h1>
      <Link href="/formatting">
        <a className={styles.formatting_link}>Need help formatting?</a>
      </Link>
      <h2 className={styles.subheader}>
        This is a general set of SAT practice problems.
      </h2>
      {problem_base.map((el: any) => (
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
