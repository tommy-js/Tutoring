import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost32421: React.FC = () => {
  const problem1 = "\\frac{4}{6}\\cdot\\frac{2}{3}";

  const solution1_1 = "4\\cdot 2";
  const solution1_2 = "6\\cdot 3";
  const solution1_3 = "\\frac{4}{6}\\cdot\\frac{2}{3}=\\frac{8}{18}";
  const solution1_4 = "\\frac{4}{6}\\cdot\\frac{2}{3}=\\frac{4}{9}";

  const problem2 = "\\frac{2}{7}\\div\\frac{3}{4}";
  const solution2_1 =
    "\\frac{4}{9}\\div\\frac{2}{3}=\\frac{4}{9}\\cdot\\frac{3}{2}";
  const solution2_2 =
    "\\frac{2}{7}\\div\\frac{3}{4}=\\frac{2}{7}\\cdot\\frac{4}{3}";
  const solution2_3 = "2\\cdot 4 = 8";
  const solution2_4 = "7\\cdot 3 = 21";
  const solution2_5 = "\\frac{8}{21}";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>
        Arithmetic | simple expressions, fractional multiplication & division
      </h1>
      <h2 className={styles.subheader}>Posted on 3/24/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/7ZGE0447CoM"
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
            1. Simplify <InlineMath>{problem1}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                The rule for simplifying multiplication with fractions is to
                multiply across the top and the bottom and then to reduce terms.
                We'll go through this problem as an example.
              </p>
              <p className={styles.text}>
                Take <InlineMath>{problem1}</InlineMath>. We'll multiply across
                the top to get <InlineMath>{solution1_1}</InlineMath> and across
                the bottom to get <InlineMath>{solution1_2}</InlineMath>. So,
                our fraction becomes <InlineMath>{solution1_3}</InlineMath>.
              </p>
              <p className={styles.text}>
                Now comes the last part, where we need to simplify and reduce.
                We see that the numerator and the denominator are both divisible
                by 2, so we can divide the numerator by 2 to get 4 and the
                denominator by 2 to get 9. So, our final answer is{" "}
                <InlineMath>{solution1_4}</InlineMath>
              </p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Simplify <InlineMath>{problem2}</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                To solve this problem we just need to remember the rule for
                division of fractions. Whenever we divide a fraction by another
                fraction we flip the second one and turn the division sign into
                a multiplication sign. So, as an example,{" "}
                <InlineMath>{solution2_1}</InlineMath>.
              </p>
              <p className={styles.text}>
                So, we take our original fraction and flip it to get{" "}
                <InlineMath>{solution2_2}</InlineMath>. Now all that's left to
                do is work through the fraction as we did in problem 1. Multiply
                across the top to get <InlineMath>{solution2_3}</InlineMath> and
                across the bottom to get <InlineMath>{solution2_4}</InlineMath>.
              </p>
              <p className={styles.text}>
                So, our fraction become <InlineMath>{solution2_5}</InlineMath>.
                Because the numerator and denominator don't have any terms in
                common, we're done, and this is our final answer.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Simplify <InlineMath>(4+5)-(6-2)</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                First, we simplify what's in the parentheses. So, we add 4 to 5
                and subtract 2 from 6 to get <InlineMath>(9)-(4)</InlineMath>.
                Now all that's left to do is distribute the negative sign
                through the second parenthesis.
              </p>
              <p className={styles.text}>
                Since there's only one term, we can just rewrite this expression
                as <InlineMath>9-4</InlineMath>. So, our final answer is{" "}
                <InlineMath>(4+5)-(6-2)=5</InlineMath>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_div} />
    </div>
  );
};
