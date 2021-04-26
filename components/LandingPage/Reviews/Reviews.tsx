import React from "react";
import styles from "./styles.module.scss";

const full_star = require("../../../public/star.png");
const half_star = require("../../../public/half_star.png");

export const Reviews: React.FC = () => {
  return (
    <div className={styles.reviews}>
      <h2 className={styles.header}>What people are saying about us</h2>
      <div className={styles.score_card}>
        <p className={styles.score_text}>4.3/5 Overall Rating</p>
        <div className={styles.score_stars}>
          <div className={styles.star_img}>
            <img src={full_star} className={styles.img} />
          </div>
          <div className={styles.star_img}>
            <img src={full_star} className={styles.img} />
          </div>
          <div className={styles.star_img}>
            <img src={full_star} className={styles.img} />
          </div>
          <div className={styles.star_img}>
            <img src={full_star} className={styles.img} />
          </div>
          <div className={styles.star_img}>
            <img src={half_star} className={styles.img} />
          </div>
        </div>
      </div>
      <div className={styles.review_blocks}>
        <div className={styles.left_block}>
          <div className={styles.review}>
            <p className={styles.name}>Mary S.</p>
            <p className={styles.review_text}>
              I tried a couple of tutoring services before I found Functional
              Tutoring. Without Tyler I wouldn't have passed my precalculus
              class.
            </p>
          </div>
        </div>
        <div className={styles.right_block}>
          <div className={styles.review}>
            <p className={styles.name}>James T.</p>
            <p className={styles.review_text}>
              My son needed help with his algebra class, but wasn't having luck
              with the tutors me and my wife gave him sessions with. Luckily he
              related to Tyler really well, and ended up passing the class. We
              will definitely use his service in the future.
            </p>
          </div>
        </div>
        <div className={styles.left_block}>
          <div className={styles.review}>
            <p className={styles.name}>Luke F.</p>
            <p className={styles.review_text}>
              I'm so happy to have found Functional Tutoring! With Tyler's help
              I did well enough on the SAT to get into my top college.
            </p>
          </div>
        </div>
        <div className={styles.right_block}>
          <div className={styles.review}>
            <p className={styles.name}>Lisa S.</p>
            <p className={styles.review_text}></p>
          </div>
        </div>
      </div>
    </div>
  );
};
