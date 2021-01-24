import React, { useState } from "react";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

export const CourseMaterials: React.FC = () => {
  const [course, setCourse] = useState(["Algebra 1", "Pre-Calc"]);

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
    <div className={styles.course_materials}>
      <h2 className={styles.header}>Your Materials</h2>
      <p className={styles.course_identifier}>
        [
        {course.map((el: string) => (
          <p className={styles.element}>{el}</p>
        ))}
        ]
      </p>
      {testData.map((el: any) => (
        <MaterialsLink id={el.id} title={el.title} path={el.path} />
      ))}
    </div>
  );
};
