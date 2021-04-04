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
  const problem2_2 = "|x-2|";

  const problem3_1 = "x=\\sqrt{5}-2";
  const problem3_2 = "2x^2+5x-6";

  const problem1_option1 = "\\frac{16}{225}";
  const problem1_option2 = "\\frac{25x}{48}";
  const problem1_option3 = "\\frac{225}{16}";
  const problem1_option4 = "\\frac{16x^2}{225}";

  const solution1_1 = "1=\\frac{16x}{225}";
  const solution1_2 = "x=\\frac{225}{16}";

  const solution3_1 = "2(\\sqrt{5}-2)^2+5(\\sqrt{5}-2)-6";
  const solution3_2 = "2(\\sqrt{5}-2)(\\sqrt{5}-2)+5(\\sqrt{5}-2)-6";
  const solution3_3 =
    "2(5-2\\sqrt{5}+2\\sqrt{5}+4)+5(\\sqrt{5}-2)-6=2(9)+5(\\sqrt{5}-2)-6";
  const solution3_4 = "2(9)+5\\sqrt{5}-10-6=18+5\\sqrt{5}-10";
  const solution3_5 = "8+5\\sqrt{5}";

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
          <ol className={styles.multiple_choice}>
            <li className={styles.individual_choice}>
              <InlineMath>{problem1_option1}</InlineMath>
            </li>
            <li className={styles.individual_choice}>
              <InlineMath>{problem1_option2}</InlineMath>
            </li>
            <li className={styles.individual_choice}>
              <InlineMath>{problem1_option3}</InlineMath>
            </li>
            <li className={styles.individual_choice}>
              <InlineMath>{problem1_option4}</InlineMath>
            </li>
          </ol>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                In this problem there are two possible ways to approach it. We
                can either plug in the potential solutions listed above and find
                the matching value, or we can solve for x. Here we will solve
                for x, but you're encouraged to try out the other way as well.
              </p>
              <p className={styles.text}>
                To start, we'll divide both sides by{" "}
                <InlineMath>x^2</InlineMath>. This gives us the expression{" "}
                <InlineMath>{solution1_1}</InlineMath>. Now we just need to
                solve for x, and so we multiply both sides by 225 and get{" "}
                <InlineMath>225=16x</InlineMath>. Divide by 16 to get the final
                result of <InlineMath>{solution1_2}</InlineMath>. So, the
                correct answer is choice (3).
              </p>
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
              <p className={styles.text}>
                Here we just need to substitute our x-term into the expression
                and then simplify. Since <InlineMath>{problem3_1}</InlineMath>,
                after substitution we have{" "}
                <InlineMath>{solution3_1}</InlineMath>. Now, expanding out the
                squared value we get <InlineMath>{solution3_2}</InlineMath>.
                FOILing the left-most parentheses, the expression further
                simplifies down to <InlineMath>{solution3_3}</InlineMath>.
              </p>
              <p className={styles.text}>
                Now, distributing through the right-most parentheses, this
                expression becomes <InlineMath>{solution3_4}</InlineMath>.
                Finally, after some simple addition our answer is{" "}
                <InlineMath>{solution3_5}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
