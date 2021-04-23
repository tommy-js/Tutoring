import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost42321: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");

  const problem = "\\frac{x^3a^2b}{b^3xa^4}";

  const problem_choice_1 = "\\frac{x^4a^2}{b^3}";
  const problem_choice_2 = "\\frac{x^2}{a^2b^2}";
  const problem_choice_3 = "x^3a^2b";
  const problem_choice_4 = "\\frac{a^3b^2}{x^3}";

  const solution1 = "\\frac{x^3a^2b}{xa^4b^3}";
  const solution2 = "\\frac{x^3}{x}=x^2";
  const solution3 = "\\frac{a^2}{a^4}=\\frac{1}{a^2}";
  const solution4 = "\\frac{x^3a^2b}{b^3xa^4}=\\frac{x^2}{a^2b^2}";

  function revealProblem1() {
    setProblem1Color("#3c3b3b");
    setProblem1Shadow("none");
  }

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Algebra</h1>
      <h2 className={styles.subheader}>Posted on 4/23/21</h2>
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
            Simplify the expression <InlineMath>{problem}</InlineMath>
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>{problem_choice_1}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem_choice_2}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem_choice_3}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem_choice_4}</InlineMath>
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
                  The first thing we want to do is rewrite our expression with
                  the variables lined up similarly. Since multiplication is
                  commutative, we can change the order of the variables. In
                  other words, we write it as{" "}
                  <InlineMath>{solution1}</InlineMath>. This will allow us to
                  simplify the expression easier.
                </p>
                <p className={styles.text}>
                  Now, when we divide by a common base we remember that we
                  subtract their exponents. So,{" "}
                  <InlineMath>{solution2}</InlineMath>. This fact also holds for
                  the denominator. If we have a higher degree term in the
                  denominator than in the numerator, we subtract the higher
                  degree from the lower degree and leave the term in the
                  denominator. For example, <InlineMath>{solution3}</InlineMath>
                  .
                </p>
                <p className={styles.text}>
                  So, to go through and simplify our problem, we see that{" "}
                  <InlineMath>{solution4}</InlineMath>.
                </p>
                <p className={styles.text}></p>
                <p className={styles.text}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
