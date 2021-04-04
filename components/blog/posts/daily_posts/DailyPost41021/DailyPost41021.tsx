import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost41021: React.FC = () => {
  const problem1_1 = "x^2=\\frac{16x^3}{225}";
  const problem1_2 = "x\\neq 0";

  const problem2_1 = "|3x-4|\\leq 12";
  const problem2_2 = "|x-4|";

  const problem3_1 = "x=\\sqrt{5}-2";
  const problem3_2 = "2x^2+5x-6";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>SAT Prep</h1>
      <h2 className={styles.subheader}>Posted on 4/10/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/LgYmGkCuPTQ"
          loop={false}
          playing={false}
          controls={true}
          volume={100}
          muted={false}
          width={"100%"}
          className={styles.player}
        />
      </div>
      <div className={styles.solutions_block}>
        <h3 className={styles.solutions_header}>Problems & Solutions</h3>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            If <InlineMath>{problem1_1}</InlineMath>, where{" "}
            <InlineMath>{problem1_2}</InlineMath>, which of the following is
            equivalent to x?
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            If <InlineMath>{problem2_1}</InlineMath>, what is the greatest
            possible value of <InlineMath>{problem2_2}</InlineMath>?
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            If <InlineMath>{problem3_1}</InlineMath>, what is the value of{" "}
            <InlineMath>{problem3_2}</InlineMath>?
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
