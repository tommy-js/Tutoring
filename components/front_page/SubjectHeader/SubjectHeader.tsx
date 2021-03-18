import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const header = require("../../../public/header.jpg");

export const SubjectHeader: React.FC = () => {
  return (
    <div className={styles.subject_header}>
      <div className={styles.image_block}>
        <div className={styles.header}>
          <p className={styles.header_text}>Functional Tutoring</p>
          <p className={styles.header_subtext}>
            Personalized 1-on-1 online math tutoring
          </p>
          <div className={styles.button_block}>
            <div className={styles.inner_button_container}>
              <div className={styles.left_button}>
                <Link href="/contact">
                  <button className={styles.contact_button}>Contact Us</button>
                </Link>
              </div>
              <div className={styles.right_button}>
                <Link href="/schedule">
                  <button className={styles.book_now_button}>Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src={header} className={styles.image} />
        <div className={styles.drop_header}></div>
      </div>
    </div>
  );
};
