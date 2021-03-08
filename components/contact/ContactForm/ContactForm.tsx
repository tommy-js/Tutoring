import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const contact_form = require("../../../public/form.png");

export const ContactForm: React.FC = () => {
  return (
    <div className={styles.contact_form}>
      <div className={styles.image_block}>
        <img src={contact_form} className={styles.image} />
      </div>
      <p className={styles.text}>
        Also feel free to fill out our{" "}
        <Link href="https://us7.list-manage.com/contact-form?u=7849af733b1b543ebd1755511&form_id=78f0d437a6cb2e17161767d29543c28d">
          <a className={styles.link}>Contact form</a>
        </Link>
        .
      </p>
    </div>
  );
};
