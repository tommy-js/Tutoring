import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost4821: React.FC = () => {
  const problem3_2 = "\\frac{2}{13}";
  const problem3_3 = "\\frac{2x}{3x-1}";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Algebra</h1>
      <h2 className={styles.subheader}>Posted on 4/8/21</h2>
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
            1. Rewrite <InlineMath>4900</InlineMath> and{" "}
            <InlineMath>0.0000063</InlineMath> in Scientific Notation.
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
            2. Find <InlineMath>-|-4|</InlineMath>,{" "}
            <InlineMath>|6-9|</InlineMath>, and <InlineMath>|-4*5|</InlineMath>.
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
            3. Take the reciprocal of <InlineMath>12</InlineMath>,{" "}
            <InlineMath>{problem3_2}</InlineMath> and{" "}
            <InlineMath>{problem3_3}</InlineMath>
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
