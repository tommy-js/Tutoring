import React from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import styles from "./styles.module.scss";

export const Factoring: React.FC = () => {
  return (
    <div className={styles.factoring}>
      <h1 className={styles.header}>Factoring Practice</h1>
      <Link href="/formatting">
        <a>Need help formatting?</a>
      </Link>
      <WordQuestion index={1} text="Factor" function="(ax+by)(cd+ef)" />
      <WordQuestion index={2} text="Factor" function="(x^2+y^3)(x^3+y)" />
    </div>
  );
};
