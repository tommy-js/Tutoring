import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost42221: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");

  function revealProblem1() {
    setProblem1Color("#3c3b3b");
    setProblem1Shadow("none");
  }

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>
        Arithmetic | Subtraction & Simplification
      </h1>
      <h2 className={styles.subheader}>Posted on 4/22/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/Roum4UkxI0o"
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
      <div className={styles.solutions_block}>
        <h3 className={styles.solutions_header}>Problems & Solutions</h3>
        <div className={styles.problem}>
          <div className={styles.problem_header}>Subtract 3.19 from 9.25</div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>14.63</li>
              <li className={styles.individual_choice}>6.06</li>
              <li className={styles.individual_choice}>3.56</li>
              <li className={styles.individual_choice}>5.22</li>
            </ol>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <button
              className={styles.solution_button}
              onClick={() => revealProblem1()}
            >
              View Solution
            </button>
            <div
              className={styles.solution}
              style={{ color: problem1Color, textShadow: problem1Shadow }}
            >
              <div className={styles.details}>
                <p className={styles.text}>
                  In order to solve this problem we need to look at the whole
                  number component and the decimal component. We will separate
                  out the problem as <InlineMath>9+0.25-3-0.19</InlineMath>.
                  Now, we group the whole number and decimal number parts to get{" "}
                  <InlineMath>(9-3)+(0.25-0.19)</InlineMath>.
                </p>
                <p className={styles.text}>
                  We are trying to simplify this and hopefully the process will
                  make it simpler. Even though the decimal place looks scary,
                  it's really no different than subtracting whole numbers. Just
                  like <InlineMath>25-19=6</InlineMath>,{" "}
                  <InlineMath>0.25-0.19=0.06</InlineMath>. The only complicated
                  part is that you need to remember the placement, which is why
                  you get the zero in front of the six.
                </p>
                <p className={styles.text}>
                  So, we get <InlineMath>(9-3)+(0.25-0.19)=6+0.06</InlineMath>.
                  Adding these two terms we obtain{" "}
                  <InlineMath>9.25-3.19=6.06</InlineMath>, which is our final
                  answer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
