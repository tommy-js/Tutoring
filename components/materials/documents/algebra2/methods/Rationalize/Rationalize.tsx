import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

export const Rationalize: React.FC = () => {
  const frac = "\\frac{4}{5-\\sqrt{7}}";
  const ex_frac = "\\frac{a}{b+\\sqrt{c}}";
  const ex_conjugate = "b-\\sqrt{c}";
  const frac_conju =
    "\\frac{4}{5-\\sqrt{7}} * \\frac{5+\\sqrt{7}}{5+\\sqrt{7}} = \\frac{4*5+4*\\sqrt{7}}{(5-\\sqrt{7})(5+\\sqrt{7})} = \\frac{20+4\\sqrt{7}}{25-5\\sqrt{7}+5\\sqrt{7}-7}";
  const final_frac = "\\frac{20+4\\sqrt{7}}{18}";
  const single_denom = "\\frac{12}{\\sqrt{17}}";
  const single_denom_solution =
    "\\frac{12}{\\sqrt{17}}\\frac{\\sqrt{17}}{\\sqrt{17}} = \\frac{12\\sqrt{17}}{17}";

  return (
    <div className={styles.rationalize}>
      <h1 className={styles.header}>Rationalizing the Denominator</h1>
      <h2 className={styles.subheader}>
        Sometimes we end up with a root in the denominator of a fraction, which
        is something we want to avoid. It's better to have the root in the
        numerator, so we use a method known as "rationalizing the denominator"
        to get it there.
      </h2>
      <p className={styles.text}>
        Let's say we have the fraction <InlineMath>{frac}</InlineMath>. We want
        to get the square root out of the denominator. So what do we do? Well,
        we can multiply the numerator and denominator of our function by
        something known as the "conjugate".
      </p>
      <p className={styles.text}>
        The conjugate is a term that ends up removing the root from the
        denominator. If we have some fraction <InlineMath>{ex_frac}</InlineMath>
        , then the conjugate is <InlineMath>{ex_conjugate}</InlineMath>. It is
        the same term as what we are attempting to conjugate, with the opposite
        sign joining the values.
      </p>
      <p className={styles.text}>
        So, in our example, we take our fraction and multiply it as such:{" "}
        <BlockMath>{frac_conju}</BlockMath>
      </p>
      <p className={styles.text}>
        This is interesting! We see that in the denominator the two roots will
        cancel out, leaving us simply with the fraction{" "}
        <BlockMath>{final_frac}</BlockMath>
      </p>
      <p className={styles.text}>
        We can simplify further by dividing out 2 from the top and bottom.
        However, you can now get a sense for why this method is useful to us.
        The square root is now in the numerator, not the denominator.
      </p>
      <p className={styles.text}>
        Perhaps more common than having two terms in the denominator, you'll
        often want to rationalize an expression that has a single root in the
        denominator. Doing so is even easier than above. You don't need to worry
        about remembering about the conjugate. Say we have the fraction{" "}
        <InlineMath>{single_denom}</InlineMath> and we want to rationalize it.
      </p>
      <p className={styles.text}>
        In this case all you need to do is multiply the numerator and
        denominator by the root. Doing so, we get{" "}
        <BlockMath>{single_denom_solution}</BlockMath>
      </p>
      <p className={styles.text}>
        As you can see, this easily drops out the square root in the
        denominator.
      </p>
      <div className={styles.bottom}></div>
    </div>
  );
};
