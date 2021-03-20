import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const deal = require("../../../public/discount.png");

export const Deal: React.FC = () => {
  return (
    <div className={styles.deal}>
      <div className={styles.image_block}>
        <img className={styles.image} src={deal} />
      </div>
      <div className={styles.text_block}>
        <p className={styles.text}>New Clients Save $10!</p>
      </div>
      <div className={styles.save_button}>
        <Link href="/schedule">
          <button className={styles.button}>Book & Save</button>
        </Link>
      </div>
    </div>
  );
};
