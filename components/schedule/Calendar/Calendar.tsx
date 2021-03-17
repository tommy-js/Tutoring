import React from "react";
import styles from "./styles.module.scss";

export const Calendar: React.FC = () => {
  return (
    <div className={styles.calendar}>
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=21832607"
        title="Schedule Appointment"
        width="100%"
        height="1400"
        frameBorder="0"
      ></iframe>
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </div>
  );
};
