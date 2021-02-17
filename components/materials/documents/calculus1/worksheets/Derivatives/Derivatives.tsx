import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import { SubmitButton } from "../../../../SubmitButton/SubmitButton";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const dice = require("../../../../../../public/dice.png");

export const Derivatives: React.FC = () => {
  const [problems, setProblems] = useState([] as any);
  const [contRender, setContRender] = useState(false);

  const problem_base = [
    {
      text: "Take the derivative of",
      problem: "x^2+6x+8",
      solution: "2x+6",
      ind: 0,
    },
    {
      text: "Take the derivative of",
      problem: "\\cos(x)",
      solution: "-\\sin(x)",
      ind: 1,
    },
    {
      text: "Take the derivative of",
      problem: "\\sin(x)",
      solution: "\\cos(x)",
      ind: 2,
    },
    {
      text: "Take the derivative of",
      problem: "x^3+\\frac{14}{x}-\\frac{3}{x^2}",
      solution: "3x^2-\\frac{14}{x^2}-\\frac{6}{x^3}",
      ind: 3,
    },
    {
      text: "Take the derivative of",
      problem: "\\cos(x^3)",
      solution: "-3x^2\\sin(x^3)",
      ind: 4,
    },
    {
      text: "Take the derivative of",
      problem: "\\frac{-\\sin(2x)}{x^5}",
      solution: "\\frac{2\\cos(2x)x^5-5x^4\\sin(2x)}{x^{10}}",
      ind: 5,
    },
    {
      text: "Take the derivative of",
      problem: "e^{4x}",
      solution: "4e^{4x}",
      ind: 6,
    },
    {
      text: "Take the derivative of",
      problem: "\\frac{e^{x}}{\\sin(3x)}",
      solution: "\\frac{e^x\\sin(3x)-3\\cos(3x)e^x}{(\\sin(3x))^2}",
      ind: 7,
    },
    {
      text: "Take the derivative of",
      problem: "\\frac{\\tan(2x^3)}{\\cos(2x^{12})}",
      solution:
        "\\frac{6x\\cos(2x^{12})+24x\\sin(2x^{12})\\cos(2x^3)}{\\cos(2x^3)}",
      ind: 8,
    },
    {
      text: "Take the derivative of",
      problem: "\\frac{4x^3}{2x-6}",
      solution: "\\frac{16x^3-72x^2}{4x^2-24x+36}",
      ind: 9,
    },
    {
      text: "Take the derivative of",
      problem: "2xe^{4x}",
      solution: "2e^{4x}+8xe^{4x}",
      ind: 10,
    },
    {
      text: "Take the derivative of",
      problem: "4e^{3}\\sin(x)\\cos(2x)",
      solution: "4e^3\\cos(x)\\cos(2x)+8e^3\\cos(x)\\cos(2x)",
      ind: 11,
    },
    {
      text: "Take the derivative of",
      problem: "\\frac{2x}{\\ln(x)}",
      solution: "\\frac{2\\ln(x)-2}{\\ln(x)^2}",
      ind: 12,
    },
    {
      text: "Take the derivative of",
      problem: "16x^3+3x",
      solution: "48x^2+3",
      ind: 13,
    },
    {
      text: "Take the derivative of",
      problem: "9x^{12}-3x^3+2x",
      solution: "108x^{11}-9x^2+2",
      ind: 14,
    },
    {
      text: "Take the derivative of",
      problem: "\\frac{x^2+8x}{2x^3-7}",
      solution: "\\frac{4x^4+10x^3-48x^2-14x-56}{4x^6-28x^3+49}",
      ind: 15,
    },
    {
      text: "Take the derivative of",
      problem: "2e^{7x}",
      solution: "14e^{7x}",
      ind: 16,
    },
    {
      text: "Take the derivative of",
      problem: "3x\\ln(x)",
      solution: "3\\ln(x)+3",
      ind: 17,
    },
    {
      text: "Take the derivative of",
      problem: "\\frac{3e^{2x^2}}{\\ln(x)}",
      solution: "\\frac{12xe^{2x^2}\\ln(x)-\\frac{1}{x}e^{2x^2}}{(\\ln(x))^2}",
      ind: 18,
    },
    {
      text: "Take the derivative of",
      problem: "3x^3+6x^2-4",
      solution: "9x^2+12x",
      ind: 19,
    },
    {
      text: "Take the derivative of",
      problem: "e^{4x}",
      solution: "4e^{4x}",
      ind: 20,
    },
    {
      text: "Take the derivative of",
      problem: "\\cos(e^{2x})",
      solution: "-2e^{2x}\\sin(e^{2x})",
      ind: 21,
    },
    {
      text: "Take the derivative of",
      problem: "\\frac{\\ln(x)}{x^2}",
      solution: "\\frac{1-2\\ln(x)}{x^3}",
      ind: 22,
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

  useEffect(() => {
    if (problems.length > 0) setContRender(true);
  }, [problems]);

  function renderProblems() {
    if (contRender === true) {
      return (
        <div>
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
        </div>
      );
    } else return null;
  }

  const ex = "e^x";
  const cosx = "\\cos(x)";
  const sinx = "\\sin(x)";

  return (
    <div className={styles.derivatives}>
      <h1 className={styles.header}>Practice Taking Derivatives</h1>
      <h2 className={styles.subheader}>
        Here we'll go over some practice problems for derivatives. Remember your
        Power Rule, Quotient Rule, Product Rule, and Chain Rule. Also keep in
        mind the various derivative rules such as for{" "}
        <InlineMath>{ex}</InlineMath>, <InlineMath>{cosx}</InlineMath>,{" "}
        <InlineMath>{sinx}</InlineMath>. These are in order of generally
        ascending difficulty.
      </h2>
      <Link href="/formatting">
        <a className={styles.formatting_link}>Need help formatting?</a>
      </Link>
      {renderProblems()}
    </div>
  );
};
