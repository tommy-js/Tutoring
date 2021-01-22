import React from "react";
import styles from "./styles.module.scss";

export const BulkPayment: React.FC = () => {
  return (
    <div className={styles.bulk_payment}>
      <h2 className={styles.header}>Can I purchase sessions in bulk?</h2>
      <p className={styles.text}>
        Yes! In fact, if you purchase more than 3 sessions at a time you'll
        receive 15% off the total cost of your sessions. However, you must pay
        in advance if you choose to do this.
      </p>
    </div>
  );
};
