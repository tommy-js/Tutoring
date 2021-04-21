import React from "react";
import ReactPlayer from "react-player";
import { OurTeam } from "../../front_page/OurTeam/OurTeam";
import { SignUpEmailForm } from "../../blog/posts/daily_posts/SignUpEmailForm/SignUpEmailForm";
import { SubjectLink } from "../SubjectLink/SubjectLink";
import styles from "./styles.module.scss";

const worksheet = require("../../../public/pencil.png");
const definition = require("../../../public/book.png");

export const Calculus: React.FC = () => {
  const links = [
    {
      id: "fke444g5h5",
      text: "Definition of the Derivative",
      path: "../../materials/calculus1/definitions/Limits",
      subject: "Calculus 1",
      type: "definition",
      image: definition,
    },
    {
      id: "bbtbrbrsbvdc",
      text: "Practice Taking Derivatives",
      path: "../../materials/calculus1/worksheets/Derivatives",
      subject: "Calculus 1",
      type: "worksheet",
      image: worksheet,
    },
    {
      id: "44hhhnmmczs",
      text: "Methods of Taking Derivatives",
      path: "../../materials/calculus1/methods/Derivatives",
      subject: "Calculus 1",
      type: "method",
      image: definition,
    },
    {
      id: "gm4kkmg5h555j6j6nnb",
      text: "Practice Taking Limits",
      path: "../../materials/calculus1/worksheets/Limits",
      subject: "Calculus 1",
      type: "worksheet",
      image: worksheet,
    },
    {
      id: "efemkgm44km3w",
      text: "Methods of Integration",
      path: "../../materials/calculus1/methods/Integrals",
      subject: "Calculus 1",
      type: "method",
      image: definition,
    },
    {
      id: "kmk4g4434356hhjj",
      text: "L'Hospital's Rule",
      path: "../../materials/calculus1/definitions/LHopitals",
      subject: "Calculus 1",
      type: "definition",
      image: definition,
    },
    {
      id: "fkmk4g5566785gFFFeww",
      text: "The Exponential Derivative",
      path: "../../materials/calculus1/derivations/exponential",
      subject: "Calculus 1",
      type: "definition",
      image: definition,
    },
  ];

  return (
    <div className={styles.calculus}>
      <h1 className={styles.header}>Calculus</h1>
      <h2 className={styles.subheader}>
        What does it mean to get calculus tutoring from us?
      </h2>
      <div className={styles.descriptor}>
        <p className={styles.text}>
          Calculus I is the study of instantaneous rate of change, and is
          typically the first higher-level math class a student takes upon
          entering college. While many people often find it quite challenging,
          ultimately its basics are quite simple. We would love to help you
          better understand its topics and materials!
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
          url="https://youtu.be/ANUESSEGBug"
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
