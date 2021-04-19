import React from "react";
import ReactPlayer from "react-player";
import { OurTeam } from "../../front_page/OurTeam/OurTeam";
import { SignUpEmailForm } from "../../blog/posts/daily_posts/SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";

export const AlgebraII: React.FC = () => {
  return (
    <div className={styles.algebra}>
      <h1 className={styles.header}>Algebra II</h1>
      <h2 className={styles.subheader}>
        What does it mean to get algebra II tutoring from us?
      </h2>
      <div className={styles.descriptor}>
        <p className={styles.text}>
          Algebra is usually split up into two courses: algebra I and algebra
          II. At Functional Tutoring we offer help with both. Algebra II
          consists of graphing, solving equations, imaginary numbers, and more.
        </p>
      </div>
      <div className={styles.topics}>
        <h3 className={styles.subject_header}>Topics Covered</h3>
        <ul className={styles.list}>
          <li>Solving inequalities & equations</li>
          <li>Graphing functions</li>
          <li>Quadratic equations</li>
          <li>Basic trigonometry</li>
          <li>Imaginary & complex numbers</li>
          <li>Exponential and logarithmic equations</li>
          <li>Composing functions</li>
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
