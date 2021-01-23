import React from "react";
import styles from "./styles.module.scss";

export const FailureToPay: React.FC = () => {
  return (
    <div className={styles.failure_to_pay}>
      <h2 className={styles.header}>Failure to Pay</h2>
      <p className={styles.text}>
        I rely on offering tutoring services for my income, so the student
        failing to pay for services rendered directly effects me. In the event
        that the student fails to pay the agreed upon amount, they will be
        unable to sign up for another session until they do. I may also take
        further action if the owed amount is large enough.
      </p>
    </div>
  );
};
