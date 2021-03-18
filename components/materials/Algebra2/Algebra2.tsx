import React from "react";
import Link from "next/link";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

export const Algebra2: React.FC = () => {
  const testData = [
    {
      id: "jkg555g5h5",
      title: "Definitions of Numbers",
      path: "algebra2/definitions/Numbers",
      subject: "Algebra 2",
      type: "definition",
    },
    {
      id: "hynyy7k89ll09",
      title: "Rationalizing the Denominator",
      path: "algebra2/methods/Rationalize",
      subject: "Algebra 2",
      type: "method",
    },
    {
      id: "00l0l8k8k7",
      title: "Practice with Exponents",
      path: "algebra2/worksheets/Exponents",
      subject: "Algebra 2",
      type: "worksheet",
    },
    {
      id: "nnmnmyuy7776wscasc",
      title: "Practice with Inequalities",
      path: "algebra2/worksheets/Inequalities",
      subject: "Algebra 2",
      type: "worksheet",
    },
    {
      id: "gbn,nnyt544edddW3fFGGrtnNN",
      title: "Practice Your Logarithms",
      path: "algebra2/worksheets/Logarithms",
      subject: "Algebra 2",
      type: "worksheet",
    },
  ];
  return (
    <div className={styles.algebra2}>
      <h1 className={styles.header}>Algebra 2</h1>
      <h3 className={styles.link_flair}>
        Need extra help?{" "}
        <Link href="/schedule">
          <span className={styles.link}>Sign up for tutoring</span>
        </Link>
      </h3>
      <h2 className={styles.subheader}>
        The second of two parts exploring functions, expressions, systems of
        equations, and more!
      </h2>
      {testData.map((el: any) => (
        <MaterialsLink id={el.id} title={el.title} path={el.path} />
      ))}
    </div>
  );
};
