import React from "react";

import { Email } from "../../contact/Email/Email";
import styles from "./styles.module.scss";

export const Contact: React.FC = () => {
  // return (
  //   <div className={styles.contact}>
  //     <h2 className={styles.header}>Contact Me</h2>
  //     <p className={styles.text}>
  //       Submit your information below if you would like to know more about
  //       availability, pricing, and subjects. If you have a specific question,
  //       feel free to leave it in the subject box!
  //     </p>
  //     <input
  //       className={styles.email_box}
  //       type="text"
  //       required
  //       placeholder="Email*"
  //     />
  //     <textarea className={styles.subject_box} placeholder="Subject" />
  //     <button className={styles.submit_button}>Submit</button>
  //   </div>
  // );

  return (
    <div className={styles.contact}>
      <h2 className={styles.header}>Contact Me</h2>
      <p>Currently, the best way to contact me is through email:</p>
      <Email />
    </div>
  );
};
