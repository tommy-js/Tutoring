import React from "react";
import { Email } from "../Email/Email";
import { Phone } from "../Phone/Phone";
import { ContactForm } from "../ContactForm/ContactForm";
import { Footer } from "../../Footer/Footer";
import styles from "./styles.module.scss";

export const Contact: React.FC = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.contact}>
        <h2 className={styles.header}>Contact Me</h2>
        <h2 className={styles.subheader}>
          Feel free to email or call me using any of the methods listed below.
        </h2>
        <Email />
        <Phone />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};
