import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const one = require("../../../public/one.png");

export const SinglePackage: React.FC = () => {
  return (
    <div className={styles.single_package}>
      <div className={styles.image_block}>
        <img src={one} className={styles.image} />
      </div>
      <div className={styles.text}>
        <h3 className={styles.header}>
          Single Session - <span className={styles.cost}>$40</span>
        </h3>
        <p className={styles.subheader}>One hour session for $40</p>
      </div>
      <div className={styles.button_container}>
        <Link href="/schedule">
          <button className={styles.purchase}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};
