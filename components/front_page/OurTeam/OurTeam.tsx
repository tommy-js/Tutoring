import React from "react";
import styles from "./styles.module.scss";

const self_portrait = require("../../../public/image.jpg");

export const OurTeam: React.FC = () => {
  return (
    <div className={styles.our_team}>
      <h2 className={styles.header}>About Me</h2>
      <div className={styles.left_block}>
        <div className={styles.image_block}>
          <img className={styles.image} src={self_portrait} />
        </div>
      </div>
      <div className={styles.right_block}>
        <h3 className={styles.name}>Tyler Blovat</h3>
        <p className={styles.text_container}>
          I love to rock climb, learn new things, and help people become better
          math students! I'm currently in the process of learning Russian for
          personal interest, and am trying to decide what language I should
          learn next. For now it's just me at Functional Tutoring!
        </p>
      </div>
    </div>
  );
};
