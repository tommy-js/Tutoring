import React from "react";
import styles from "./styles.module.scss";

export const Cancellations: React.FC = () => {
  return (
    <div className={styles.cancellations}>
      <h2 className={styles.header}>
        What should I do if I need to cancel my session?
      </h2>
      <p className={styles.text}>
        No worries! Simply let me know that you need to cancel at least a full
        day ahead of time. This helps me find another student to fill your spot,
        which allows me to make the money I need to keep doing what I love. If
        an emergency comes up and you need to cancel sooner, please give me a
        call when you have a moment so that I know not to wait on you.
      </p>
      <p className={styles.text}>
        *Please note that, barring extreme circumstances, if you fail to cancel
        your appointment at least 8 hours ahead of time, I will charge you half
        the cost of the session. This is because it is nearly impossible for me
        to fill your spot within the same day, and so I must recoup some of my
        lost income.
      </p>
    </div>
  );
};
