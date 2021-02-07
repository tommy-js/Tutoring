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
  const step3_1 = "\\frac{c}{a}";
  const step3 = "x^2+\\frac{b}{a}x=-\\frac{c}{a}";
  const step4_1 = "(\\frac{b}{2a})^2";
  const step4 =
    "x^2+\\frac{b}{a}x+(\\frac{b}{2a})^2=-\\frac{c}{a}+(\\frac{b}{2a})^2";
  const step5 = "(x+\\frac{b}{2a})^2=-\\frac{c}{a}+(\\frac{b}{2a})^2";
  const step6_1 = "-\\frac{c}{a}*\\frac{4a}{4a}";
  const step6 = "(x+\\frac{b}{2a})^2=\\frac{b^2-4ac}{4a^2}";
  const step7 = "x+\\frac{b}{2a}=\\pm\\frac{\\sqrt{b^2-4ac}}{2a}";
  const step7_1 = "\\pm";
  const step8_1 = "\\frac{b}{2a}";

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
      <p className={styles.text}>
        Step 1. We start first with the general formula of a quadratic,{" "}
        <BlockMath>ax^2+bx+c=0</BlockMath>
      </p>
      <p className={styles.text}>
        Step 2. Divide out a from the equation. We are allowed to do this
        because <InlineMath>{step2_1}</InlineMath>. If it did equal zero, the
        equation would no longer be a quadratic. This gives us{" "}
        <BlockMath>{step2}</BlockMath>
      </p>
      <p className={styles.text}>
        Step 3. Now we subtract <InlineMath>{step3_1}</InlineMath> from both
        sides to get our equation in the form <BlockMath>{step3}</BlockMath>
      </p>
      <p className={styles.text}>
        Step 4. This step is the most complicated. We see that if we add{" "}
        <InlineMath>{step4_1}</InlineMath> to both sides, we have a perfect
        square on the left. So, we have <BlockMath>{step4}</BlockMath>
      </p>
      <p className={styles.text}>
        Step 5. Due to the perfect square, we can factor the lefthand side and
        get <BlockMath>{step5}</BlockMath> If you distribute out the left you
        will see that this is a valid step. I encourage you to do the work so
        that you really understand each step.
      </p>
      <p className={styles.text}>
        Step 6. We move our attention to the righthand side of the equation. It
        would be to our benefit to combine those two fractions into one, so we
        see that if we get the denominators equal, we can combine them. In other
        words, multiplying the fraction <InlineMath>{step6_1}</InlineMath> would
        get the denominator to equal <InlineMath>4a^2</InlineMath>, which is
        what we're looking for. Thus, we get <BlockMath>{step6}</BlockMath>
      </p>
      <p className={styles.text}>
        Step 7. You can probably see that we're getting close to what we're
        looking for, but there are still a couple more steps to go. From here,
        we want to take the square root of both sides. This will put our
        equation in a form where we can eventually get x to equal something. So,
        after taking the square root, <BlockMath>{step7}</BlockMath>
        It's important to keep in mind the <InlineMath>
          {step7_1}
        </InlineMath>{" "}
        here. This is because when we take a square root we can get either a
        positive or negative result.
      </p>
      <p className={styles.text}>
        Step 8. The final step! We subtract <InlineMath>{step8_1}</InlineMath>{" "}
        from both sides. This gives us our final result of{" "}
        <BlockMath>{quadraticFormula}</BlockMath>
      </p>
      <p className={styles.text}>
        This was definitely a long process, but I encourage you to go through it
        until you understand each step. Doing so will give you a better
        understanding of why we're able to use the Quadratic Formula in the
        first place.
      </p>
      <div className={styles.bottom}></div>
    </div>
  );
};
