import React from "react";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

export const All: React.FC = () => {
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
      path: "algebra1/factoring/methods/worksheet1",
      subject: "algebra 1",
      type: "method",
    },
    {
      id: "3raf3gh43",
      title: "Derivation of Quadratic Formula",
      path: "algebra1/factoring/derivations/worksheet1",
      subject: "algebra 1",
      type: "derivation",
    },
  ];

  return (
    <div className={styles.all}>
      <h1 className={styles.header}>Full Library</h1>
      {testData.map((el: any) => (
        <MaterialsLink id={el.id} title={el.title} path={el.path} />
      ))}
    </div>
  );
};
