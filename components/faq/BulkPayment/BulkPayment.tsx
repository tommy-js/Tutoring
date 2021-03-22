import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const arrow = require("../../../public/arrow.png");

export const BulkPayment: React.FC = () => {
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
    <div className={styles.bulk_payment}>
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
        <h2 className={styles.header}>Can I purchase sessions in bulk?</h2>
      </div>

      <div className={styles.dropdown} style={{ maxHeight: droppedHeight }}>
        <p className={styles.text}>
          Yes! In fact, if you purchase more than 3 sessions at a time you'll
          receive 15% off the total cost of your sessions.{" "}
          <Link href="/contact">
            <a className={styles.link}>Contact me if interested</a>
          </Link>
          . I like to encourage this because it makes meeting easier for both of
          us: then all you need to do is come to your session, rather than sign
          up each time.
        </p>
      </div>
    </div>
  );
};
