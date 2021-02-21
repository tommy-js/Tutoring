import React from "react";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

export const FullCourseList: React.FC = () => {
  const testData = [
    {
      id: 0,
      title: "Arithmetic",
      path: "arithmetic",
    },
    {
      id: 1,
      title: "Geometry",
      path: "geometry",
    },
    {
      id: 2,
      title: "Algebra 1",
      path: "algebra1",
    },
    {
      id: 3,
      title: "Algebra 2",
      path: "algebra2",
    },
    {
      id: 4,
      title: "Pre-Calc",
      path: "precalc",
    },
    {
      id: 5,
      title: "Calculus 1",
      path: "calculus1",
    },
  ];

  return (
    <div className={styles.full_course_list}>
      <h1 className={styles.header}>All Courses</h1>
      {testData.map((el: any) => (
        <MaterialsLink id={el.id} title={el.title} path={el.path} />
      ))}
    </div>
  );
};
