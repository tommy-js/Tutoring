import React from "react";
import styles from "./styles.module.scss";

export const Process: React.FC = () => {
  return (
    <div className={styles.process}>
      <h2 className={styles.header}>What happens after I sign up?</h2>
      <p className={styles.text}>
        So you've signed up for a session and are wondering what happens now.
        Fortunately, we make getting quality tutoring super easy. Here's what
        happens once you sign up:
      </p>
      <ol className={styles.text}>
        <li>
          Right after signing up for a session you will receive a text/email
          confirming your time and date, and containing the link you'll need to
          meet me.
        </li>
        <li>
          An hour before your session you will receive a text/email with a
          reminder for your session.
        </li>
        <li>We'll meet and have our session</li>
        <li>
          After the session, I'll send you an invoice to pay at your leisure
        </li>
      </ol>
    </div>
  );
};
