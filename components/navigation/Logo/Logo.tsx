import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const logo = require("../../../public/logo.png");

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Link href="/" passHref>
        <HomeLink />
      </Link>
    </div>
  );
};

const HomeLink = React.forwardRef(({ onClick, href }, ref) => {
  const [width, setWidth] = useState("0");

  return (
    <a
      className={styles.link}
      href={href}
      onClick={onClick}
      ref={ref}
      onMouseOver={() => setWidth("175px")}
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
  );
});
