import React from "react";
import Link from "next/link";
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
      <p>
        Feel free to fill out our{" "}
        <Link href="https://us7.list-manage.com/contact-form?u=7849af733b1b543ebd1755511&form_id=78f0d437a6cb2e17161767d29543c28d">
          <a className={styles.link}>Contact form</a>
        </Link>
        , as well
      </p>
    </div>
  );
};
