import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const self_portrait = require("../../../public/image.jpg");
const clock = require("../../../public/clock.png");

export const OurTeam: React.FC = () => {
  return (
    <Link href="/tyler-blovat">
      <div className={styles.our_team}>
        <div className={styles.left_block}>
          <div className={styles.image_block}>
            <img className={styles.image} src={self_portrait} />
          </div>
          <div className={styles.profile_button}>
            <button className={styles.button}>View Tyler's Profile</button>
          </div>
        </div>
        <div className={styles.right_block}>
          <h3 className={styles.name}>Tyler Blovat</h3>
          <div className={styles.underbar}>
            <div className={styles.clock_image_container}>
              <img src={clock} className={styles.clock_image} />
            </div>
            <p className={styles.responds}>Usually responds within an hour</p>
          </div>
          <p className={styles.subscript}>
            Hi! My name is Tyler and I am a graduate of the University of
            Connecticut's math program. I have around three years of tutoring
            experience and love helping people understand difficult concepts.
            I'm also super passionate about rock climbing, language learning,
            and chess. Feel free to message me and get in touch!
          </p>
        </div>
      </div>
    </Link>
  );
};
