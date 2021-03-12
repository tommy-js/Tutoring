import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Qualifications: React.FC = () => {
  return (
    <div className={styles.qualifications}>
      <h1 className={styles.header}>My Qualifications</h1>
      <p className={styles.text}>
        I graduated from the University of Connecticut Storrs in 2019 with a
        Bachelor's degree in mathematics. Previous to that I was a student at
        Dutchess Community College, where I graduated with an Associates in Arts
        in Mathematics. I was very proud to be one of only around a dozen
        mathematics graduates.
      </p>
      <p className={styles.text}>
        During my time at DCC I acted as a peer tutor in math, covering subjects
        from the very basics of arithmetic to calculus 2. I also participated as
        a teaching assistant during the summers of 2016 and 2017 for a program
        called SmartStart, which assisted underprepared students in their
        mathematics, reading, and writing abilities. This was an exceptionally
        rewarding experience, as I got to see so many students really grow over
        the course of several weeks.
      </p>
      <p className={styles.text}>
        At the same time, I was lucky enough to help with the grading of two
        elementary school mathematics competitions over the winters of 2016 and
        2017. Seeing how smart and dedicated many of these students were
        inspired me!
      </p>
      <p className={styles.text}>
        During my time at DCC I made the Dean's List three times, won the Daniel
        P. White Memorial Scholarship, and graduated with honors before
        transferring to the University of Connecticut, Storrs.
      </p>
      <p className={styles.text}>
        Of course, as is often the case, my coursework became more difficult at
        UConn. I took classes such as Abstract Algebra, Complex Analysis, and
        Combinatorics, which I continue to find fascinating. I had little time
        to dedicate to tutoring, so while I often attended the mathematics club
        to learn about new topics, I no longer had many opportunities to help
        others understand the material I loved in the ways I had before.
      </p>
      <p className={styles.text}>
        Today, I'm extremely excited to get back to the work I had been doing
        before, while at DCC. Sharing knowledge is one of my great passions in
        life, and I love seeing my students finally really understand a concept.
      </p>
      <p className={styles.text}>
        Want to know more about me?{" "}
        <Link href="/about-me">
          <a className={styles.link}>Learn more</a>
        </Link>
      </p>
    </div>
  );
};
