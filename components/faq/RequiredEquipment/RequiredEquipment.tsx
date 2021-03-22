import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const e_learning = require("../../../public/e_learning.png");
const pencil = require("../../../public/pencil.png");
const webcam = require("../../../public/webcam.png");
const wifi = require("../../../public/wifi.png");
const arrow = require("../../../public/arrow.png");

export const RequiredEquipment: React.FC = () => {
  const [droppedDown, setDroppedDown] = useState(false);
  const [droppedHeight, setDroppedHeight] = useState("0px");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (droppedDown === true) {
      setDroppedHeight("500px");
      setRotation(180);
    } else {
      setRotation(0);
      setDroppedHeight("0px");
    }
  }, [droppedDown]);

  return (
    <div className={styles.required_equipment}>
      <div
        className={styles.upper}
        onClick={() => setDroppedDown(!droppedDown)}
      >
        <div className={styles.dropdown_icon}>
          <img
            src={arrow}
            className={styles.icon}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>
        <h2 className={styles.header}>What do I need for my session?</h2>
      </div>

      <div className={styles.dropdown} style={{ maxHeight: droppedHeight }}>
        <p className={styles.text}>
          Online tutoring with me is super easy. You only need a few things for
          your session:
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
          <div className={styles.text_container}>A pencil and some paper</div>
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
    </div>
  );
};
