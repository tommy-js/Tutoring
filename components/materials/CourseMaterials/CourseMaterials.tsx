import React from "react";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

export const CourseMaterials: React.FC = () => {
  const testData = [
    {
      id: "3525r",
      title: "Factoring Worksheet 1",
      path: "algebra1/factoring/worksheets/worksheet1",
    },
    {
      id: "xxc3344",
      title: "Methods of Factoring",
      path: "algebra1/factoring/methods/worksheet1",
    },
    {
      id: "3raf3gh43",
      title: "Derivation of Quadratic Formula",
      path: "algebra1/factoring/derivations/worksheet1",
    },
  ];

  return (
    <div className={styles.course_materials}>
      <h2 className={styles.header}>Your Materials</h2>
      {testData.map((el: any) => (
        <MaterialsLink id={el.id} title={el.title} path={el.path} />
      ))}
    </div>
  );
};
