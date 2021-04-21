import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

export const LHopitals: React.FC = () => {
  const l1 = "\\lim_{x \\to a}\\frac{f(x)}{g(x)}=\\frac{0}{0}";
  const l2 =
    "\\lim_{x \\to a}\\frac{f(x)}{g(x)}=\\frac{\\pm \\infty}{\\pm \\infty}";
  const ex_1 = "\\lim_{x \\to 2}\\frac{x^2+x-6}{x^2-4}=\\frac{0}{0}";
  const ex_1_solution = "\\lim_{x \\to 2}\\frac{2x+1}{2x}=\\frac{5}{4}";
  const ex_2 = "\\lim_{x \\to \\infty}\\frac{x-15}{x}=\\frac{\\infty}{\\infty}";
  const ex_2_solution = "\\lim_{x \\to \\infty}\\frac{1}{1}=1";

  return (
    <div className={styles.lhopitals}>
      <h1 className={styles.header}>L'Hospital's Rule</h1>
      <h2 className={styles.subheader}>
        This is a topic that is often gone over towards the middle-end of a
        first-semester calculus course. L'Hospital's Rule is a very useful, if
        limited, fact that will help us evaluate certain difficult limits.
      </h2>
      <p className={styles.text}>
        L'Hospital's Rule states that if we have a limit of the form{" "}
        <InlineMath>{l1}</InlineMath> or <InlineMath>{l2}</InlineMath> we can
        take the derivative of the numerator and denominator of our limit
        function and this will give us the limit.
      </p>
      <p className={styles.text}>
        Let's go through an example. If we have the limit{" "}
        <InlineMath>{ex_1}</InlineMath>, we have an indeterminate form for the
        result. This means that we can use L'Hospital's Rule to try and simplify
        it. So, taking the derivative of the numerator and denominator, we're
        left with <InlineMath>{ex_1_solution}</InlineMath>. So this is our
        limit, and we no longer have an issue.
      </p>
      <p className={styles.text}>
        Let's go over one more example, this time in another indeterminate form.
        Take <InlineMath>{ex_2}</InlineMath>. This is a fairly simple one, since
        taking the derivative of the numerator and denominator yields{" "}
        <InlineMath>{ex_2_solution}</InlineMath>
      </p>
      <p className={styles.text}>
        It's important to note that L'Hospital's Rule isn't a silver bullet.
        Sometimes it doesn't yield any result, and in this case it cannot be
        used.
      </p>
    </div>
  );
};
