import React from "react";
import styles from "./styles.module.scss";

export const Pricing: React.FC = () => {
  return (
    <div className={styles.pricing}>
      <h1 className={styles.header}>Pricing & Availability</h1>
      <p className={styles.text}>
        My current rate is <span className={styles.flair}>$30 per hour</span>{" "}
        with a discounted price of{" "}
        <span className={styles.flair}>$15 for the first session</span>. My
        standard sessions are an hour long, though I am more than happy to work
        with you if you need longer or shorter time blocks!
      </p>
      <p className={styles.text}>
        Currently, I have sessions available during many times throughout the
        week and weekends, so please reach out if you're interested.
      </p>
    </div>
  );
};
