import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost33021: React.FC = () => {
  const problem1 = "9+3+1+\\frac{1}{3}+\\frac{1}{9}";
  const solution1_1 = "S_{\\infty}=\\frac{a_1}{1-r}";
  const solution1_2 = "0<|r|<1";
  const solution1_3 = "r=\\frac{1}{3}";
  const solution1_4 = "a_1=9";
  const solution1_5 = "S_{\\infty} = \\frac{9}{1-\\frac{1}{3}}";
  const solution1_6 =
    "S_{\\infty} = \\frac{9}{1-\\frac{1}{3}}=\\frac{9}{\\frac{2}{3}}=9*\\frac{3}{2}=\\frac{27}{2}";

  const problem2 = "7\\cos(\\frac{3t}{4})=6";
  const problem2_2 = "[0, \\pi]";
  const solution2_1 = "\\cos(\\frac{3t}{4})=\\frac{6}{7}";
  const solution2_2 = "\\frac{3t}{4}=\\cos^{-1}(\\frac{6}{7})";
  const solution2_3 = "3t=4\\cos^{-1}(\\frac{6}{7})";
  const solution2_4 = "t = \\frac{4}{3}\\cos^{-1}(\\frac{6}{7})\\approx 0.7215";
  const solution2_5 = "\\pi";
  const solution2_6 = "\\pi\\approx 3.1415";

  const problem3 = "f(x) = \\frac{\\log(4x)}{\\sqrt{7x}}";
  const solution3_1 = "x>0";
  const solution3_2 = "\\log(4x)";
  const solution3_3 = "\\sqrt{7x}";
  const solution3_4 = "(0,\\infty)";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>
        Pre-Calc | Series Convergence, Trigonometric Equations & Function
        Domains domains
      </h1>
      <h2 className={styles.subheader}>Posted on 3/30/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/oO7GhWrdAwU"
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
            1. Find the value the series <InlineMath>{problem1}</InlineMath>{" "}
            converges to.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                In order to solve this problem we need to use the formula{" "}
                <InlineMath>{solution1_1}</InlineMath> for{" "}
                <InlineMath>{solution1_2}</InlineMath>. This allows us to find
                the value a series converges to, provided that it does, in fact,
                converge. We can see in our series that{" "}
                <InlineMath>{solution1_3}</InlineMath>, as each successive term
                decreases by a multiple of one-third. This makes the process
                actually quite simple, as we can just look to substitute in our
                values.
              </p>
              <p className={styles.text}>
                We have that the first term,{" "}
                <InlineMath>{solution1_4}</InlineMath> and that{" "}
                <InlineMath>{solution1_3}</InlineMath>. Thus, our equation
                becomes <InlineMath>{solution1_5}</InlineMath>. Simplifying
                this, we get our final result,{" "}
                <InlineMath>{solution1_6}</InlineMath>.
              </p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Determine t in the equation <InlineMath>{problem2}</InlineMath>{" "}
            within the interval <InlineMath>{problem2_2}</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                We proceed as normal when trying to solve for a variable. Divide
                both sides by 7 to get <InlineMath>{solution2_1}</InlineMath>.
                Then, take the inverse cosine so that we can isolate the
                variable we are trying to solve for. This gives us{" "}
                <InlineMath>{solution2_2}</InlineMath>.
              </p>
              <p className={styles.text}>
                At this point solving for t is simply a matter of standard
                algebraic manipulation. Multiply both sides by 4 to get{" "}
                <InlineMath>{solution2_3}</InlineMath> and then divide by 3 to
                find our final answer of <InlineMath>{solution2_4}</InlineMath>.
                As a final note, we should just check that this value is within
                our interval. We know that our interval is from 0 to{" "}
                <InlineMath>{solution2_5}</InlineMath>. Since{" "}
                <InlineMath>{solution2_6}</InlineMath>, our answer is within the
                interval, and so it is valid.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Determine the domain of <InlineMath>{problem3}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                When trying to find the domain of a function it's more helpful
                to look at what values it is not defined on, rather than ones it
                is. For example, in our function we see that an x-value of zero
                would render it undefined, and so this is not within the domain.
                Likewise, on the real number line, imaginary numbers are not
                defined. This means that square roots with a negative value
                within them are not valid. So, we know that{" "}
                <InlineMath>{solution3_1}</InlineMath>.
              </p>
              <p className={styles.text}>
                Now, we need to ask on what domain the numerator and denominator
                are defined. We know that <InlineMath>{solution3_2}</InlineMath>{" "}
                and <InlineMath>{solution3_3}</InlineMath> are defined on the
                same intervals of <InlineMath>{solution3_1}</InlineMath>. Since
                there is no upper bound, we know that our entire function is
                defined on the domain of <InlineMath>{solution3_4}</InlineMath>.
                Remember that it is important infinity is not written in
                square-brackets here, as it is a concept that can be approached
                in value but never reached.
              </p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_div} />
    </div>
  );
};
