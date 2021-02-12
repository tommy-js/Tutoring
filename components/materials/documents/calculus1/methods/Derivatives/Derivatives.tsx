import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

export const Derivatives: React.FC = () => {
  const power_rule =
    "\\frac{d}{dx}x^a+x^{a-1}+x^{a-2}+...+x^2+x+1=ax^{a-1}+(a-1)x^{a-2}+(a-2)x^{a-3}+...+2x+1";
  const power_rule_example = "\\frac{d}{dx}x^3+x^2+5x+6=3x^2+2x+5";
  const quotient_rule =
    "\\frac{d}{dx}\\frac{f(x)}{g(x)} = \\frac{f'(x)g(x)-g'(x)f(x)}{(g(x))^2}";
  const quotient_rule_example =
    "\\frac{d}{dx}\\frac{x^2}{cos(x)} = \\frac{sin(x)x^2-2xcos(x)}{cos^2(x)}";
  const product_rule = "\\frac{d}{dx}f(x)g(x)";
  const product_rule_def = "\\frac{d}{dx}f(x)g(x)=f'(x)g(x)+g'(x)f(x)";
  const product_rule_example =
    "\\frac{d}{dx}\\cos(x)2x^3 = [\\frac{d}{dx}2x^3]\\cos(x) + [\\frac{d}{dx}\\cos(x)]2x^3 =  6x\\cos(x)-\\sin(x)2x^3";
  const chain_rule = "\\frac{d}{dx}e^{2x^2}";
  const chain_rule_def = "\\frac{d}{dx}f(g(x))=g'(x)f'(g(x))";
  const f_x = "f(x) = e^x";
  const g_x = "g(x) = x^2";
  const chain_rule_solution = "\\frac{d}{dx}e^{2x^2} = 2xe^{x^2}";

  return (
    <div className={styles.derivatives}>
      <h1 className={styles.header}>Methods of Taking Derivatives</h1>
      <h2 className={styles.subheader}>
        Here are outlined various methods of taking derivatives.
      </h2>
      <p className={styles.text}>
        The most well-known method is that of the Power Rule. Definitely the
        simplest of the derivative rules, this allows us to take derivatives of
        standard polynomials.
      </p>
      <p className={styles.text}>
        <span className={styles.flair}>Power Rule:</span>{" "}
        <InlineMath>{power_rule}</InlineMath>. In simpler terms, we can have the
        example of <InlineMath>{power_rule_example}</InlineMath>. You drop the
        exponent and multiply the x-term by it and then lower the exponent by 1.
      </p>
      <p className={styles.text}>
        <span className={styles.flair}>Quotient Rule:</span> This rule is
        important for fractions of two functions. We have that{" "}
        <InlineMath>{quotient_rule}</InlineMath>. As an example, let's take the
        function <InlineMath>{quotient_rule_example}</InlineMath>. We take the
        derivative of the top function and multiply it by the bottom and
        subtract away the derivative of the bottom function multiplied by the
        top function, then divide it by the bottom function squared.
      </p>
      <p className={styles.text}>
        <span className={styles.flair}>Product Rule:</span> This law is for
        those functions that are products. So if you have a derivative{" "}
        <InlineMath>{product_rule}</InlineMath> this simplifies down to{" "}
        <InlineMath>{product_rule_def}</InlineMath>.
      </p>
      <p className={styles.text}>
        As an example, <InlineMath>{product_rule_example}</InlineMath>
      </p>
      <p className={styles.text}>
        <span className={styles.flair}>Chain Rule:</span> There are often
        situations when we need to take the derivative of a composite function.
        For example, how would we go about finding{" "}
        <InlineMath>{chain_rule}</InlineMath>?
      </p>
      <p className={styles.text}>
        The answer is the Chain Rule, which states that{" "}
        <InlineMath>{chain_rule_def}</InlineMath>. We will use the example above
        to show you how this works. For <InlineMath>{chain_rule}</InlineMath>,
        we see that <InlineMath>{f_x}</InlineMath> and{" "}
        <InlineMath>{g_x}</InlineMath>.
      </p>
      <p className={styles.text}>
        Simply applying the formula, we get that{" "}
        <BlockMath>{chain_rule_solution}</BlockMath>
      </p>
      <div className={styles.bottom}></div>
    </div>
  );
};
