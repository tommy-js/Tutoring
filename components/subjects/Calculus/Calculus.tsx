import React from "react";
import ReactPlayer from "react-player";
import { OurTeam } from "../../front_page/OurTeam/OurTeam";
import { SignUpEmailForm } from "../../blog/posts/daily_posts/SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";

export const Calculus: React.FC = () => {
  return (
    <div className={styles.calculus}>
      <h1 className={styles.header}>Arithmetic</h1>
      <h2 className={styles.subheader}>
        What does it mean to get arithmetic tutoring from us?
      </h2>
      <div className={styles.descriptor}>
        <p className={styles.text}>
          Arithmetic is the study of numbers and their properties. It's a broad
          term that refers to several math classes in elementary and early
          middle school. If you or your child are taking a class covering
          arithmetic topics, we can help! Please feel free to contact us with
          any questions you may have about pricing, availability, topics, etc.
        </p>
      </div>
      <div className={styles.topics}>
        <h3 className={styles.subject_header}>Topics Covered</h3>
        <ul className={styles.list}>
          <li>Whole numbers</li>
          <li>Addition and subtraction</li>
          <li>Division and multiplication</li>
          <li>Fractions and their properties</li>
          <li>Decimals and their properties</li>
          <li>Converting fractions to decimals and vice-versa</li>
        </ul>
      </div>
      <div className={styles.tutors_available_block}>
        <h3 className={styles.availability_header}>
          Tutors available for this subject
        </h3>
        <OurTeam />
      </div>
      <h3 className={styles.video_block_header}>Watch us explain concepts</h3>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/_TIlCGnrOSk"
          loop={false}
          playing={false}
          controls={true}
          volume={100}
          muted={false}
          width={"100%"}
          height={"100%"}
          className={styles.react_player}
        />
      </div>
      <div className={styles.email_subscribe_box}>
        <SignUpEmailForm />
      </div>
    </div>
  );
};
