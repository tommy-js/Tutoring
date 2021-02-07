import React from "react";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import { BlockMath, InlineMath } from "react-katex";
import { Identity } from "../../../../../Identity/Identity";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const Factoring: React.FC = () => {
  const expanded = "x^2+6x+8";
  const factored = "(x+2)(x+4)";

  return (
    <div className={styles.factoring}>
      <h1 className={styles.header}>Methods of Factoring</h1>
      <h2 className={styles.subheader}>
        There are many valid methods for factoring expressions. In this short
        article we'll go over some of the main ones you should know.
      </h2>
      <p className={styles.text}>
        Objective: We want to transform an expanded expression such as{" "}
        <InlineMath>{expanded}</InlineMath> into one in factored form,{" "}
        <InlineMath>{factored}</InlineMath>. This will give us some useful
        information, such as the roots of the equation.
      </p>
      <Identity index={1} identity="a^2-b^2=(a+b)(a-b)" />
      <Identity index={2} identity="a^2+2ab+b^2=(a+b)(a+b)" />
      <Identity index={3} identity="a^2-2ab+b^2=(a-b)(a-b)" />
      <Identity index={4} identity="a^3+b^3=(a+b)(a^2-ab+b2)" />
      <Identity index={5} identity="a^3-b^3=(a-b)(a^2+ab+b2)" />
      <Identity index={6} identity="a^3+3a^2b+3ab^2+b^3=(a+b)^3" />
      <Identity index={7} identity="a^3-3a^2b+3ab^2-b^3=(a-b)^3" />
      <p className={styles.text}>
        The most important identities for you to know are the first three.
        Although they look complicated, through practice you'll start to
        intuitively remember them. You will rarely need to use identities 4-7,
        though it may still be useful to be aware of them.
      </p>
      <h2 className={styles.practice_header}>Practice</h2>
      <WordQuestion index={1} text="Factor" function="x^2-4" />
      <WordQuestion index={2} text="Factor" function="x^2+6x+9" />
      <WordQuestion index={3} text="Factor" function="x^3-27" />
      <WordQuestion index={4} text="Factor" function="x^3-21x^2+147x-343" />
      <WordQuestion index={5} text="Factor" function="x^2-10x+25" />
      <WordQuestion index={6} text="Factor" function="x^3+6x^2+12x+8" />
    </div>
  );
};
