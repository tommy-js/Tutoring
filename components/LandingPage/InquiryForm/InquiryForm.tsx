import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./styles.module.scss";

export const InquiryForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xpzkqalq");
  if (state.succeeded) {
    return <p>We'll get back to you soon!</p>;
  }
  return (
    <div className={styles.inquiry_form}>
      <h3 className={styles.form_header}>
        Submit your information below to get in touch about your first session
      </h3>
      <div className={styles.inquiry_block}>
        <form onSubmit={handleSubmit}>
          <div className={styles.email_container}>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className={styles.email_input}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className={styles.name_container}>
            <input
              id="name"
              type="name"
              name="name"
              placeholder="Name"
              className={styles.name_input}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <input
            id="subject"
            type="subject"
            name="subject"
            placeholder="Subject"
            className={styles.subject_input}
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
          <textarea
            id="message"
            name="message"
            placeholder="[Optional]Questions, comments, etc."
            className={styles.text_field}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className={styles.button}
          >
            Get In Touch
          </button>
        </form>
      </div>
    </div>
  );
};
