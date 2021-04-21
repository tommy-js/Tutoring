import React from "react";
import ReactPlayer from "react-player";
import { OurTeam } from "../../front_page/OurTeam/OurTeam";
import { SignUpEmailForm } from "../../blog/posts/daily_posts/SignUpEmailForm/SignUpEmailForm";
import { SubjectLink } from "../SubjectLink/SubjectLink";
import styles from "./styles.module.scss";

const worksheet = require("../../../public/pencil.png");

export const Arithmetic: React.FC = () => {
  const links = [
    {
      id: "krgmkmbkrmn56667",
      text: "Addition and subtraction practice",
      path: "../../materials/arithmetic/worksheets/AddSub",
      subject: "Arithmetic",
      type: "worksheet",
      image: worksheet,
    },
    {
      id: "ghh568GFBedE##@s",
      text: "Adding and subtracting fractions practice",
      path: "../../materials/arithmetic/worksheets/AddSubFracts",
      subject: "Arithmetic",
      type: "worksheet",
      image: worksheet,
    },
    {
      id: "vvv%%gg^%$#Ed##x@22sc%s",
      text: "Multiplying and Dividing fractions practice",
      path: "../../materials/arithmetic/worksheets/MultDivFrac",
      subject: "Arithmetic",
      type: "worksheet",
      image: worksheet,
    },
    {
      id: "3t9io3tkGRH%^66%%$$$",
      text: "Practice with percentages",
      path: "../../materials/arithmetic/worksheets/Percents",
      subject: "Arithmetic",
      type: "worksheet",
      image: worksheet,
    },
  ];

  return (
    <div className={styles.arithmetic}>
      <h1 className={styles.header}>Arithmetic</h1>
      <h2 className={styles.subheader}>
        What does it mean to get arithmetic tutoring from us?
      </h2>
      <div className={styles.descriptor}>
        <p className={styles.text}>
          Arithmetic is the study of numbers and their properties. It's a broad
          term that refers to several math classes in elementary and early
          middle school. If you or your child are taking a class covering
          arithmetic topics, we can help! Please feel free to contact us with
          any questions you may have about pricing, availability, topics, etc.
        </p>
      </div>
      <div className={styles.topics}>
        <h3 className={styles.subject_header}>Practice Worksheets</h3>
        {links.map((el: any) => (
          <SubjectLink text={el.text} path={el.path} image={el.image} />
        ))}
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
