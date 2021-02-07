import React from "react";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import { BlockMath, InlineMath } from "react-katex";
import { Identity } from "../../../../../Identity/Identity";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

export const Quadratic: React.FC = () => {
  const quadraticFormula = `x= \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}`;
  const step2_1 = "a\\neq 0";
  const step2 = "x^2+\\frac{b}{a}x+\\frac{c}{a}=0";

  return (
    <div className={styles.quadratic}>
      <h1 className={styles.header}>Derivation of the Quadratic Formula</h1>
      <h2 className={styles.subheader}>
        There are many methods for deriving the quadratic formula. In this short
        article we'll do so by use of completing the square. As a reminder, the
        quadratic formula states that{" "}
        <InlineMath>{quadraticFormula}</InlineMath>. This formula is valuable
        because it allows us to easily find the roots of any quadratic equation.
      </h2>
      <p>
        Step 1. We start first with the general formula of a quadratic,{" "}
        <BlockMath>ax^2+bx+c=0</BlockMath>
      </p>
      <p>
        Step 2. Divide out a from the equation. We are allowed to do this
        because <InlineMath>{step2_1}</InlineMath>. If it did equal zero, the
        equation would no longer be a quadratic. This gives us{" "}
        <BlockMath>{step2}</BlockMath>
      </p>
    </div>
  );
};
