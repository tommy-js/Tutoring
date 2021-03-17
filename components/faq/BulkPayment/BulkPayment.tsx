import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const BulkPayment: React.FC = () => {
  return (
    <div className={styles.bulk_payment}>
      <h2 className={styles.header}>Can I purchase sessions in bulk?</h2>
      <p className={styles.text}>
        Yes! In fact, if you purchase more than 3 sessions at a time you'll
        receive 15% off the total cost of your sessions.{" "}
        <Link href="/contact">
          <a className={styles.link}>Contact me if interested</a>
        </Link>
        . I like to encourage this because it makes meeting easier for both of
        us: then all you need to do is come to your session, rather than sign up
        each time.
      </p>
    </div>
  );
};
