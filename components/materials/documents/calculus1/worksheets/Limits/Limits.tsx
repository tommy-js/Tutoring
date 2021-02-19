import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const dice = require("../../../../../../public/dice.png");

export const Limits: React.FC = () => {
  const [problems, setProblems] = useState([] as any);

  const problem_base = [
    {
      text: "Determine",
      problem: "\\lim_{x \\to 0}e^{2x}",
      solution: "\\lim_{x \\to 0}e^{2x}=0",
      ind: 1,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{x \\to 2}\\frac{x^2-4}{x-2}",
      solution: "\\lim_{x \\to 2}\\frac{x^2-4}{x-2}=4",
      ind: 2,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{x \\to \\pi}\\cos(x)",
      solution: "\\lim_{x \\to \\pi}\\cos(x)=-1",
      ind: 3,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{x \\to \\infty}\\frac{5x^3-7x+4}{3x^3-12}",
      solution: "\\lim_{x \\to \\infty}\\frac{5x^3-7x+4}{3x^3-12}=\\frac{5}{3}",
      ind: 4,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{x \\to 3}\\frac{x^2+5}{x-6}",
      solution: "\\lim_{x \\to 3}\\frac{x^2+5}{x-6}=\\frac{-14}{3}",
      ind: 5,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{x \\to 7}\\frac{2x-2}{5x^2+3}",
      solution: "\\lim_{x \\to 7}\\frac{2x-2}{5x^2+3}=\\frac{3}{62}",
      ind: 6,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{x \\to -3}\\frac{x^2+6x+9}{x+3}",
      solution: "\\lim_{x \\to -3}\\frac{x^2+6x+9}{x+3}=0",
      ind: 7,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{x \\to 1}\\frac{x^2-2x+1}{x-1}",
      solution: "\\lim_{x \\to 1}\\frac{x^2-2x+1}{x-1}=0",
      ind: 8,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{x \\to 2}\\frac{x^3-2x^2-4x+8}{x^2-4x+4}",
      solution: "\\lim_{x \\to 2}\\frac{x^3-2x^2-4x+8}{x^2-4x+4}=4",
      ind: 9,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{a \\to 4}\\frac{a^2-3}{a^3-8}",
      solution: "\\lim_{a \\to 4}\\frac{a^2-3}{a^3-8}=\\frac{13}{56}",
      ind: 10,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{b \\to \\infty}\\frac{6b^3+4b-3}{3b^3-7}",
      solution: "\\lim_{b \\to \\infty}\\frac{6b^3+4b-3}{3b^3-7}=2",
      ind: 11,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{t \\to 2}\\frac{t^2+4t}{t+3}",
      solution: "\\lim_{t \\to 2}\\frac{t^2+4t}{t+3}=\\frac{12}{5}",
      ind: 12,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{x \\to 0}0^x",
      solution: "\\lim_{x \\to 0}0^x=DNE",
      ind: 13,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{x \\to 0}\\frac{1}{x}",
      solution: "\\lim_{x \\to 0}\\frac{1}{x}=DNE",
      ind: 14,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{a \\to 7}\\frac{a^2-a+49}{a-7}",
      solution: "\\lim_{a \\to 7}\\frac{a^2-a+49}{a-7}=0",
      ind: 15,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{b \\to 0}\\frac{\\tan(b)}{\\sin(b)}",
      solution: "\\lim_{b \\to 0}\\frac{\\tan(b)}{\\sin(b)}=1",
      ind: 16,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{x \\to 4}\\frac{x+6}{x-3}",
      solution: "\\lim_{x \\to 4}\\frac{x+6}{x-3}=10",
      ind: 17,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{b \\to 2}x^2+3",
      solution: "\\lim_{b \\to 2}x^2+3=7",
      ind: 18,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{a \\to -3}\\frac{a^3+7}{a+4}",
      solution: "\\lim_{a \\to -3}\\frac{a^3+7}{a+4}=-20",
      ind: 19,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{x \\to 4}\\frac{x^2-16}{x-4}",
      solution: "\\lim_{x \\to 4}\\frac{x^2-16}{x-4}=8",
      ind: 20,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{x \\to 0}\\frac{x^3+7}{x+2}",
      solution: "\\lim_{x \\to 0}\\frac{x^3+7}{x+2}=\\frac{7}{2}",
      ind: 21,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{b \\to 3}\\frac{b^3-9b^2}{b^2-6b+9}",
      solution: "\\lim_{b \\to 3}\\frac{b^3-9b^2}{b^2-6b+9}=6",
      ind: 22,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{h \\to 4}\\frac{h^2+h-20}{h-4}",
      solution: "\\lim_{h \\to 4}\\frac{h^2+h-20}{h-4}=9",
      ind: 23,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{a \\to \\infty}\\frac{6a^3+5a}{4a^4-6}",
      solution: "\\lim_{a \\to \\infty}\\frac{6a^3+5a}{4a^4-6}=0",
      ind: 24,
    },
    {
      text: "Find the limit of",
      problem: "\\lim_{h \\to \\infty}\\frac{-12h^5-3}{2h^3-7}",
      solution: "\\lim_{h \\to \\infty}\\frac{-12h^5-3}{2h^3-7}=-\\infty",
      ind: 25,
    },
    {
      text: "Find the limit of",
      problem: "",
      solution: "",
      ind: 26,
    },
    {
      text: "Find the limit of",
      problem: "",
      solution: "",
      ind: 27,
    },
    {
      text: "Find the limit of",
      problem: "",
      solution: "",
      ind: 28,
    },
    {
      text: "Find the limit of",
      problem: "",
      solution: "",
      ind: 29,
    },
    {
      text: "Find the limit of",
      problem: "",
      solution: "",
      ind: 30,
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
    <div className={styles.limits}>
      <h1 className={styles.header}>
        Practice Solving Limits
        <div className={styles.image_container}>
          <img className={styles.image} src={dice} alt="image of orange dice" />
        </div>
        <div className={styles.hidden_explanation}>
          <span>This page randomly generates problems!</span>
        </div>
      </h1>
      <h2 className={styles.subheader}>Here we'll solve some limits.</h2>
      <Link href="/formatting">
        <a className={styles.formatting_link}>Need help formatting?</a>
      </Link>
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
