import React from "react";
import Link from "next/link";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

export const PreCalc: React.FC = () => {
  const testData = [
    {
      id: "fke444g5h5",
      title: "Complex Numbers Practice",
      path: "precalc/worksheets/Complex",
      subject: "Pre-Calculus",
      type: "worksheet",
    },
    {
      id: "bntnmm5554333",
      title: "Practice with Function Composition",
      path: "precalc/worksheets/FunctionalComposition",
      subject: "Pre-Calculus",
      type: "worksheet",
    },
    {
      id: "f3fjk3ngj3nj43hg44h",
      title: "Practice with Logarithm Equations",
      path: "precalc/worksheets/Logarithms",
      subject: "Pre-Calculus",
      type: "worksheet",
    },
    {
      id: "gkm4km45667,bbBffrree",
      title: "Trigonometric Identities",
      path: "precalc/definitions/TrigIdentities",
      subject: "Pre-Calculus",
      type: "definitions",
    },
  ];

  return (
    <div className={styles.precalc}>
      <h1 className={styles.header}>Pre-Calc</h1>
      <h3 className={styles.link_flair}>
        Need extra help?{" "}
        <Link href="/schedule">
          <span className={styles.link}>Sign up for tutoring</span>
        </Link>
      </h3>
      <h2 className={styles.subheader}>
        A review of functions, trigonometry, basic geometry, and more!
      </h2>
      {testData.map((el: any) => (
        <MaterialsLink id={el.id} title={el.title} path={el.path} />
      ))}
    </div>
  );
};
