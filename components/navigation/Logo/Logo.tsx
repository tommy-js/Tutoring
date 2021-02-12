import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const logo = require("../../../public/alt_logo.png");

export const Logo: React.FC = () => {
  const [width, setWidth] = useState("185px");
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
              <img src={logo} className={styles.image} />
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
