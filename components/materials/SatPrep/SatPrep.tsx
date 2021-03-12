import React from "react";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

export const SatPrep: React.FC = () => {
  const testData = [
    {
      id: "grmkgk555433",
      title: "Practice Set 1",
      path: "sat/worksheets/Prep1",
      subject: "SAT",
      type: "worksheet",
    },
  ];

  return (
    <div className={styles.sat_prep}>
      <h1 className={styles.header}>SAT Prep</h1>
      <h2 className={styles.subheader}>
        Prepare for the 2021 SAT exams with an assortment of practice problems
        and explanations!
      </h2>
      {testData.map((el: any) => (
        <MaterialsLink id={el.id} title={el.title} path={el.path} />
      ))}
    </div>
  );
};
