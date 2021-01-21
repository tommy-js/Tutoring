import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Pricing: React.FC = () => {
  return (
    <div className={styles.pricing}>
      <h1 className={styles.header}>Pricing</h1>
      <div className={styles.pricing_container}>
        <p className={styles.text}>Single session: $30 per hour</p>
      </div>
      <div className={styles.pricing_container}>
        <p className={styles.text}>Bulk sessions*: $24 per hour</p>
        <p className={styles.subtext}>3 or more sessions</p>
      </div>
      <div className={styles.pricing_container}>
        <p className={styles.text}>Prepay*: $27 per hour</p>
        <p className={styles.subtext}>
          10% discount if you pay before the session
        </p>
      </div>
      <h2 className={styles.subheader}>Discounts & Rewards</h2>
      <div className={styles.pricing_container}>
        <p className={styles.text}>Refer a friend*: $27 per hour</p>
        <p className={styles.subtext}>
          10% discount on both parties' next session for referring someone to me
        </p>
      </div>
      <div className={styles.pricing_container}>
        <p className={styles.text}>Leave a review*: $24 per hour</p>
        <p className={styles.subtext}>
          20% on your next session for leaving a review
        </p>
      </div>
      <Link href="/schedule">
        <a>Sign up for a session</a>
      </Link>
    </div>
  );
};
