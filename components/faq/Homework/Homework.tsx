import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const arrow = require("../../../public/arrow.png");

export const Homework: React.FC = () => {
  const [droppedDown, setDroppedDown] = useState(false);
  const [droppedHeight, setDroppedHeight] = useState("0px");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (droppedDown === true) {
      setDroppedHeight("310px");
      setRotation(180);
    } else {
      setRotation(0);
      setDroppedHeight("0px");
    }
  }, [droppedDown]);

  return (
    <div className={styles.homework}>
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
        <h2 className={styles.header}>Will you do my homework for me?</h2>
      </div>
      <div className={styles.dropdown} style={{ maxHeight: droppedHeight }}>
        <p className={styles.text}>
          I will gladly walk you through similar problems to the ones on your
          homework. I will not, however, do your homework for you. The most
          important thing for me is that you properly understand the material.
        </p>
      </div>
    </div>
  );
};
