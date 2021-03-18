import React from "react";
import Link from "next/link";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

export const Regents: React.FC = () => {
  return (
    <div className={styles.regents}>
      <h1 className={styles.header}>Regents Prep</h1>
      <h3 className={styles.link_flair}>
        Need extra help?{" "}
        <Link href="/schedule">
          <span className={styles.link}>Sign up for tutoring</span>
        </Link>
      </h3>
      <h2 className={styles.subheader}>
        Prepare for the New York State Regents exam!
      </h2>
      <p className={styles.flair}>
        Sorry, we haven't added anything to our geometry course just yet!
      </p>
    </div>
  );
};
