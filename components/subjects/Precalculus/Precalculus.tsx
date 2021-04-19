import React from "react";
import ReactPlayer from "react-player";
import { OurTeam } from "../../front_page/OurTeam/OurTeam";
import { SignUpEmailForm } from "../../blog/posts/daily_posts/SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";

export const Precalculus: React.FC = () => {
  return (
    <div className={styles.precalculus}>
      <h1 className={styles.header}>Precalculus</h1>
      <h2 className={styles.subheader}>
        What does it mean to get precalculus tutoring from us?
      </h2>
      <div className={styles.descriptor}>
        <p className={styles.text}>
          Precalculus is the course students typically take directly before
          their first calculus class. It is a generalized preperatory course,
          and so the material covered varies from school to school. At
          Functional Tutoring we pride ourselves on being flexible and able to
          help you tackle whatever topics you're presented with in your class.
        </p>
      </div>
      <div className={styles.topics}>
        <h3 className={styles.subject_header}>Topics Covered</h3>
        <ul className={styles.list}>
          <li>Complex numbers</li>
          <li>Fundamental Theorem of Algebra</li>
          <li>Vectors & matrices</li>
          <li>The complex plane</li>
          <li>Addition & subtraction of polynomials</li>
          <li>Probability & combinatorics</li>
          <li>Function composition</li>
          <li>Arithmetic & geometric series</li>
          <li>Inverse trigonometric functions</li>
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
