import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost4221: React.FC = () => {
  const problem2_1 = "4^2";
  const problem2_2 = "(\\frac{5}{2})^2";
  const problem2_3 = "(-6)^2";
  const problem2_4 = "-(7)^2";

  const problem3_1 = "\\sqrt{9}";
  const problem3_2 = "\\sqrt{3\\cdot 3}";
  const problem3_3 = "\\sqrt{16}";
  const problem3_4 = "\\sqrt{9^2}";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Arithmetic </h1>
      <h2 className={styles.subheader}>Posted on 3/31/21</h2>
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
            Find the greatest common factor of 34 and 68.
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
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            Determine <InlineMath>{problem2_1}</InlineMath>,{" "}
            <InlineMath>{problem2_2}</InlineMath>,{" "}
            <InlineMath>{problem2_3}</InlineMath>, and{" "}
            <InlineMath>{problem2_4}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            Determine <InlineMath>{problem3_1}</InlineMath>,{" "}
            <InlineMath>{problem3_2}</InlineMath>,{" "}
            <InlineMath>{problem3_3}</InlineMath>, and{" "}
            <InlineMath>{problem3_4}</InlineMath>.
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
      </div>
      <SignUpEmailForm />
    </div>
  );
};
