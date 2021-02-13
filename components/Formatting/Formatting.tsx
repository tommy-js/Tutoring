import React from "react";
import { FormattingBlock } from "../FormattingBlock/FormattingBlock";
import styles from "./styles.module.scss";

export const Formatting: React.FC = () => {
  return (
    <div className={styles.formatting}>
      <h1 className={styles.header}>Math Formatting</h1>
      <h3 className={styles.subheader}>
        The <span className={styles.flair}>Functional Tutoring</span> engine
        uses software called LaTex to render our math. Because of this, it can
        take a little while to learn how to properly format things. We've done
        our best to make it easy to use our software. Generally, there are
        multiple correct ways to format your answer. If you need to do something
        complicated, however, the list below should make it clear how to
        accomplish this.
      </h3>
      <FormattingBlock
        header="Fractions"
        text="Fractions are generally accepted by use of the / symbol or through use of the more correct \frac{}{}. As an example, both a/b and \frac{a}{b} would imply the same thing, and both would be accepted."
        placeholder="\frac{a}{b}"
      />
      <FormattingBlock
        header="Exponents"
        text="Exponents are typically formatted by use of the carrot(^) key. If you need to include more than one character in the exponent, use curley braces({}). Example: x^a would work, or for more than one character, x^{ab}."
        placeholder="x^{ab}"
      />
      <FormattingBlock
        header="Binomials"
        text="Formatting binomials is fairly easy; simply type \binom a b below."
        placeholder="\binom a b"
      />
      <FormattingBlock
        header="Trigonometric Functions"
        text="Most trig functions are easy to format. Like much of Functional Tutoring, if you simply type out cos for cosine, sin for sine, and so on, it will be an accepted answer. However, if you want you can format it properly by typing \cos for cosine, \sin for sine, \tan for tangent, and so on. Still, sin(x) and \sin(x) work just fine for most problems."
        placeholder="\sin x"
      />
      <div className={styles.bottom} />
    </div>
  );
};
