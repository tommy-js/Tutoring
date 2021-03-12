import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const two_x = require("../../../public/2x.png");
const affordable = require("../../../public/affordable.png");
const calendar = require("../../../public/calendar.png");
const exam = require("../../../public/exam.png");
const grad_cap = require("../../../public/grad_cap.png");
const worksheet = require("../../../public/worksheet.png");

export const AtAGlance: React.FC = () => {
  return (
    <div className={styles.at_a_glance}>
      <h2 className={styles.header}>At a Glance</h2>
      <h3 className={styles.subheader}>
        Just a few reasons you should consider me
      </h3>
      <div className={styles.list_container}>
        <div className={styles.list_item}>
          <div className={styles.image_block}>
            <img className={styles.image} src={calendar} />
          </div>
          <div className={styles.list_descript}>
            Two years tutoring experience at a variety of mathematics levels
          </div>
        </div>
        <div className={styles.list_item}>
          <div className={styles.image_block}>
            <img className={styles.image} src={grad_cap} />
          </div>
          <div className={styles.list_descript}>
            Bachelor's Degree in mathematics
          </div>
        </div>
        <div className={styles.list_item}>
          <div className={styles.image_block}>
            <img className={styles.image} src={affordable} />
          </div>
          <div className={styles.list_descript}>
            <Link href="/pricing">
              <a className={styles.link}>Available and affordable</a>
            </Link>
            : I want to see you succeed!
          </div>
        </div>
        <div className={styles.list_item}>
          <div className={styles.image_block}>
            <img className={styles.image} src={exam} />
          </div>
          <div className={styles.list_descript}>
            Offering help in many subjects, including SAT and Regents exam prep
          </div>
        </div>
        <div className={styles.list_item}>
          <div className={styles.image_block}>
            <img className={styles.image} src={two_x} />
          </div>
          <div className={styles.list_descript}>
            Two-time teaching assistant for{" "}
            <Link href="https://www.sunydutchess.edu/academics/academicsupport/opportunityprograms/smartstart.html">
              <a className={styles.link}>SmartStart</a>
            </Link>
          </div>
        </div>
        <div className={styles.list_item}>
          <div className={styles.image_block}>
            <img className={styles.image} src={worksheet} />
          </div>
          <div className={styles.list_descript}>
            Continuously growing library of practice problems with solutions
            that you can do in your own time or work out with me
          </div>
        </div>
      </div>
      <Link href="/qualifications">
        <a className={`${styles.link} ${styles.centering}`}>
          Learn more about what makes me qualified to help you
        </a>
      </Link>
    </div>
  );
};
