import React from "react";
import { Email } from "../Email/Email";
import { Phone } from "../Phone/Phone";
import { EmailSubmit } from "../EmailSubmit/EmailSubmit";
import styles from "./styles.module.scss";

export const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.header}>Contact Me</h2>
      <h2 className={styles.subheader}>
        It is recommended that you use the scheduler from the previous page to
        set up your tutoring session. However, if you need/want to talk to me
        directly, feel free to call or send an email below.
      </h2>
      <Email />
      <Phone />
    </div>
  );
};
