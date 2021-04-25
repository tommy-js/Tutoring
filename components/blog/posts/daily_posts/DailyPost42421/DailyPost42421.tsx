import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost42421: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");

  const problem = "\\frac{3i+7}{2i-12}";

  const answer_1 = "12i+8";
  const answer_2 = "\\frac{-50i-78}{148}";
  const answer_3 = "\\frac{17i+44}{118}";
  const answer_4 = "\\frac{89i-22}{148}";

  const solution1 = "\\frac{a-bi}{c-di}";
  const solution2 = "\\frac{a-bi}{c-di}\\cdot\\frac{c+di}{c+di}";
  const solution3 =
    "\\frac{a-bi}{c-di}\\cdot\\frac{c+di}{c+di}=\\frac{-6+36i+14i+84}{-4+24i-24i-144}";
  const solution4 = "\\frac{50i+78}{-148}";
  const solution5 = "\\frac{-50i-78}{148}";

  function revealProblem1() {
    setProblem1Color("#3c3b3b");
    setProblem1Shadow("none");
  }

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Precalculus | Complex Simplification</h1>
      <h2 className={styles.subheader}>Posted on 4/24/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/Lwf_EZRPAKQ"
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
            Simplify the expression <InlineMath>{problem}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>{answer_1}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{answer_2}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{answer_3}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{answer_4}</InlineMath>
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
              <div className={styles.details}>
                <h4 className={styles.details_header}>Explanation: </h4>
                <p className={styles.text}>
                  To solve this problem we need to realize that we can use the
                  complex conjugate to get the i-term out of the denominator. We
                  remember that if we have a complex number in the form{" "}
                  <InlineMath>{solution1}</InlineMath>, its complex conjugate is{" "}
                  <InlineMath>c+di</InlineMath>. It is the same as the
                  denominator but with the middle sign flipped.
                </p>
                <p className={styles.text}>
                  So, multiplying the expression by the complex conjugate means
                  performing the operation <InlineMath>{solution2}</InlineMath>.
                  By multiplying both the numerator and denominator by this
                  expression we are essentially multiplying by 1, and so the
                  expression does not change in value. Now, we distribute across
                  the numerator and denominator.
                </p>
                <p className={styles.text}>
                  Doing so gives us <InlineMath>{solution3}</InlineMath>. You
                  can see that the advantage of this method is that the i-terms
                  will cancel out from the denominator, thus only leaving them
                  in the numerator. So, simplifying further, our expression
                  becomes <InlineMath>{solution4}</InlineMath>.
                </p>
                <p className={styles.text}>
                  As a final note, we can draw out the negative term from the
                  denominator to the numerator. In general, we want to do this.
                  Thus, our answer is <InlineMath>{solution5}</InlineMath>.
                </p>
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
