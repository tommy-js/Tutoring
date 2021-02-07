import React from "react";
import styles from "./styles.module.scss";

export const AtAGlance: React.FC = () => {
  return (
    <div className={styles.at_a_glance}>
      <h2 className={styles.header}>At a Glance</h2>
      <h3 className={styles.subheader}>
        Just a few reasons you should consider me!
      </h3>
      <ul className={styles.text}>
        <li>
          Two years tutoring experience at a variety of mathematics levels
        </li>
        <li>Two-time teaching assistant for a fantastic mathematics program</li>
        <li>Bachelor's Degree in mathematics</li>
        <li>
          Offering help in many subjects, including SAT and Regents exam prep
        </li>
        <li>Available and affordable: I want to see you succeed!</li>
        <li>
          Continuously growing library of practice problems with solutions that
          you can do in your own time or work out with me
        </li>
      </ul>
    </div>
  );
};
