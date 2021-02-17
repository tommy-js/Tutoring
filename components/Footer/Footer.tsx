import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const fbook = require("../../public/fbook.png");
const twit = require("../../public/twit.png");
const call_us = require("../../public/call_us.png");
const linkedin = require("../../public/linkedin.png");

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.center_block}>
        <Link href="https://www.facebook.com/FunctionalTutoring">
          <div className={styles.image_block}>
            <img src={fbook} className={styles.image} />
          </div>
        </Link>
        <Link href="https://twitter.com/FunctionalTuto1">
          <div className={styles.image_block}>
            <img src={twit} className={styles.image} />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/company/functional-tutoring/about">
          <div className={styles.image_block}>
            <img src={linkedin} className={styles.image} />
          </div>
        </Link>
        <Link href="/contact">
          <div className={styles.image_block}>
            <img src={call_us} className={styles.image} />
          </div>
        </Link>
      </div>
      <div className={styles.header_box}>
        <h2 className={styles.header}>Functional Tutoring</h2>
      </div>
    </div>
  );
};
