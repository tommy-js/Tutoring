import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const practice = require("../../../public/practice_sheets.jpg");

export const WhyMe: React.FC = () => {
  return (
    <div className={styles.why_me}>
      <h1 className={styles.header}>Why Functional Tutoring?</h1>
      <p className={styles.text}>
        With the current environment of work and learn from home, there are more
        tutoring services available now than ever before. So why should you
        choose me over the other options?
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
        practice problems, explanations, and derivations of formulas. Enjoy our
        ever-growing library of materials!
      </p>
      <Link href="/materials/precalc/worksheets/Complex">
        <div className={styles.image_block}>
          <img
            className={styles.image}
            src={practice}
            alt="List of complicated mathematics problems"
          />
        </div>
      </Link>
      <p className={styles.text}>
        While there is no shortage of practice problems and videos available
        online, my students have the benefit of being able to go over this
        material with me during sessions.
      </p>
      <h2 className={styles.subheader}>Expert Knowledge</h2>
      <p className={styles.text}>
        You deserve the best out of your tutoring sessions. I believe it is my
        job to continue to learn and update my skillset so as to better serve my
        students. I continue to read mathematics textbooks and papers regularly,
        putting you or your child in a great spot.
      </p>
      <Link href="/reading-list">
        <a className={styles.link}>Check out my reading list</a>
      </Link>
      <h2 className={styles.subheader}>Available & Affordable</h2>
      <p className={styles.text}>
        I'm building Functional Tutoring to help provide high-quality tutoring
        to everyone, so we operate on a sliding scale payment system. For your
        first session, you'll pay{" "}
        <Link href="/pricing">
          <a className={styles.link}>$20 per hour</a>
        </Link>
        , after which we'll decide on a reasonable rate, usually around $30-$40
        per hour.
      </p>
      <p className={styles.text}>
        Currently, I have sessions available from noon until 7PM on every day
        except Sunday. If you need a session time that isn't available on my{" "}
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
