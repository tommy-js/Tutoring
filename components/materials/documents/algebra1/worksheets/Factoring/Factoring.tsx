import React from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import styles from "./styles.module.scss";

export const Factoring: React.FC = () => {
  return (
    <div className={styles.factoring}>
      <h1 className={styles.header}>Factoring & Distribution Practice</h1>
      <Link href="/formatting">
        <a className={styles.formatting_link}>Need help formatting?</a>
      </Link>
      <WordQuestion
        index={1}
        text="Factor"
        function="x^2+6x+8"
        solution="(x+4)(x+2)"
      />
      <WordQuestion
        index={1}
        text="Factor"
        function="x^2+12x+36"
        solution="(x+6)^2"
      />
      <WordQuestion
        index={3}
        text="Distribute"
        function="(x^2+y^3)(x^3+y)"
        solution="x^5+x^2y+x^3y^3+y^4"
      />
      <WordQuestion
        index={4}
        text="Factor"
        function="5x^2+22x+21"
        solution="(5x+7)(x+3)"
      />
      <WordQuestion
        index={5}
        text="Distribute"
        function="4x(x^2-x)(x^3+2x)"
        solution="4x^6+8x^4-4x^5-8x^3"
      />
      <WordQuestion
        index={6}
        text="Distribute"
        function="(ax+by)(cd+ef)"
        solution="axcd+axef+bycd+byef"
      />
    </div>
  );
};
