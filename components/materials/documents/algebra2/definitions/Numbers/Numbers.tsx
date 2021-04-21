import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import { Definition } from "../../../../Definition/Definition";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

export const Numbers: React.FC = () => {
  const trans =
    "\\frac{b}{c}x^n+\\frac{d}{e}x^{n-1}+...+\\frac{q}{p}x+\\frac{y}{z}";
  const pi = "\\pi = 3.1415...";
  const rational = "a=\\frac{p}{q}";

  return (
    <div className={styles.numbers}>
      <h1 className={styles.header}>Definitions of Numbers</h1>
      <h2 className={styles.subheader}>
        Here we define terms such as <i>transcendental</i>, <i>algebraic</i>,
        and <i>irrational</i>.
      </h2>
      <Definition
        title="Transcendental"
        def="A number that is not the solution of a non-zero polynomial with rational coefficients."
      />
      <p className={styles.text}>
        In other words, if we have some number, a, it is transcendental if it
        does not satisfy any equation so that <InlineMath>{trans}</InlineMath>.
        Transcendental numbers are extremely common but rarely known. Good
        examples are <InlineMath>{pi}</InlineMath> and{" "}
        <InlineMath>e=2.71828...</InlineMath>. These are non-repeating and
        non-terminating, making them also irrational.
      </p>
      <Definition
        title="Rational"
        def="A number that can be written as a fraction of two integers."
      />
      <p className={styles.text}>
        We have that a number, a, is rational if it can be written as a quotient
        of two integers, such that <InlineMath>{rational}</InlineMath>, where p
        and q are in lowest terms.
      </p>
      <Definition
        title="Integer"
        def="An integer is a number that is written without a fractional part."
      />
      <p className={styles.text}>
        In other words, a number is an integer if it can be written as a single
        value, and not in a fraction. An integer can be negative or positive.
        Examples of integers include -2, 6, 394, -63, etc...
      </p>
    </div>
  );
};
