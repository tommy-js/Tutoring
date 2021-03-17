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
        tutoring services available than ever before. So why should you choose
        me over the other options?
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
        material with me during sessions. I will also design custom problem-sets
        for my students who need it.
      </p>
      <h2 className={styles.subheader}>Expert Knowledge</h2>
      <p className={styles.text}>
        With a degree in math from the University of Connecticut, two years of
        tutoring experience, and two summer-sessions as a teaching assistant, I
        have the background and knowledge necessary to help you succeed!
      </p>
      <p className={styles.text}>
        Of course, learning doesn't stop after college ends. I believe it is my
        job to continue to learn and update my skillset so as to better serve my
        students. When you care about a subject as much as I do, it's easy to
        sit down with a book and learn something new.
      </p>
      <Link href="/reading-list">
        <a className={styles.link}>Check out my reading list</a>
      </Link>
      <h2 className={styles.subheader}>Available & Affordable</h2>
      <p className={styles.text}>
        I'm building Functional Tutoring to help provide high-quality tutoring
        to everyone. Sessions with me cost a flat rate of{" "}
        <Link href="/pricing">
          <a className={styles.link}>$40 per hour</a>
        </Link>
        , but please feel free to{" "}
        <Link href="/contact">
          <a className={styles.link}>reach out</a>
        </Link>{" "}
        if you're unable to afford this. I would love to work with you and
        figure something out!
      </p>
      <p className={styles.text}>
        Currently, I have sessions available from noon until 7PM on every day
        except Sunday. If you need a session time that isn't available on my{" "}
        <Link href="/schedule">
          <a className={styles.link}>online scheduler</a>
        </Link>
        , again feel free to{" "}
        <Link href="/contact">
          <a className={styles.link}>contact me</a>
        </Link>{" "}
        . I am more than happy to figure something out with you and find a time
        that works well for both of us.
      </p>
    </div>
  );
};
