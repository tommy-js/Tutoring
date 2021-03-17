import React from "react";
import styles from "./styles.module.scss";

export const Introduction: React.FC = () => {
  return (
    <div className={styles.introduction}>
      <h2 className={styles.header}>
        Affordable Math Tutoring When You Need It
      </h2>

      <p className={styles.text}>
        I began my tutoring career in college back in 2016, mostly helping new
        students with their algebra and trigonometry. At the time, I really
        wanted to become a mathematical researcher. While I still love studying
        math in my free time, I see now that tutoring is my true calling in
        life. Spending so much time helping out new students made me realize
        that there are many people who are in need of low-stress, approachable
        math tutoring, and who can't afford to pay $80 per session.
      </p>
      <p className={styles.text}>
        I created Functional Tutoring in order to continue doing what I love:
        helping others in a genuine way.
      </p>
    </div>
  );
};
