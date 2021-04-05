import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost41121: React.FC = () => {
  const problem2_1 = "\\int_{2}^{6}f(x)";
  const problem2_2 = "f(x)=x^2+\\frac{6x}{5}-17";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Calculus</h1>
      <h2 className={styles.subheader}>Posted on 4/11/21</h2>
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
            1. We need to enclose a rectangular field with a fence. We have 250
            feet of fencing material and a building is on one side of the field
            and so won’t need any fencing. Determine the dimensions of the field
            that will enclose the largest area.
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
            2. Integrate <InlineMath>{problem2_1}</InlineMath> for the function{" "}
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
            3. Use the definition of the derivative to determine whether the
            derivative of <InlineMath>f(x)=|x|</InlineMath> exists at{" "}
            <InlineMath>x=0</InlineMath>.
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
