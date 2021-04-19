import React from "react";
import ReactPlayer from "react-player";
import { OurTeam } from "../../front_page/OurTeam/OurTeam";
import { SignUpEmailForm } from "../../blog/posts/daily_posts/SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";

export const Algebra: React.FC = () => {
  return (
    <div className={styles.algebra}>
      <h1 className={styles.header}>Algebra I</h1>
      <h2 className={styles.subheader}>
        What does it mean to get algebra I tutoring from us?
      </h2>
      <div className={styles.descriptor}>
        <p className={styles.text}>
          Algebra is usually split up into two courses: algebra I and algebra
          II. At Functional Tutoring we offer help with both. In algebra I
          topics covered include factoring, graphing, solving for roots, and
          more!
        </p>
      </div>
      <div className={styles.topics}>
        <h3 className={styles.subject_header}>Topics Covered</h3>
        <ul className={styles.list}>
          <li>Rationalizing the denominator</li>
          <li>Taking squares & square roots</li>
          <li>Solving equations</li>
          <li>Taking the absolute value</li>
          <li>Graphing and graph properties</li>
          <li>Dividing by zero</li>
          <li>Factoring</li>
          <li>Solving word problems</li>
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
          url="https://youtu.be/lapR4wv7zW8"
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
