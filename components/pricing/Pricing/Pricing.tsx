import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Pricing: React.FC = () => {
  return (
    <div className={styles.pricing}>
      <h1 className={styles.header}>Pricing</h1>
      <div className={styles.pricing_container}>
        <p className={styles.text}>Single session: $40 per hour</p>
        <p className={styles.subtext}>Sessions typically go for one hour</p>
        <p className={styles.subtext}>Get 50% off your first session!</p>
      </div>
      <div className={styles.pricing_container}>
        <p className={styles.text}>10 minute consulation: free</p>
        <p className={styles.subtext}>
          Meet me and discuss your goals for tutoring, how often you plan on
          meeting with me, etc. Note that this is only available to first-time
          students.
        </p>
      </div>
      <h2 className={styles.subheader}>Discounts & Rewards</h2>
      <div className={styles.pricing_container}>
        <p className={styles.text}>Bulk sessions: $34 per hour</p>
        <p className={styles.subtext}>
          Save 15% when you sign up for 3 or more sessions in advance. Note that
          the cost must be paid before meeting.
        </p>
      </div>
      <div className={styles.pricing_container}>
        <p className={styles.text}>Pre-pay: $38 per hour</p>
        <p className={styles.subtext}>
          5% discount if you pay before the session
        </p>
      </div>
      <Link href="/schedule">
        <a className={styles.link}>Sign up for a session</a>
      </Link>
    </div>
  );
};
