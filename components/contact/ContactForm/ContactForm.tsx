import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./styles.module.scss";

function ReturnedForm() {
  const [state, handleSubmit] = useForm("mdopqqpg");
  if (state.succeeded) {
    return <p>Thanks for your submission! We'll get back to you soon.</p>;
  }
  return (
    <div className={styles.contact_form}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.header}>What's on your mind?</h2>
        <input
          className={styles.email_input}
          id="email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className={styles.textbox}
          id="message"
          name="message"
          placeholder="Your message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className={styles.button}
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export const ContactForm: React.FC = () => {
  return <ReturnedForm />;
};
