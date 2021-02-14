import React from "react";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

export const Calculus1: React.FC = () => {
  const testData = [
    {
      id: "fke444g5h5",
      title: "Definition of Limit",
      path: "calculus1/definitions/Limits",
      subject: "Calculus 1",
      type: "definition",
    },
    {
      id: "bbtbrbrsbvdc",
      title: "Practice Taking Derivatives",
      path: "calculus1/worksheets/Derivatives",
      subject: "Calculus 1",
      type: "worksheet",
    },
    {
      id: "44hhhnmmczs",
      title: "Methods of Taking Derivatives",
      path: "calculus1/methods/Derivatives",
      subject: "Calculus 1",
      type: "method",
    },
    {
      id: "efemkgm44km3w",
      title: "Methods of Integration",
      path: "calculus1/methods/Integrals",
      subject: "Calculus 1",
      type: "method",
    },
    {
      id: "kmk4g4434356hhjj",
      title: "L'Hospital's Rule",
      path: "calculus1/definitions/LHopitals",
      subject: "Calculus 1",
      type: "definition",
    },
    {
      id: "fkmk4g5566785gFFFeww",
      title: "The Exponential Derivative",
      path: "calculus1/derivations/exponential",
      subject: "Calculus 1",
      type: "definition",
    },
  ];

  return (
    <div className={styles.calculus1}>
      <h1 className={styles.header}>Calculus 1</h1>
      <h2 className={styles.subheader}>
        Limits, derivatives, discontinuities, basics of integration, L’Hôpital’s
        rule, etc...
      </h2>
      {testData.map((el: any) => (
        <MaterialsLink id={el.id} title={el.title} path={el.path} />
      ))}
    </div>
  );
};
