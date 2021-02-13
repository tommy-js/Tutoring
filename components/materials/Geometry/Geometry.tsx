import React from "react";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

export const Geometry: React.FC = () => {
  const testData = [
    {
      id: "3fagnt554",
      title: "Important Definitions",
      path: "geometry/definitions/Important",
      subject: "geometry",
      type: "definition",
    },
    {
      id: "vsves333",
      title: "Identify Similar and Congruent Shapes",
      path: "geometry/worksheets/Similar",
      subject: "geometry",
      type: "worksheet",
    },
  ];

  return (
    <div className={styles.geometry}>
      <h1 className={styles.header}>Geometry</h1>
      <h2 className={styles.subheader}>
        The study of shapes and their properties
      </h2>
      <p className={styles.flair}>
        Sorry, we haven't added anything to our geometry course just yet!
      </p>
    </div>
  );
};
