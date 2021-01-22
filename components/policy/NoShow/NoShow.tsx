import React from "react";
import styles from "./styles.module.scss";

export const NoShow: React.FC = () => {
  return (
    <div className={styles.no_show}>
      <h2 className={styles.header}>Missed Sessions</h2>
      <p className={styles.text}>
        Failure to show up for the scheduled appointment is never acceptable; if
        you cannot make it, simply cancel ahead of time in accordance with the
        cancellation policy above. No-call, no-shows result in the full cost of
        the session being billed to you.
      </p>
      <p className={styles.text}>
        The session you schedule is <i>your</i> time, so I will be waiting on
        you to show up for the entire session if you schedule that slot.
      </p>
    </div>
  );
};
