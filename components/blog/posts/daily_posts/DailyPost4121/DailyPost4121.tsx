import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost4121: React.FC = () => {
  const problem1 = "f(x)=x^3-\\frac{4}{x^2}+5x-5";
  const problem2 = "f(x)=5x^2\\cos(x)";
  const problem3 = "\\sum_{n=1}^{\\infty}\\frac{3^n}{n}(5x-25)^n";

  const solution1_1 = "\\frac{4}{x^2}";
  const solution1_2 = "x\\neq 0";

  const solution2_1 = "(fg)'(x)=f(x)g'(x)+f'(x)g(x)";
  const solution2_2 = "f'(x)=(5x^2)'\\cos(x)+5x^2(\\cos(x))'";
  const solution2_3 = "(5x^2)'=10x";
  const solution2_4 = "(\\cos(x))'=-\\sin(x)";
  const solution2_5 = "f'(x)=10x\\cos(x)-5x^2\\sin(x)";

  const solution3_1 = "L<1";
  const solution3_2 = "\\lim_{n\\to \\infty}|\\frac{a_{n+1}}{a_n}|";
  const solution3_3 =
    "L=\\lim_{n\\to \\infty}|\\frac{3^{n+1}(5x-25)^{n+1}}{n+1}\\cdot\\frac{n}{3^n(5x-25)^n}|";
  const solution3_4 = "\\lim_{n\\to\\infty}|\\frac{3x(5x-25)}{n+1}|";
  const solution3_5 = "3|5x-25|";
  const solution3_6 = "3|5x-25|<1";
  const solution3_7 = "15|x-5|<1";
  const solution3_8 = "|x-5|<\\frac{1}{15}";
  const solution3_9 = "R=\\frac{1}{15}";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>
        Calculus | Continuity, Derivatives & Radius of Convergence
      </h1>
      <h2 className={styles.subheader}>Posted on 4/1/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/ANUESSEGBug"
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
            1. For which values of x is the function{" "}
            <InlineMath>{problem1}</InlineMath> continuous?
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                In order to find where the function f(x) is continuous we only
                need to look for the points at which it is defined. This means
                we're looking for points of discontinuity. The only place where
                this happens is in the <InlineMath>{solution1_1}</InlineMath>{" "}
                term. When x=0 here the function is no longer defined. This
                means that f(x) is continuous for all values{" "}
                <InlineMath>{solution1_2}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Take the derivative of <InlineMath>{problem2}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                Here the most straightforward way of taking the derivative is to
                use the product rule, which states that{" "}
                <InlineMath>{solution2_1}</InlineMath>. So, we can rewrite our
                derivative as <InlineMath>{solution2_2}</InlineMath>.
              </p>
              <p className={styles.text}>
                From here this problem is easy to solve. We know that{" "}
                <InlineMath>{solution2_3}</InlineMath> and{" "}
                <InlineMath>{solution2_4}</InlineMath>. So, putting this all
                together, we get that <InlineMath>{solution2_5}</InlineMath>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Calculate the radius of convergence of the power series{" "}
            <InlineMath>{problem3}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                We'll use the Ratio Test to solve this problem. This test states
                that if <InlineMath>{solution3_1}</InlineMath> for{" "}
                <InlineMath>{solution3_2}</InlineMath>, then the series is
                absolutely convergent. So, plugging in our problem, we get{" "}
                <BlockMath>{solution3_3}</BlockMath>
              </p>
              <p className={styles.text}>
                By simplification, this can be expressed as{" "}
                <InlineMath>{solution3_4}</InlineMath>. Now, we know that the
                limit here tends to 3 as n goes to infinity. This is because the
                n terms become closer and closer as they become large. We can
                therefore rewrite this expression as{" "}
                <InlineMath>{solution3_5}</InlineMath>.
              </p>
              <p className={styles.text}>
                We know that when <InlineMath>{solution3_6}</InlineMath>, the
                series converges. Therefore, factoring out a 5, we get{" "}
                <InlineMath>{solution3_7}</InlineMath>, which once we divide
                gives us <InlineMath>{solution3_8}</InlineMath>. We then get our
                final answer, which is <InlineMath>{solution3_9}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
