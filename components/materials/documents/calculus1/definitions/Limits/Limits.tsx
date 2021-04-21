import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

export const Limits: React.FC = () => {
  const definition = "\\lim_{h \\to 0}\\frac{f(x+h)-f(x)}{h}";
  const problem1 = "f(x) = x^2+3x-5";
  const problem1_1 = "\\lim_{h \\to 0}\\frac{[(x+h)^2+3(x+h)-5]-[x^2+3x-5]}{h}";
  const problem1_2 = "\\lim_{h \\to 0}\\frac{x^2+2xh+h^2+3x+3h-5-x^2-3x+5}{h}";
  const problem1_3 = "\\lim_{h \\to 0}\\frac{2xh+h^2+3h}{h}";
  const problem1_4 = "\\lim_{h \\to 0}2x+h+3";
  const problem1_solution = "f'(x) = 2x+3";

  const problem2 = "f(x) = 2x^2-\\frac{7}{x}";
  const problem2_1 =
    "\\lim_{h \\to 0}\\frac{[2(x+h)^2-\\frac{7}{x+h}]-[2x^2-\\frac{7}{x}]}{h}";
  const problem2_2 =
    "\\lim_{h \\to 0}\\frac{[2x^2+4xh+2h^2-\\frac{7}{x+h}]-2x^2+\\frac{7}{x}}{h}";
  const problem2_3 =
    "\\lim_{h \\to 0}\\frac{4xh+2h^2-\\frac{7x}{x^2+hx}+\\frac{7x+7h}{x^2+hx}}{h}";
  const problem2_4 = "\\lim_{h \\to 0}\\frac{4xh+2h^2+\\frac{7h}{x^2+hx}}{h}";
  const problem2_5 = "\\lim_{h \\to 0}(4x+2h+\\frac{7}{x^2+hx})";
  const problem2_6 = "4x+\\frac{7}{x^2}";
  const problem2_solution = "f'(x) = 4x+\\frac{7}{x^2}";

  return (
    <div className={styles.limits}>
      <h1 className={styles.header}>Definition of Derivative</h1>
      <h2 className={styles.subheader}>
        Here we will give the definition of the derivative, which can be used to
        calculate any derivative and is how the concept was originally
        developed.
      </h2>
      <p className={styles.text}>
        Although there are many ways you can define the derivative, the most
        common is definitely <BlockMath>{definition}</BlockMath>
      </p>
      <p className={styles.text}>
        Let's go through a few examples to show you how it works.
      </p>
      <p className={styles.text}>
        <span className={styles.problem_flair}>Problem 1.</span> Find the
        derivative to <InlineMath>{problem1}</InlineMath>.
      </p>
      <p className={styles.text}>
        <span className={styles.problem_flair}>Solution:</span> First take the
        definition of the derivative and substitute in the function{" "}
        <InlineMath>{problem1}</InlineMath>. This gives us{" "}
        <BlockMath>{problem1_1}</BlockMath>
      </p>
      <p className={styles.text}>
        From this point it's simply a matter of distributing out and cancelling.
        It's important to note that going through this process will always yield
        the correct derivative, so if you get something odd or find yourself in
        a position where you cannot cancel anything further, you've made a
        mistake.
      </p>
      <p className={styles.text}>
        So after distributing out we get <BlockMath>{problem1_2}</BlockMath>
      </p>
      <p className={styles.text}>
        Now we cancel terms from the numerator and end up with{" "}
        <BlockMath>{problem1_3}</BlockMath>
      </p>
      <p className={styles.text}>
        Notice that that most of the terms cancelled out, making the work from
        here quite simple. In fact, we can just cancel out the h from the
        numerator and denominator, <BlockMath>{problem1_4}</BlockMath>
      </p>
      <p className={styles.text}>
        Now, after letting h tend to zero, we are simply left with{" "}
        <InlineMath>{problem1_solution}</InlineMath>. If you know the Power Rule
        for derivatives you'll be able to immediately see that this result is
        correct.
      </p>
      <p className={styles.text}>
        <span className={styles.problem_flair}>Problem 2.</span> Find the
        derivative of <InlineMath>{problem2}</InlineMath>.
      </p>
      <p className={styles.text}>
        <span className={styles.problem_flair}>Solution:</span> So right off the
        bad this problem seems a bit more complicated than problem 1. We notice
        that we have a fraction in the function, and it may not be immediately
        clear what we should do with this. However, we simply proceed as before.
        After substituting the function into our limit definition we get{" "}
        <BlockMath>{problem2_1}</BlockMath>
      </p>
      <p className={styles.text}>
        From here we expand out the numerator to obtain{" "}
        <BlockMath>{problem2_2}</BlockMath>
      </p>
      <p className={styles.text}>
        Then, all that remains is to find a common denominator between the two
        fractions in the numerator and remove out the common factors. We find
        that <InlineMath>x^2+hx</InlineMath> is the common denominator between
        the two fractions in the numerator. so, we get{" "}
        <BlockMath>{problem2_3}</BlockMath>
      </p>
      <p className={styles.text}>
        Then, consolidating the fractions within the numerator, we're left with{" "}
        <BlockMath>{problem2_4}</BlockMath>
      </p>
      <p className={styles.text}>
        From here it's simply a matter of dividing out the h term from numerator
        and denominator, and then letting the limit of h tend to zero. After
        dividing out h, we have <BlockMath>{problem2_5}</BlockMath>
      </p>
      <p className={styles.text}>
        All that's left is to allow h to tend to zero, after which we have{" "}
        <InlineMath>{problem2_6}</InlineMath>
      </p>
      <p className={styles.text}>
        So, we have that <InlineMath>{problem2_solution}</InlineMath>. Once
        again, if you know the Power Rule, you'll be able to tell with little
        difficulty that this is a correct result.
      </p>
      <div className={styles.bottom}></div>
    </div>
  );
};
