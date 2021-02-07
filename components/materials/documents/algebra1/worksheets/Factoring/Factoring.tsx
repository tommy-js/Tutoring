import React from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import { SubmitButton } from "../../../../SubmitButton/SubmitButton";
import styles from "./styles.module.scss";

export const Factoring: React.FC = () => {
  return (
    <div className={styles.factoring}>
      <h1 className={styles.header}>Factoring & Distribution Practice</h1>
      <Link href="/formatting">
        <a className={styles.formatting_link}>Need help formatting?</a>
      </Link>
      <WordQuestion index={1} text="Factor" function="x^2+6x+8" />
      <WordQuestion index={2} text="Factor" function="6x^2+11x-10" />
      <WordQuestion index={3} text="Distribute" function="(x^2+y^3)(x^3+y)" />
      <WordQuestion index={4} text="Factor" function="5x^2+22x+21" />
      <WordQuestion index={5} text="Distribute" function="4x(x^2-x)(x^3+2x)" />
      <WordQuestion index={6} text="Distribute" function="(ax+by)(cd+ef)" />
      <SubmitButton />
    </div>
  );
};
