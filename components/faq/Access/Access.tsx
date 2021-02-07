import React from "react";
import styles from "./styles.module.scss";

export const Access: React.FC = () => {
  return (
    <div>
      <h2 className={styles.header}>
        How do I get access to your practice problems and documents?
      </h2>
      <p className={styles.text}>
        Every student of mine will be given access to my library as soon as they
        pay for a lesson. In order to retain access, you'll need to purchase on
        session per month(roughly three per semester). I believe this is more
        than fair. If you'd like to retain access but don't need tutoring,
        contact me and we may be able to work something out.
      </p>
      <p className={styles.text}>
        I am considering an inexpensive subscription service further down the
        line, but for now this is how Functional Tutoring operates.
      </p>
    </div>
  );
};
