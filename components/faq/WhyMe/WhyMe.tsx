import React from "react";
import styles from "./styles.module.scss";

export const WhyMe: React.FC = () => {
  return (
    <div className={styles.why_me}>
      <h2 className={styles.header}>
        Why should I choose you over the other options?
      </h2>
      <p className={styles.text}>
        While it's true that there is no shortage of online tutors available,
        the quality you get varies tremendously. Some people tutor solely for
        financial gain, while others are doing it so they can put something on
        their resume. For me, teaching is my greatest passion. Working with a
        student until a topic finally clicks brings me so much joy.
      </p>
      <p className={styles.text}>
        You should choose to work with me because I believe that tutoring is my
        calling in life, and so you can be sure that you'll be getting 100% of
        my effort in every session.
      </p>
    </div>
  );
};
