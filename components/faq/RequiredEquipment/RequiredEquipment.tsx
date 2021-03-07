import React from "react";
import styles from "./styles.module.scss";

const e_learning = require("../../../public/e_learning.png");
const pencil = require("../../../public/pencil.png");
const webcam = require("../../../public/webcam.png");
const wifi = require("../../../public/wifi.png");

export const RequiredEquipment: React.FC = () => {
  return (
    <div className={styles.required_equipment}>
      <h2 className={styles.header}>What do I need for my session?</h2>
      <p className={styles.text}>
        You only need a few things for your tutoring session:
      </p>
      <div className={styles.payment_info_block}>
        <div className={styles.image_block}>
          <img src={webcam} className={styles.image} />
        </div>
        <div className={styles.text_container}>A webcam and microphone</div>
      </div>
      <div className={styles.payment_info_block}>
        <div className={styles.image_block}>
          <img src={e_learning} className={styles.image} />
        </div>
        <div className={styles.text_container}>
          A quiet location where our full attention can be devoted to the work
        </div>
      </div>
      <div className={styles.payment_info_block}>
        <div className={styles.image_block}>
          <img src={pencil} className={styles.image} />
        </div>
        <div className={styles.text_container}>A pen and some paper</div>
      </div>
      <div className={styles.payment_info_block}>
        <div className={styles.image_block}>
          <img src={wifi} className={styles.image} />
        </div>
        <div className={styles.text_container}>
          A good, reliable internet connection
        </div>
      </div>
    </div>
  );
};
