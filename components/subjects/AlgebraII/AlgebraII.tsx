import React from "react";
import ReactPlayer from "react-player";
import { OurTeam } from "../../front_page/OurTeam/OurTeam";
import { SignUpEmailForm } from "../../blog/posts/daily_posts/SignUpEmailForm/SignUpEmailForm";
import { SubjectLink } from "../SubjectLink/SubjectLink";
import styles from "./styles.module.scss";

const worksheet = require("../../../public/pencil.png");

export const AlgebraII: React.FC = () => {
  const links = [
    {
      id: "jkg555g5h5",
      text: "Definitions of Numbers",
      path: "../../materials/algebra2/definitions/Numbers",
      subject: "Algebra 2",
      type: "definition",
      image: worksheet,
    },
    {
      id: "hynyy7k89ll09",
      text: "Rationalizing the Denominator",
      path: "../../materials/algebra2/methods/Rationalize",
      subject: "Algebra 2",
      type: "method",
      image: worksheet,
    },
    {
      id: "00l0l8k8k7",
      text: "Practice with Exponents",
      path: "../../materials/algebra2/worksheets/Exponents",
      subject: "Algebra 2",
      type: "worksheet",
      image: worksheet,
    },
    {
      id: "nnmnmyuy7776wscasc",
      text: "Practice with Inequalities",
      path: "../../materials/algebra2/worksheets/Inequalities",
      subject: "Algebra 2",
      type: "worksheet",
      image: worksheet,
    },
    {
      id: "gbn,nnyt544edddW3fFGGrtnNN",
      text: "Practice Your Logarithms",
      path: "../../materials/algebra2/worksheets/Logarithms",
      subject: "Algebra 2",
      type: "worksheet",
      image: worksheet,
    },
  ];

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
