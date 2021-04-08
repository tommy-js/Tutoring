import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost41421: React.FC = () => {
  const problem1 = "\\frac{4+6i}{3-2i}";
  const problem2 = "\\frac{5x^3-3x^2+7x+2}{x+6}";
  const problem3 = "f(x)=\\frac{4x^5}{3}-7x^4+3x^2-17";

  const solution1_1 =
    "\\frac{4+6i}{3-2i}\\times\\frac{3+2i}{3+2i}=\\frac{(4+6i)(3+2i)}{(3-2i)(3+2i)}";
  const solution1_2 = "\\frac{12+8i+18i-12}{9+6i-6i+4}";
  const solution1_3 = "\\frac{24i}{13}";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Precalculus</h1>
      <h2 className={styles.subheader}>Posted on 4/14/21</h2>
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
            1. Simplify the expression <InlineMath>{problem1}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <div className={styles.answer}>
                <h4 className={styles.answer_header}>Answer: </h4>
                <p className={styles.answer_text}>
                  <InlineMath>{solution1_3}</InlineMath>
                </p>
              </div>
              <div className={styles.details}>
                <h4 className={styles.details_header}>Explanation: </h4>
                <p className={styles.text}>
                  It can be hard to figure out exactly what to do with this
                  equation at first. If we remember a simple rule, though, it
                  becomes fairly easy to figure out. Multiplying the numerator
                  and denominator by the complex conjugate will help us get the
                  imaginary term out of the denominator, so we'll start there.
                </p>
                <p className={styles.text}>
                  Remember that if we have some complex number{" "}
                  <InlineMath>a+bi</InlineMath>, its conjugate is{" "}
                  <InlineMath>a-bi</InlineMath>. So, multiplying the numerator
                  and denominator by <InlineMath>3+2i</InlineMath>, we get{" "}
                  <InlineMath>{solution1_1}</InlineMath>.
                </p>
                <p className={styles.text}>
                  We want to distribute out the numerator and denominator and
                  then simplify the terms. Expanding out, we get{" "}
                  <InlineMath>{solution1_2}</InlineMath>. We'll combine
                  like-terms and reduce, which gives us a much cleaner looking
                  expression, <InlineMath>{solution1_3}</InlineMath>. Since this
                  is in lowest terms, it is our final answer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Find <InlineMath>{problem2}</InlineMath> by synthetic division.
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
            3. Use the Fundamental Theorem of Algebra to determine how many
            roots the function <InlineMath>{problem3}</InlineMath> has.
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
