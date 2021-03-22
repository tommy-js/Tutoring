import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const arrow = require("../../../public/arrow.png");

export const Access: React.FC = () => {
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
    <div className={styles.access}>
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
          How do I get access to your practice problems and documents?
        </h2>
      </div>

      <div className={styles.dropdown} style={{ maxHeight: droppedHeight }}>
        <p className={styles.text}>
          Everyone has access to these practice problems and documents for free.
          Just go to{" "}
          <Link href="/materials">
            <a className={styles.link}>our library</a>
          </Link>{" "}
          and get started!
        </p>
      </div>
    </div>
  );
};
