import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost32521: React.FC = () => {
  const problem1 = "\\log(x+5)-\\log(3)=2";
  const solution1_1 = "\\log(a)-\\log(b)=\\log(\\frac{a}{b})";
  const solution1_2 = "\\log(\\frac{x+5}{3})=2";
  const solution1_3 = "\\frac{x+5}{3}=10^2";
  const solution1_4 = "x+5=300";

  const quadratic = "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}";
  const solution3_1 = "x=\\frac{-5\\pm\\sqrt{5^2-4(1)(9)}}{2(1)}";
  const solution3_2 = "x=\\frac{-5\\pm\\sqrt{25-36}}{2}";
  const solution3_3 = "x=\\frac{-5\\pm\\sqrt{-11}}{2}";
  const solution3_4 = "\\sqrt{-b}=i\\sqrt{b}";
  const solution3_5 = "x=\\frac{5\\pm i \\sqrt{11}}{2}";
  const solution3_6 = "x=\\frac{5+i\\sqrt{11}}{2}";
  const solution3_7 = "x=\\frac{5-i\\sqrt{11}}{2}";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Header</h1>
      <h2 className={styles.subheader}>Posted on [date]</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/bfDO_iSIHCs"
          loop={true}
          playing={true}
          controls={false}
          volume={0}
          muted={true}
          width={"100%"}
          className={styles.player}
        />
      </div>
      <div className={styles.solutions_block}>
        <h3 className={styles.solutions_header}>Problems & Solutions</h3>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            1. solve <InlineMath>{problem1}</InlineMath> for x.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                First we want to combine the logs to simplify our problem. We do
                so using the rule that <InlineMath>{solution1_1}</InlineMath> to
                get <InlineMath>{solution1_2}</InlineMath>.
              </p>
              <p className={styles.text}>
                Now, we raise each side to the base of 10, which will cancel out
                with the logarithm to give us{" "}
                <InlineMath>{solution1_3}</InlineMath>.
              </p>
              <p className={styles.text}>
                {" "}
                Multiplying both sides by 3, we get{" "}
                <InlineMath>{solution1_4}</InlineMath>. Now, we subtract 5 from
                both sides and finally get <InlineMath>x=295</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            Simplify <InlineMath>7-6i+4+3i</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                All we need to do is add and subtract terms as normal to get{" "}
                <InlineMath>11-3i</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            Solve <InlineMath>x^2+5x+9</InlineMath> for roots.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                This problem is easiest solved by use of the quadratic formula,{" "}
                <BlockMath>{quadratic}</BlockMath>
              </p>
              <p className={styles.text}>
                We substitute values in to find{" "}
                <InlineMath>{solution3_1}</InlineMath>. This simplifies further
                down to <InlineMath>{solution3_2}</InlineMath>. Now all that's
                left to do is finish simplifying.
              </p>
              <p className={styles.text}>
                We can reduce our equation down to{" "}
                <InlineMath>{solution3_3}</InlineMath>, and then since we know
                that <InlineMath>{solution3_4}</InlineMath>, we can rewrite this
                as <InlineMath>{solution3_5}</InlineMath>.
              </p>
              <p className={styles.text}>
                So, our solutions are <InlineMath>{solution3_6}</InlineMath> and{" "}
                <InlineMath>{solution3_7}</InlineMath>.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_div} />
    </div>
  );
};
