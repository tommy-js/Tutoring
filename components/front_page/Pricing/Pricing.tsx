import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Pricing: React.FC = () => {
  return (
    <div className={styles.pricing}>
      <h1 className={styles.header}>Pricing & Availability</h1>
      <p className={styles.text}>
        My current rate is{" "}
        <Link href="/pricing">
          <span className={styles.flair}>$30 per hour</span>
        </Link>{" "}
        with a discounted price of{" "}
        <Link href="/pricing">
          <span className={styles.flair}>$15 for the first session</span>
        </Link>
        . My standard sessions are an hour long, though I am more than happy to
        work with you if you need longer or shorter time blocks!
      </p>
      <p className={styles.text}>
        Currently, I have sessions available during many times throughout the
        week and weekends, so please <Link href="/schedule">sign up</Link> or
        <Link href="/contact"> reach out</Link> if you're interested.
      </p>
      <p className={styles.text}>
        Want to meet me or discuss tutoring goals before committing to a
        session?{" "}
        <Link href="/schedule">Schedule a free 10-minute consultation</Link>{" "}
        today!
      </p>
    </div>
  );
};
