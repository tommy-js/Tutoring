import React from "react";
import { Email } from "../../schedule/Email/Email";
import { Phone } from "../../schedule/Phone/Phone";
import { EmailSubmit } from "../../schedule/EmailSubmit/EmailSubmit";
import styles from "./styles.module.scss";

export const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.header}>Contact Me</h2>
      <h3 className={styles.subheader}>
        It is recommended that you use the scheduler from the previous page to
        set up your tutoring session. However, if you need/want to talk to me
        directly, feel free to call or send an email below.
      </h3>
      <Email />
      <Phone />
      <EmailSubmit />
    </div>
  );
};
