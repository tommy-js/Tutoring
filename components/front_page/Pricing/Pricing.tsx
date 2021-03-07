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
          <a className={styles.link}>$40 per hour</a>
        </Link>{" "}
        with a discounted price of{" "}
        <Link href="/pricing">
          <a className={styles.link}>$20 per hour for the first session</a>
        </Link>
        . My standard sessions are an hour long, though I am happy to work with
        you if you need longer or shorter time blocks!
      </p>
      <p className={styles.text}>
        Currently, I have sessions available from noon until 7PM on every day
        except Sunday, so please{" "}
        <Link href="/schedule">
          <a className={styles.link}>sign up</a>
        </Link>{" "}
        or
        <Link href="/contact">
          <a className={styles.link}> reach out</a>
        </Link>{" "}
        if you're interested.
      </p>
      <p className={styles.text}>
        Want to meet me or discuss tutoring goals before committing to a
        session?{" "}
        <Link href="/schedule">
          <a className={styles.link}>Schedule a free 10-minute consultation</a>
        </Link>{" "}
        today!
      </p>
    </div>
  );
};
