import React from "react";
import styles from "./styles.module.scss";

export const SinglePerson: React.FC = () => {
  return (
    <div className={styles.single_person}>
      <h2 className={styles.header}>Expectations</h2>
      <p className={styles.text}>
        Because tutoring online is naturally more challenging than tutoring in
        person, I do not tutor more than one person at a time. My job is to
        ensure that you achieve the best level of proficiency in a given topic
        within our timeslot, and I cannot do that if there are distractions,
        including other people.
      </p>
      <p className={styles.text}>
        Please note that if you show up to our session with your friend/other
        students/family members I will simply reschedule with you. I find that
        this is always distracting and never conducive to a good learning
        environment.
      </p>
    </div>
  );
};
