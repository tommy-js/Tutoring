import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./styles.module.scss";

export const EmailSignup = () => {
  const [state, handleSubmit] = useForm("xdoynqbd");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className={styles.sign_up_email_form}>
      <h1 className={styles.header}>Sign up for Our Email List</h1>
      <h2 className={styles.subheader}>Get deals and updates</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          className={styles.email}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          id="message"
          name="personal-name"
          placeholder="name"
          className={styles.name}
        />
        <ValidationError
          prefix="Name"
          field="personal-name"
          errors={state.errors}
        />
        <button
          type="submit"
          className={styles.button}
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
