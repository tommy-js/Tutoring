import React from "react";
import Link from "next/link";
import { Email } from "../../contact/Email/Email";
import styles from "./styles.module.scss";

export const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.header}>Contact Me</h2>
      <p>Currently, the best way to contact me is through email:</p>
      <Email />
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
