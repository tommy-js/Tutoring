import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost41221: React.FC = () => {
  const problem1_1 = "\\frac{-3}{6}";
  const problem1_2 = "\\frac{-15}{-5}";

  const problem2_1 = "5.75+1.25";
  const problem2_2 = "7.9+2.5";

  const problem3_1 = "\\frac{7}{4}";
  const problem3_2 = "\\frac{9}{3}";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Arithmetic</h1>
      <h2 className={styles.subheader}>Posted on 4/12/21</h2>
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
            1. Find <InlineMath>{problem1_1}</InlineMath> and{" "}
            <InlineMath>{problem1_2}</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Determine <InlineMath>{problem2_1}</InlineMath> and{" "}
            <InlineMath>{problem2_2}</InlineMath>.
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
            3. Rewrite <InlineMath>{problem3_1}</InlineMath> and{" "}
            <InlineMath>{problem3_2}</InlineMath> as fractions with their least
            common denominator.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
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
