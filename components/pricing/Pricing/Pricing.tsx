import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Pricing: React.FC = () => {
  return (
    <div className={styles.pricing}>
      <h1 className={styles.header}>Pricing</h1>
      <div className={styles.pricing_container}>
        <p className={styles.text}>Single session: $30 per hour</p>
        <p className={styles.subtext}>Sessions typically go for one hour</p>
      </div>
      <div className={styles.pricing_container}>
        <p className={styles.text}>10 minute consulation: free</p>
        <p className={styles.subtext}>
          Meet me and discuss your goals for tutoring, how often you plan on
          meeting with me, etc. Note that this is only available to first-time
          students.
        </p>
      </div>
      <div className={styles.pricing_container}>
        <p className={styles.text}>Bulk sessions: $25.50 per hour</p>
        <p className={styles.subtext}>
          Save 15% when you sign up for 3 or more sessions in advance. Note that
          the cost must be paid before meeting.
        </p>
      </div>
      <div className={styles.pricing_container}>
        <p className={styles.text}>Pre-pay: $28.50 per hour</p>
        <p className={styles.subtext}>
          5% discount if you pay before the session
        </p>
      </div>
      <h2 className={styles.subheader}>Discounts & Rewards</h2>
      <div className={styles.pricing_container}>
        <p className={styles.text}>First session: $15 per hour</p>
        <p className={styles.subtext}>
          Save 50% on your first meeting with me!
        </p>
      </div>
      <div className={styles.pricing_container}>
        <p className={styles.text}>Refer a friend: $27 per hour</p>
        <p className={styles.subtext}>
          10% discount on both parties' next session for referring someone to me
        </p>
      </div>
      <div className={styles.pricing_container}>
        <p className={styles.text}>Leave a review: $24 per hour</p>
        <p className={styles.subtext}>
          20% off the cost of your next session for leaving a review
        </p>
      </div>
      <Link href="/schedule">
        <a className={styles.link}>Sign up for a session</a>
      </Link>
    </div>
  );
};
