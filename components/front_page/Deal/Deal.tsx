import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const deal = require("../../../public/one_free.png");

export const Deal: React.FC = () => {
  return (
    <div className={styles.deal_container}>
      <div className={styles.deal}>
        <div className={styles.image_block}>
          <img className={styles.image} src={deal} />
        </div>
        <div className={styles.text_block}>
          <p className={styles.text}>New Clients Get a Session Free</p>
        </div>
        <div className={styles.save_button}>
          <Link href="/schedule">
            <button className={styles.button}>Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
