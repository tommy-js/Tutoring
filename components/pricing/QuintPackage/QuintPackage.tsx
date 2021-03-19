import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const five = require("../../../public/one_free.png");

export const QuintPackage: React.FC = () => {
  return (
    <div className={styles.quint_package}>
      <div className={styles.image_block}>
        <img src={five} className={styles.image} />
      </div>
      <div className={styles.text}>
        <h3 className={styles.header}>
          5 Sessions - <span className={styles.cost}>$160</span>
        </h3>
        <p className={styles.subheader}>
          Sign up for four standard one hour sessions and get a fifth session
          free!
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
