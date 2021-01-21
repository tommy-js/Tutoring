import React from "react";
import { Email } from "../Email/Email";
import { Phone } from "../Phone/Phone";
import { EmailSubmit } from "../EmailSubmit/EmailSubmit";
import styles from "./styles.module.scss";

export const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.header}>Schedule Your Session!</h1>
      <h2 className={styles.subheader}>
        Contact me by any of the following to schedule your tutoring session
      </h2>
      <Email />
      <Phone />
      <EmailSubmit />
    </div>
  );
};
