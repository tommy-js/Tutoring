import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Pricing: React.FC = () => {
  return (
    <div className={styles.pricing}>
      <h1 className={styles.header}>Pricing & Availability</h1>
      <p className={styles.text}>
        I'm building Functional Tutoring to help provide high-quality tutoring
        to everyone, so we operate on a sliding scale payment system. For your
        first session, you'll pay{" "}
        <Link href="/pricing">
          <a className={styles.link}>$20 per hour</a>
        </Link>
        , after which we'll decide on a reasonable rate.
      </p>
      <p className={styles.text}>
        Currently, I have sessions available from noon until 7PM on every day
        except Sunday.
      </p>
      <p className={styles.text}>
        Want to meet me or discuss tutoring goals before committing to a
        session?{" "}
        <Link href="/contact">
          <a className={styles.link}>Reach out before signing up.</a>
        </Link>
      </p>
    </div>
  );
};
