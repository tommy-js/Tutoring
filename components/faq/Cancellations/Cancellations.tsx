import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const arrow = require("../../../public/arrow.png");

export const Cancellations: React.FC = () => {
  const [droppedDown, setDroppedDown] = useState(false);
  const [droppedHeight, setDroppedHeight] = useState("0px");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (droppedDown === true) {
      setDroppedHeight("400px");
      setRotation(180);
    } else {
      setRotation(0);
      setDroppedHeight("0px");
    }
  }, [droppedDown]);

  return (
    <div className={styles.cancellations}>
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
        <h2 className={styles.header}>
          What should I do if I need to cancel my session?
        </h2>
      </div>
      <div className={styles.dropdown} style={{ maxHeight: droppedHeight }}>
        <p className={styles.text}>
          No worries! Just let me know that you need to cancel at least a full
          day ahead of time. This helps me find another student to fill your
          spot, which allows me to make the money I need to keep doing what I
          love. If an emergency comes up and you need to cancel sooner, please
          give me a call when you have a moment so that I know not to wait on
          you.
        </p>
      </div>
    </div>
  );
};
