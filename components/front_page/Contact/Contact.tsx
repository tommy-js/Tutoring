import React from "react";
import * as fbq from "../../FacebookPixel/fpixel";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Contact: React.FC = () => {
  function handleClick() {
    fbq.event("Contact");
  }

  return (
    <div className={styles.contact}>
      <h2 className={styles.header}>Contact Me</h2>
      <h3 className={styles.subheader}>Want to get in touch?</h3>
      <div className={styles.button_block}>
        <Link href="/contact">
          <button onClick={() => handleClick()} className={styles.button}>
            Call or Email
          </button>
        </Link>
      </div>
    </div>
  );
};
