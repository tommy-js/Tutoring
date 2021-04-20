import React from "react";
import ReactPlayer from "react-player";
import { OurTeam } from "../../front_page/OurTeam/OurTeam";
import { SignUpEmailForm } from "../../blog/posts/daily_posts/SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";

export const Sat: React.FC = () => {
  return (
    <div className={styles.sat}>
      <div className={styles.header_block}>
        <h1 className={styles.header}>SAT Prep</h1>
        <h2 className={styles.subheader}>
          What does it mean to get SAT tutoring from us?
        </h2>
        <div className={styles.descriptor}>
          <p className={styles.text}>
            The SAT is a test many high school students take prior to applying
            to colleges. A good score gives better chances of admittance, which
            is why many parents, teachers, and students place a lot of emphasis
            on doing well when taking it. The SAT can be a challenge due to the
            wide variety of mathematics questions asked, and so getting a tutor
            to help out is a fantastic idea for serious students. We at
            Functional Tutoring are very well-equipped to help students do as
            well as possible, and being highly accessible and low-cost we think
            we're the perfect match for those trying to do their best on this
            exam.
          </p>
        </div>
      </div>
      <div className={styles.topics}>
        <h3 className={styles.subject_header}>Some Topics Covered</h3>
        <ul className={styles.list}>
          <li>Word problems</li>
          <li>Factoring & distribution</li>
          <li>Exponent rules</li>
          <li>Solving equations</li>
          <li>Reading graphs & tables</li>
          <li>Solving inequalities</li>
          <li>Imaginary numbers</li>
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
          url="https://youtu.be/p1ekL-huUmA"
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
