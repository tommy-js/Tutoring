import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const logo = require("../../../public/logo_ultra_high_res.png");

export const Explanation: React.FC = () => {
  return (
    <div className={styles.explanation}>
      <p className={styles.text}>
        Functional Tutoring was created to help middle and high school students
        excel in their math classes.
      </p>
      <Link href="/mission">
        <div className={styles.logo_block}>
          <img src={logo} className={styles.logo} />
        </div>
      </Link>
      <p className={styles.mission}>Read our mission statement</p>
    </div>
  );
};
