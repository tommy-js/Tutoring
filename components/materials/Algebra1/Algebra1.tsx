import React from "react";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

export const Algebra1: React.FC = () => {
  const testData = [
    {
      id: "3525r",
      title: "Factoring Worksheet 1",
      path: "algebra1/factoring/worksheets/worksheet1",
      subject: "algebra 1",
      type: "worksheet",
    },
    {
      id: "xxc3344",
      title: "Methods of Factoring",
      path: "algebra1/methods/factoring",
      subject: "algebra 1",
      type: "method",
    },
    {
      id: "3raf3gh43",
      title: "Derivation of Quadratic Formula",
      path: "algebra1/derivations/quadratic",
      subject: "algebra 1",
      type: "derivation",
    },
  ];

  return (
    <div className={styles.algebra1}>
      <h1 className={styles.header}>Algebra 1</h1>
      <h2 className={styles.subheader}>
        The first of two parts exploring functions, expressions, systems of
        equations, and more!
      </h2>
      <h3 className={styles.all_materials}>All Materials</h3>
      {testData.map((el: any) => (
        <MaterialsLink id={el.id} title={el.title} path={el.path} />
      ))}
    </div>
  );
};
