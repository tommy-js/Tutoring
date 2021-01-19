import React from "react";
import styles from "./styles.module.scss";

export const Qualifications: React.FC = () => {
  return (
    <div className={styles.qualifications}>
      <h1 className={styles.header}>My Qualifications</h1>
      <p className={styles.text}>
        I graduated from the University of Connecticut Storrs in 2019 with a
        Bachelor's degree in mathematics. Before then I was a student at
        Dutchess Community College, where I graduated with an Associates in Arts
        in Mathematics.
      </p>

      <p className={styles.text}>
        During my time at DCC I acted as a peer tutor in math, covering subjects
        from the very basics to calculus 2. I also acted as a teaching assistant
        during the summers of 2016 and 2017 for a program assisting new students
        just coming into college with their mathematics skills. During my time
        at Dutchess I was also lucky enough to help with the grading of two
        elementary school mathematics competitions, which I am still quite proud
        of.
      </p>
    </div>
  );
};
