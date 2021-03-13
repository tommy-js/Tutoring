import React from "react";
import styles from "./styles.module.scss";

export const PaymentTimeframe: React.FC = () => {
  return (
    <div className={styles.payment_timeframe}>
      <h2 className={styles.header}>Payment Timeframe</h2>
      <p className={styles.text}>
        It is expected that the student pay all fees within 30 days of them
        being invoiced. Failure to do so will result in the inability to sign up
        for further tutoring, and may require future payments to be made prior
        to meeting.
      </p>
    </div>
  );
};
