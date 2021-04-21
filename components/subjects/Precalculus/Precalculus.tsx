import React from "react";
import ReactPlayer from "react-player";
import { OurTeam } from "../../front_page/OurTeam/OurTeam";
import { SignUpEmailForm } from "../../blog/posts/daily_posts/SignUpEmailForm/SignUpEmailForm";
import { SubjectLink } from "../SubjectLink/SubjectLink";
import styles from "./styles.module.scss";

const worksheet = require("../../../public/pencil.png");

export const Precalculus: React.FC = () => {
  const links = [
    {
      id: "fke444g5h5",
      text: "Complex Numbers Practice",
      path: "../../materials/precalc/worksheets/Complex",
      subject: "Pre-Calculus",
      type: "worksheet",
      image: worksheet,
    },
    {
      id: "f3fjk3ngj3nj43hg44h",
      text: "Practice with Logarithm Equations",
      path: "../../materials/precalc/worksheets/Logarithms",
      subject: "Pre-Calculus",
      type: "worksheet",
      image: worksheet,
    },
    {
      id: "gkm4km45667,bbBffrree",
      text: "Trigonometric Identities",
      path: "../../materials/precalc/definitions/TrigIdentities",
      subject: "Pre-Calculus",
      type: "definitions",
      image: worksheet,
    },
  ];

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
          url="https://youtu.be/KlVGkPcW3dw"
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
