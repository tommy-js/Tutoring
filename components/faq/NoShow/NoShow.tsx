import React from "react";
import styles from "./styles.module.scss";

export const NoShow: React.FC = () => {
  return (
    <div className={styles.no_show}>
      <h2 className={styles.header}>
        What happens if I don't show up for my session?
      </h2>
      <p className={styles.text}>
        As per my late policy, not showing up to the session will result in the
        full price being charged. In order to reschedule their session, the
        student must pay this fee in full.
      </p>
    </div>
  );
};
