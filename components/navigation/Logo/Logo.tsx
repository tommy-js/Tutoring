import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const logo = require("../../../public/navbar_logo.jpg");

export const Logo: React.FC = () => {
  const [width, setWidth] = useState("0");
  return (
    <div className={styles.logo}>
      <Link href="/" passHref>
        <a
          className={styles.link}
          onMouseOver={() => setWidth("185px")}
          onMouseOut={() => setWidth("0")}
        >
          <div className={styles.home_link}>
            <div className={styles.image_container}>
              <img
                src={logo}
                className={styles.image}
                alt="company logo to be used as a link back to the homescreen"
              />
            </div>
            <div className={styles.header_container}>
              <p style={{ width }} className={styles.header}>
                Functional Tutoring
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
