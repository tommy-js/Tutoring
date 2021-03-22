import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const arrow = require("../../../public/arrow.png");

export const WhyMe: React.FC = () => {
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
    <div className={styles.why_me}>
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
          Why should I choose you over the other options?
        </h2>
      </div>

      <div className={styles.dropdown} style={{ maxHeight: droppedHeight }}>
        <p className={styles.text}>
          While it's true that there is no shortage of online tutors available,
          the quality you get varies tremendously. Some people tutor solely for
          financial gain, while others are doing it so they can put something on
          their resume. For me, teaching is my greatest passion. Working with a
          student until a topic finally clicks brings me so much joy.
        </p>
        <p className={styles.text}>
          You should choose to work with me because I believe that tutoring is
          my calling in life, and so you can be sure that you'll be getting 100%
          of my effort in every session.
        </p>
      </div>
    </div>
  );
};
