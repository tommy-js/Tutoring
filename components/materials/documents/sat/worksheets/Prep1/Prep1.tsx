import React from "react";
import Link from "next/link";
import { InlineMath } from "react-katex";
import { LongFormProblem } from "../../../../Questions/LongFormProblem/LongFormProblem";
import styles from "./styles.module.scss";

export const Prep1: React.FC = () => {
  const problem1 = "k = \\frac{x+3}{4}";
  const problem2 = "i=\\sqrt{-1}";
  const problem5 = "(x^4y^2-4y^3+3xy)-(x^4y^2+7y^3+8-6xy)";
  const problem6 = "h=13y + 18.9";
  const problem7_1 = "\\frac{a}{b}=8";
  const problem7_2 = "\\frac{3b}{5a}";
  const problem8_1 = "8x+11y=4";
  const problem8_2 = "2y-8x=-6";
  const problem9 = "f(x) = ax^2+13";
  const problem10 = "\\frac{4}{7}";
  const problem11 = "y=bx+5";
  const problem11_2 = "c \\neq 0";
  const problem11_3 = "d \\neq 0";
  const problem12 = "ex-4y=9";
  const problem12_2 = "5x-7y=12";
  const problem13 = "y=(x-3)^2";
  const problem13_2 = "y=36";
  const problem15 = "6x^2+3x-7=0";

  const problem_base = [
    {
      problem: (
        <span>
          If <InlineMath>{problem1}</InlineMath> and{" "}
          <InlineMath>k=9</InlineMath>, what is the value of x?
        </span>
      ),
      solution: "x=33",
      index: 0,
    },
    {
      problem: (
        <span>
          For <InlineMath>{problem2}</InlineMath>, what is the sum{" "}
          <InlineMath>(1+17i) + (4-6i)</InlineMath>
        </span>
      ),
      solution: "5+11i",
      index: 1,
    },
    {
      problem: (
        <span>
          On Friday evening, Joseph sent j text messages each hour for 6 hours,
          and Noah sent n text messages each hour for 3 hours. What equation
          represents the total number of messages, t, sent by Joseph and Noah on
          Friday evening?
        </span>
      ),
      solution: "t=6j+3n",
      index: 2,
    },
    {
      problem: (
        <span>
          James is a repair tech for a computer company. Each week, he is sent a
          number of computers in need of repairs. The number of computers that
          he still has to fix at the end of each day is estimated by the
          equation C = 47 − 19d, where C is the number of computers remaining
          and d is the number of days he has worked that week. What is the
          significance of the value 47 in the equation? a) 47 represents the
          number of computers James starts with, b) 47 represents the number of
          days it takes James to repair all the computers, c) 47 represents the
          number of computers James must repair each day.
        </span>
      ),
      solution: "a)",
      index: 3,
    },
    {
      problem: (
        <span>
          Simplify the equation <InlineMath>{problem5}</InlineMath>.
        </span>
      ),
      solution: "11y^3+9xy-8",
      index: 4,
    },
    {
      problem: (
        <span>
          A doctor uses the equation <InlineMath>{problem6}</InlineMath> to
          estimate the height h, in inches, in terms of a patient's age y, in
          years. Based on the model, what is the estimated increase, in inches,
          of the patient each year?
        </span>
      ),
      solution: "13",
      index: 5,
    },
    {
      problem: (
        <span>
          If <InlineMath>{problem7_1}</InlineMath>, what is the value of{" "}
          <InlineMath>{problem7_2}</InlineMath>?
        </span>
      ),
      solution: "\\frac{3}{40}",
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
      solution: "(~0.7115, ~-0.1538)",
      index: 7,
    },
    {
      problem: (
        <span>
          For the function <InlineMath>{problem9}</InlineMath>, a is a constant
          and <InlineMath>f(2)=4</InlineMath>. What is the value of{" "}
          <InlineMath>f(-3)</InlineMath>?
        </span>
      ),
      solution: "-\\frac{29}{4}",
      index: 8,
    },
    {
      problem: (
        <span>
          A line in the xy-plane passes through the origin and has a slope of{" "}
          <InlineMath>{problem10}</InlineMath>. Which of the following points
          lies on the line? a) (4, 0), b) (14, 8), c) (17, 3), d) (-6, 5)
        </span>
      ),
      solution: "b)",
      index: 9,
    },
    {
      problem: (
        <span>
          The line <InlineMath>{problem11}</InlineMath> is graphed on the
          xy-plane, where b is some constant. If the line contains the point
          (c,d), where <InlineMath>{problem11_2}</InlineMath> and{" "}
          <InlineMath>{problem11_3}</InlineMath>, what is the slope of the line
          in terms of c and d ?
        </span>
      ),
      solution: "\\frac{d}{c}",
      index: 10,
    },
    {
      problem: (
        <span>
          In the system of equations, <InlineMath>{problem12}</InlineMath> and{" "}
          <InlineMath>{problem12_2}</InlineMath>, e is a constant and x and y
          are variables. For what value of e will the system of equations have
          no solution?
        </span>
      ),
      solution: "e=\\frac{20}{7}",
      index: 11,
    },
    {
      problem: (
        <span>
          In the xy-plane, the line with equation{" "}
          <InlineMath>{problem13_2}</InlineMath> intersects the parabola with
          equation <InlineMath>{problem13}</InlineMath> at two points, A and B.
          What is the length of AB?
        </span>
      ),
      solution: "12",
      index: 12,
    },
    {
      problem: (
        <span>
          What are the solutions to <InlineMath>{problem15}</InlineMath>?
        </span>
      ),
      solution:
        "x=\\frac{\\sqrt{177}}{12}-\\frac{1}{4},-\\frac{\\sqrt{177}}{12}-\\frac{1}{4}",
      index: 14,
    },
    {
      problem: (
        <span>
          At Arlington High School, about 8 percent of juniors and 6 percent of
          seniors were inducted into the National Honor Society this past year.
          If there were 742 juniors and 805 seniors enrolled there, which of the
          following is cloest to the total number of juniors and seniors at
          Arlington High School who were inducted into the National Honor
          Society last year? a) 182, b) 205, c) 83, d) 98
        </span>
      ),
      solution: "d) 98",
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
