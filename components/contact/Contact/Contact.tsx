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
        <ContactForm />
        <Phone />
      </div>
      <Footer />
    </div>
  );
};
