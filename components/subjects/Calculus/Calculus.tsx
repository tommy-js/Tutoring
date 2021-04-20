import React from "react";
import ReactPlayer from "react-player";
import { OurTeam } from "../../front_page/OurTeam/OurTeam";
import { SignUpEmailForm } from "../../blog/posts/daily_posts/SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";

export const Calculus: React.FC = () => {
  return (
    <div className={styles.calculus}>
      <h1 className={styles.header}>Calculus</h1>
      <h2 className={styles.subheader}>
        What does it mean to get calculus tutoring from us?
      </h2>
      <div className={styles.descriptor}>
        <p className={styles.text}>
          Calculus I is the study of instantaneous rate of change, and is
          typically the first higher-level math class a student takes upon
          entering college. While many people often find it quite challenging,
          ultimately its basics are quite simple. We would love to help you
          better understand its topics and materials!
        </p>
      </div>
      <div className={styles.topics}>
        <h3 className={styles.subject_header}>Some Topics Covered</h3>
        <ul className={styles.list}>
          <li>Instantaneous rate of change</li>
          <li>Derivatives</li>
          <li>Limits</li>
          <li>Antiderivatives</li>
          <li>Discontinuities and continuity of a graph</li>
          <li>L'Hospital's Rule</li>
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
          url="https://youtu.be/ANUESSEGBug"
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
