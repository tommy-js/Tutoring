import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost4421: React.FC = () => {
  const problem1_1 = "f(x)=\\sqrt{4x+7}";
  const problem1_2 = "g(x)=2x^2-5";
  const problem1_3 = "(g\\circ f)(x)";

  const problem2 = "f(x)=x^2-4x+36";

  const problem3 = "f(x)=x^2+7x-4";

  const solution1_1 = "(g\\circ f)(x)=2(\\sqrt{4x+7})^2-5";
  const solution1_2 = "(g\\circ f)(x)=2(4x+7)-5";
  const solution1_3 = "(g\\circ f)(x)=8x+7-5=8x+2";

  const solution2_1 = "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}";
  const solution2_2 = "x=\\frac{4\\pm\\sqrt{(-4)^2-4(1)(36)}}{2(1)}";
  const solution2_3 =
    "x=\\frac{4\\pm\\sqrt{16-144}}{2}=\\frac{4\\pm\\sqrt{-128}}{2}";
  const solution2_4 = "\\sqrt{-128}=\\sqrt{-64}\\sqrt{2}=8i\\sqrt{2}";
  const solution2_5 = "x=\\frac{4\\pm 8i\\sqrt{2}}{2}=2\\pm 4i\\sqrt{2}";

  const solution3_1 = "y=x^2+7x-4";
  const solution3_2 = "x=y^2+7y-4";
  const solution3_3 = "y^2+7y=x+4";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>
        Precalculus | Function Composition, Complex Roots & Function Inverses
      </h1>
      <h2 className={styles.subheader}>Posted on 4/4/21</h2>
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
            1. If <InlineMath>{problem1_1}</InlineMath> and{" "}
            <InlineMath>{problem1_2}</InlineMath>, find{" "}
            <InlineMath>{problem1_3}</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                In order to solve this problem we substitute f(x) into g(x).
                Doing so, we get <InlineMath>{solution1_1}</InlineMath>. The
                square and square root cancels to give us{" "}
                <InlineMath>{solution1_2}</InlineMath>. Then, all we have to do
                is simplify down to finally get{" "}
                <InlineMath>{solution1_3}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Find all the complex roots of the function{" "}
            <InlineMath>{problem2}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                When we're looking for the complex roots we don't want to try
                and factor, but rather use the quadratic formula,{" "}
                <InlineMath>{solution2_1}</InlineMath>. This will make it fairly
                easy to get our result.
              </p>
              <p className={styles.text}>
                So, we substitute in values to get{" "}
                <InlineMath>{solution2_2}</InlineMath>. This can be simplified
                down to <InlineMath>{solution2_3}</InlineMath>. Now, since we
                have a negative value in the square root, we know we're going to
                have two imaginary values.
              </p>
              <p className={styles.text}>
                We can simplify the square root further by splitting our values
                up as <InlineMath>{solution2_4}</InlineMath>. This allows us to
                get our final values of <InlineMath>{solution2_5}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Determine if the inverse of the function{" "}
            <InlineMath>{problem3}</InlineMath> is also a function.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                In order to find the inverse of a function we swap x and y. For
                the function <InlineMath>{solution3_1}</InlineMath>, we then get{" "}
                <InlineMath>{solution3_2}</InlineMath>. We add 4 to both sides
                for the purpose of simplification to obtain{" "}
                <InlineMath>{solution3_3}</InlineMath>.
              </p>
              <p className={styles.text}>
                We're now going to use the process of completing the square to
                solve for y.{" "}
              </p>
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
