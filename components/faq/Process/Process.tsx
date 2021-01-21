import React from "react";
import styles from "./styles.module.scss";

export const Process: React.FC = () => {
  return (
    <div className={styles.process}>
      <h2 className={styles.header}>What happens after I sign up?</h2>
      <p className={styles.text}>
        So you've signed up for a session and are wondering what happens now.
        Below are listed the order of events leading up to and after your
        session:
      </p>
      <ol>
        <li>
          Right after signing up for a session you will receive a text/email
          confirming your time and date.
        </li>
        <li>
          The day before your session you'll receive another notification,
          simply reminding you of your time.
        </li>
        <li>
          An hour before your session you will receive a text/email with a link
          to your online meeting-room.
        </li>
        <li>
          At the time of your session or slightly before, you will click this
          link and your session will begin.
        </li>
        <li>
          Directly after your session you will receive an invoice for the
          payment owed.
        </li>
      </ol>
    </div>
  );
};
