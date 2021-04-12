import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost41721: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");

  const problem2 = "\\frac{7}{8}=\\frac{y}{24}";
  const problem3 = "0.75-0.4";

  const solution2_1 = "\\frac{7}{8}";
  const solution2_2 = "\\frac{3\\times 7}{3\\times 8}=\\frac{21}{24}";
  const solution2_3 = "\\frac{21}{24}";
  const solution2_4 = "\\frac{y}{24}";

  function revealProblem1() {
    setProblem1Color("#3c3b3b");
    setProblem1Shadow("none");
  }

  function revealProblem2() {
    setProblem2Color("#3c3b3b");
    setProblem2Shadow("none");
  }

  function revealProblem3() {
    setProblem3Color("#3c3b3b");
    setProblem3Shadow("none");
  }

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Arithmetic</h1>
      <h2 className={styles.subheader}>Posted on 4/15/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/LgYmGkCuPTQ"
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
          <div className={styles.problem_header}>
            1. Convert 1/4 and 2/5 to decimals.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>0.25</InlineMath> and <InlineMath>0.4</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>0.33</InlineMath> and <InlineMath>0.5</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>0.2</InlineMath> and <InlineMath>0.95</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>0.1</InlineMath> and <InlineMath>0.4</InlineMath>
              </li>
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
              <div className={styles.answer}>
                <h4 className={styles.answer_header}>Answer: </h4>
                <p className={styles.answer_text}></p>
              </div>
              <div className={styles.details}>
                <h4 className={styles.details_header}>Explanation: </h4>
                <p className={styles.text}>
                  We'll use pie charts to see how these fractions can be
                  rewritten as decimals.
                </p>
                <p className={styles.text}></p>
                <p className={styles.text}></p>
                <p className={styles.text}></p>
                <p className={styles.text}></p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Find the value of y: <InlineMath>{problem2}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>x=200</InlineMath>, <InlineMath>y=100</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=125</InlineMath>, <InlineMath>y=250</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=300</InlineMath>, <InlineMath>y=100</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=100</InlineMath>, <InlineMath>y=300</InlineMath>
              </li>
            </ol>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <button
              className={styles.solution_button}
              onClick={() => revealProblem2()}
            >
              View Solution
            </button>
            <div
              className={styles.solution}
              style={{ color: problem2Color, textShadow: problem2Shadow }}
            >
              <p className={styles.text}>
                In order to find the value of y we need to recognize that 3
                times 8 is 24. If we see this, then we can multiply the
                numerator and denominator of the fraction{" "}
                <InlineMath>{solution2_1}</InlineMath> by 3. If we do this, we
                see that <InlineMath>{solution2_2}</InlineMath>. Because the
                denominators of <InlineMath>{solution2_3}</InlineMath> and{" "}
                <InlineMath>{solution2_4}</InlineMath> are the same, we can see
                that <InlineMath>y=21</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Find the value of <InlineMath>{problem3}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>x=200</InlineMath>, <InlineMath>y=100</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=125</InlineMath>, <InlineMath>y=250</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=300</InlineMath>, <InlineMath>y=100</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=100</InlineMath>, <InlineMath>y=300</InlineMath>
              </li>
            </ol>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <button
              className={styles.solution_button}
              onClick={() => revealProblem3()}
            >
              View Solution
            </button>
            <div
              className={styles.solution}
              style={{ color: problem3Color, textShadow: problem3Shadow }}
            >
              <p className={styles.text}></p>
              <p className={styles.text}></p>
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
