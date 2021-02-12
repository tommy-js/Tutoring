import React from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import { SubmitButton } from "../../../../SubmitButton/SubmitButton";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

export const Derivatives: React.FC = () => {
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
      <WordQuestion
        index={1}
        text="Take the derivative of"
        function="x^2+6x+8"
      />
      <WordQuestion
        index={2}
        text="Take the derivative of"
        function="\cos(x)"
      />
      <WordQuestion
        index={3}
        text="Take the derivative of"
        function="\sin(x)"
      />
      <WordQuestion
        index={4}
        text="Take the derivative of"
        function="x^3+\frac{14}{x}-\frac{3}{x^2}"
      />
      <WordQuestion
        index={5}
        text="Take the derivative of"
        function="\cos(x^3)"
      />
      <WordQuestion index={4} text="Take the derivative of" function="e^{4x}" />
      <WordQuestion
        index={6}
        text="Take the derivative of"
        function="\frac{-\sin(2x)}{x^5}"
      />
      <WordQuestion
        index={7}
        text="Take the derivative of"
        function="\frac{e^{x}}{\sin(3x)}"
      />
      <WordQuestion
        index={8}
        text="Take the derivative of"
        function="\frac{7x\tan(2x^3)}{\cos(2x^{12})}"
      />
      <WordQuestion
        index={9}
        text="Take the derivative of"
        function="\frac{e^{x}\cos(2x^4)}{\sin(3x)}"
      />
      <WordQuestion
        index={10}
        text="Take the derivative of"
        function="e^{4x^2}\tan(3x)-6\sin(x)"
      />
      <WordQuestion
        index={11}
        text="Take the derivative of"
        function="4x\sin(x)e^{3x}\cos(2x)"
      />
      <WordQuestion
        index={12}
        text="Take the derivative of"
        function="6\tan(2x^4)-\frac{e^{6x^3}}{\ln(4x^4)}"
      />
      <SubmitButton />
    </div>
  );
};
