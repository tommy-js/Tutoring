import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const three = require("../../../public/discount.png");

export const TriplePackage: React.FC = () => {
  return (
    <div className={styles.triple_package}>
      <div className={styles.image_block}>
        <img src={three} className={styles.image} />
      </div>
      <div className={styles.text}>
        <h3 className={styles.header}>
          3 Sessions - <span className={styles.cost}>$100</span>
        </h3>
        <p className={styles.subheader}>
          Save $20 when you sign up for three standard one hour sessions!
        </p>
      </div>
      <div className={styles.button_container}>
        <Link href="/contact">
          <button className={styles.purchase}>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};
