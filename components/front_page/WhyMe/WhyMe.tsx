import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const practice = require("../../../public/practice_sheets.png");

export const WhyMe: React.FC = () => {
  return (
    <div className={styles.why_me}>
      <h1 className={styles.header}>Why Me?</h1>
      <p className={styles.text}>
        With the current environment of work and learn from home, there are more
        tutoring services available than ever. So why should you choose me over
        the other options?
      </p>
      <h2 className={styles.subheader}>More Than Just Tutoring</h2>
      <p className={styles.text}>
        When you sign up with me, you're not only signing up for hour-by-hour
        tutoring. Functional Tutoring is a fully-fledged out platform that is
        designed to give you the leg up you deserve in the subject you're
        working on.
      </p>
      <p className={styles.text}>
        Students learn in a variety of ways. I believe that tutoring is most
        effective when people have access to a number of resources, including
        practice problems, explanations, and derivations of formulas. Because of
        this philosophy, I've designed and continue to frequently update a
        large, interactive library of material, which you will have access to as
        a student.
      </p>
      <div className={styles.image_block}>
        <img className={styles.image} src={practice} />
      </div>
      <p className={styles.text}>
        While there is no shortage of practice problems and videos available
        online, my students have the benefit of being able to go over this
        material with me during sessions, or do it on their own time and have me
        grade it for them.
      </p>
      <h2 className={styles.subheader}>Expert Knowledge</h2>
      <p className={styles.text}>
        You deserve the best out of your tutoring sessions. I believe it is my
        job to continue to learn and update my skillset past that of a
        Bachelor's level so as to better serve my students. I have seen that an
        understanding of higher level materials on my end will better facilitate
        the learning of lower level materials for the student.
      </p>
      <Link href="/reading-list">
        <a className={styles.link}>Check out my reading list</a>
      </Link>
      <p className={styles.text}>
        Simply put, I aim to offer you all my experience and knowledge at a low
        pricepoint, making it affordable to obtain high-quality tutoring for
        everyone.
      </p>

      <h2 className={styles.subheader}>Available & Affordable</h2>
      <p className={styles.text}>
        I understand that with the ongoing pandemic budgets are stretched thin
        and schedules are unconventional. With this in mind I've gone to great
        lengths to ensure that I'm available to my students when they need me,
        even on short notice, and that my prices are affordable for those who
        need my assistance.
      </p>
      <p className={styles.text}>
        If you need a session time that isn't available on my{" "}
        <Link href="/schedule">
          <a className={styles.link}>online scheduler</a>
        </Link>
        , please{" "}
        <Link href="/contact">
          <a className={styles.link}>reach out</a>
        </Link>
        ! I am more than happy to work with you and find a time that works well
        for both of us.
      </p>
    </div>
  );
};
