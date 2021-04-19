import React from "react";
import ReactPlayer from "react-player";
import { OurTeam } from "../../front_page/OurTeam/OurTeam";
import { SignUpEmailForm } from "../../blog/posts/daily_posts/SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";

export const Geometry: React.FC = () => {
  return (
    <div className={styles.geometry}>
      <h1 className={styles.header}>Geometry</h1>
      <h2 className={styles.subheader}>
        What does it mean to get geometry tutoring from us?
      </h2>
      <div className={styles.descriptor}>
        <p className={styles.text}>
          Geometry is the study of shapes and their properties. It is one of the
          oldest mathematical subjects, investigated since humans were able to
          interact with the world around us. It's now not only an area of major
          research, but a subject that is commonly taught in middle and high
          schools around the world.
        </p>
      </div>
      <div className={styles.topics}>
        <h3 className={styles.subject_header}>Topics Covered</h3>
        <ul className={styles.list}>
          <li>Similar & congruent shapes</li>
          <li>Parallel & perpendicular lines</li>
          <li>Triangle properties</li>
          <li>Interior and exterior angles of various shapes</li>
          <li>Transformations</li>
          <li>Properties of circles</li>
        </ul>
      </div>
      <div className={styles.tutors_available_block}>
        <h3 className={styles.availability_header}>
          Tutors available for this subject
        </h3>
        <OurTeam />
      </div>
      <div className={styles.email_subscribe_box}>
        <SignUpEmailForm />
      </div>
    </div>
  );
};
