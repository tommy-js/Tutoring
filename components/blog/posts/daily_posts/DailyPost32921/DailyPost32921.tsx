import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost32921: React.FC = () => {
  const problem1 = "4^x=127";
  const problem3 = "(x+3)^3";

  const solution1_1 = "\\log_{4}(4^x) = \\log_{4}(127)";
  const solution1_2 = "x\\log_{4}(4)=\\log_{4}(127)";
  const solution1_3 = "\\log_{n}(a^b)=b\\log_{n}(a)";
  const solution1_4 = "\\log_{4}(4)=1";
  const solution1_5 = "x=\\log_{4}(127)\\approx 3.494";

  const solution2_1 = "a_n=a_1+(n-1)d";
  const solution2_2 = "s_n=\\frac{n}{2}(a_1+a_n)";
  const solution2_3 = "a_1=1";
  const solution2_4 = "a_{30}=1+(30-1)*4=117";
  const solution2_5 = "a_{30}=117";
  const solution2_6 = "a_1=1";
  const solution2_7 = "s_{30}=\\frac{30}{2}(1+117)=1,770";

  const binomial_theorem =
    "(x+y)^n=1x^ny^0+\\frac{n}{1}(x^{n-1}y^1)+\\frac{n(n-1)}{1*2}(x^{n-2}y_2)+...+1x^0y^n";
  const solution3_1 =
    "(x+3)^3=x^3+3x^2*3+\\frac{3*2}{2*1}(x*3^2)+\\frac{3*2*1}{1*2*3}(x^03^3)";
  const solution3_2 = "(x+3)^3=x^3+9x^2+27x+27";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>
        Algebra | solving exponential equations, series & Binomial Theorem
      </h1>
      <h2 className={styles.subheader}>Posted on 3/29/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/FH3NfH5vWa4"
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
            1. Solve <InlineMath>{problem1}</InlineMath> for x.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                We need to find some x for which{" "}
                <InlineMath>{problem1}</InlineMath>. To start, we'll take the
                logarithm of base four on each side. This gives us{" "}
                <InlineMath>{solution1_1}</InlineMath>, which can be simplified
                down to <InlineMath>{solution1_2}</InlineMath> after remembering
                the logarithm rule stating that{" "}
                <InlineMath>{solution1_3}</InlineMath>.
              </p>
              <p className={styles.text}>
                From here, we recognize that{" "}
                <InlineMath>{solution1_4}</InlineMath> and so we can drop this
                term and simply have <InlineMath>{solution1_5}</InlineMath>.
              </p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Find the 30th term of the arithmetic sequence 1,5,9,13,... and
            the sum of its arithmetic series at that point.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                To solve this problem we're going to need a few equations. First
                of all, we need to keep in mind the formula to find the n-th
                term of an arithmetic sequence,{" "}
                <InlineMath>{solution2_1}</InlineMath>, where d represents the
                common difference. This is necessary so that we can solve for
                the 30th term and find the sum there. The second piece of the
                puzzle is noting the definition of the sum of the sequence,{" "}
                <InlineMath>{solution2_2}</InlineMath>.
              </p>
              <p className={styles.text}>
                So, to find the 30th term of the sequence, we plug{" "}
                <InlineMath>{solution2_3}</InlineMath>, n=30, and d=4 into the
                equation <InlineMath>{solution2_1}</InlineMath> to get{" "}
                <InlineMath>{solution2_4}</InlineMath>. This answers the first
                part of the question.
              </p>
              <p className={styles.text}>
                Now we need to find the sum of the series at that point. From
                our definition we have that{" "}
                <InlineMath>{solution2_2}</InlineMath>, and we now know that{" "}
                <InlineMath>{solution2_5}</InlineMath>, and that n=30 and{" "}
                <InlineMath>{solution2_6}</InlineMath>. Substituting these
                values in, we get that <InlineMath>{solution2_7}</InlineMath>.
              </p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Use the Binomial Theorem to expand out{" "}
            <InlineMath>{problem3}</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                The Binomial Theorem states that{" "}
                <InlineMath>{binomial_theorem}</InlineMath>. So, plugging in
                values for our problem we see that{" "}
                <InlineMath>{solution3_1}</InlineMath>. We can simplify this
                down to <InlineMath>{solution3_2}</InlineMath>.
              </p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_div} />
    </div>
  );
};
