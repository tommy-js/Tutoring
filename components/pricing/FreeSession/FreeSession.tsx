import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const five = require("../../../public/one_free.png");

export const FreeSession: React.FC = () => {
  return (
    <div className={styles.free_session}>
      <div className={styles.image_block}>
        <img src={five} className={styles.image} />
      </div>
      <div className={styles.text}>
        <h3 className={styles.header}>
          First Session - <span className={styles.cost}>$0</span>
        </h3>
        <p className={styles.subheader}>
          New clients get their first session for free, with no commitment
          necessary.
        </p>
      </div>
      <div className={styles.button_container}>
        <Link href="/schedule">
          <button className={styles.purchase}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};
