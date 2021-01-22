import React from "react";
import styles from "./styles.module.scss";

export const Cancellations: React.FC = () => {
  return (
    <div className={styles.cancellations}>
      <h2 className={styles.header}>Cancellations</h2>
      <p className={styles.text}>
        Life happens and sometimes a student plans on meeting for a session but
        then, due to circumstances outside of their control, cannot make it for
        their meeting. I fully understand this, and don't hold it against
        anyone.
      </p>
      <p className={styles.text}>
        It is expected that if the student must cancel a session they do so at
        least 24 hours in advance. If the student cancels no more than 8 hours
        before our scheduled meeting, they will be charged half the cost of said
        session, as it then becomes nearly impossible for me to fill that
        timeslot.
      </p>
      <p className={styles.text}>
        In emergency situations, I may waive this fee, but this is ultimately
        left up to my discretion and should not be relied upon.
      </p>
    </div>
  );
};
