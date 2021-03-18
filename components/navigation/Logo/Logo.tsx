import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const logo = require("../../../public/navbar_logo.jpg");

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Link href="/" passHref>
        <a className={styles.link}>
          <div className={styles.home_link}>
            <div className={styles.image_container}>
              <img
                src={logo}
                className={styles.image}
                alt="company logo to be used as a link back to the homescreen"
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
