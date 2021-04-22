import React from "react";
import { Footer } from "../Footer/Footer";
import { ScheduleSession } from "../front_page/ScheduleSession/ScheduleSession";
import styles from "./styles.module.scss";

const harvard = require("../../public/harvard.jpg");

export const Mission: React.FC = () => {
  return (
    <div className={styles.mission_container}>
      <div className={styles.mission}>
        <h1 className={styles.header}>Our Mission</h1>
        <h2 className={styles.subheader}>
          We believe that everyone should have access to the math tutoring they
          deserve
        </h2>
        <div className={styles.harvard_image}>
          <img src={harvard} className={styles.image} />
        </div>
        <p className={styles.text}>
          It's generally no secret that wealthier students have an edge when it
          comes to college admittance. A study in 2017 found that more students
          attend the Ivy League from the top 1% income bracket than from the
          bottom 50%. This can be explained in a variety of ways, but at the end
          of the day what it means is that those with greater resources are
          doing better in their education than those with fewer.
        </p>
        <p className={styles.text}>
          At Functional Tutoring, we believe in the American Dream: that anyone
          can start here from nothing and work their way up to have it all.
          Systems like this, where the have's possess an edge over the
          have-not's, directly interfere with this vision. When the upper class
          can afford better tutors, better study materials, and therefore
          ultimately get their children into better schools, it becomes harder
          for less fortunate students and families to work their way up the
          ladder.
        </p>
        <div className={styles.flair}>
          <p className={styles.flair_text}>
            We aim to level the playing field between upper, middle, and lower
            class mathematics students in a meaningful way
          </p>
        </div>
        <p className={styles.text}>
          Fortunately, with the advent of the internet and the proliferation of
          online tutoring services, we suddenly have the ability to start
          equalizing the playing field between economic classes in America. With
          this ability comes a great responsibility to ourselves, our children,
          and future generations. At Functional Tutoring we believe that we must
          be active in achieving an egalitarian world, and understand the
          difficulty present in trying to achieve that goal.
        </p>
        <p className={styles.text}>
          And yet it was never meant to be easy. Trying to slowly dismantle and
          modify a system that's always been there is going to be hard. The
          difference now is that with the internet, the greatest tool ever
          created by humanity, we suddenly have the ability to reshape our world
          in a significant way. At Functional Tutoring, we want to be part of
          that story. The only question that remains is: will you be part of
          that story with us?
        </p>
        <ScheduleSession />
      </div>
      <div className={styles.bottom_div} />
      <Footer />
    </div>
  );
};
