import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import styles from "./styles.module.scss";

const dice = require("../../../../../../public/dice.png");

export const Exponents: React.FC = () => {
  const [problems, setProblems] = useState([] as any);
  const [contRender, setContRender] = useState(false);

  const problem_base = [
    {
      problem: "0^5",
      solution: "0",
      ind: 0,
    },
    {
      problem: "\\frac{\\sqrt{x}}{x^2}",
      solution: "\\frac{1}{\\sqrt{x^3}}",
      ind: 1,
    },
    {
      problem: "x^3\\sqrt{x}",
      solution: "\\sqrt[3]{x^7}",
      ind: 2,
    },
    {
      problem: "\\frac{p}{q^4}*\\frac{\\sqrt{q}}{14p}",
      solution: "\\frac{1}{14\\sqrt[3]{q^7}}",
      ind: 3,
    },
    {
      problem: "4^2*6*6*3",
      solution: "1728",
      ind: 4,
    },
    {
      problem: "0^{2x}",
      solution: "0",
      ind: 5,
    },
    {
      problem: "5x^2*\\frac{2}{4\\sqrt{x}}",
      solution: "\\frac{5\\sqrt[3]{x^2}}{2}",
      ind: 6,
    },
    {
      problem: "\\frac{9a^2p^3}{(a^4-p)^2}",
      solution: "\\frac{9a^2p^3}{a^8-2a^4p+p^2}",
      ind: 7,
    },
    {
      problem: "\\frac{x^3}{(x^2-2x)^2}",
      solution: "\\frac{x}{x^2-4x+4}",
      ind: 8,
    },
    {
      problem: "x^4x^{-2}",
      solution: "x^2",
      ind: 9,
    },
    {
      problem: "\\frac{x^2+6x+9}{x^2-2x-15}",
      solution: "\\frac{x+3}{x-5}",
      ind: 10,
    },
    {
      problem: "(\\frac{4}{3})^3",
      solution: "\\frac{64}{27}",
      ind: 11,
    },
    {
      problem: "(\\frac{1}{3})^2",
      solution: "\\frac{1}{9}",
      ind: 12,
    },
    {
      problem: "0.2^2",
      solution: "0.04",
      ind: 13,
    },
    {
      problem: "(\\frac{(x+5)^2}{x})^2",
      solution: "\\frac{x^4+20x^3+150x^2+500x+625}{x^3}",
      ind: 14,
    },
    {
      problem: "\\frac{a^2}{\\sqrt{a}}",
      solution: "\\sqrt[3]{a^2}",
      ind: 15,
    },
    {
      problem: "(\\frac{2x}{7})^2",
      solution: "\\frac{4x^2}{49}",
      ind: 16,
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
                text="Simplify"
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

  return (
    <div className={styles.exponents}>
      <h1 className={styles.header}>
        Practice with Exponents{" "}
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
        These problems range in difficulty from very easy to very hard. Don't
        get discouraged if you can't figure a few out! Just keep trying and you
        will get it.
      </h2>
      {renderProblems()}
      <div className={styles.bottom}></div>
    </div>
  );
};
