import React from "react";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

export const Arithmetic: React.FC = () => {
  const testData = [
    {
      id: "krgmkmbkrmn56667",
      title: "Addition and subtraction practice",
      path: "arithmetic/worksheets/AddSub",
      subject: "Arithmetic",
      type: "worksheet",
    },
    {
      id: "ghh568GFBedE##@s",
      title: "Adding and subtracting fractions practice",
      path: "arithmetic/worksheets/AddSubFracts",
      subject: "Arithmetic",
      type: "worksheet",
    },
    {
      id: "vvv%%gg^%$#Ed##x@22sc%s",
      title: "Multiplying and Dividing fractions practice",
      path: "arithmetic/worksheets/MultDivFrac",
      subject: "Arithmetic",
      type: "worksheet",
    },
  ];
  return (
    <div className={styles.arithmetic}>
      <h1 className={styles.header}>Arithmetic</h1>
      <h2 className={styles.subheader}>
        Addition, subtraction, division, multiplication, fractions, negative
        numbers and more.
      </h2>
      {testData.map((el: any) => (
        <MaterialsLink id={el.id} title={el.title} path={el.path} />
      ))}
    </div>
  );
};
