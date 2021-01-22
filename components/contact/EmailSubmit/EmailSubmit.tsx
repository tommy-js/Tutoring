import React from "react";
import styles from "./styles.module.scss";

export const EmailSubmit: React.FC = () => {
  return (
    <div className={styles.email_submit}>
      <input
        className={styles.email_box}
        type="text"
        required
        placeholder="Email*"
      />
      <textarea className={styles.subject_box} placeholder="Subject" />
      <button className={styles.submit_button}>Submit</button>
    </div>
  );
};
