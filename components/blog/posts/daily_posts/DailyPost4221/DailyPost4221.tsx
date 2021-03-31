import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost4221: React.FC = () => {
  const problem2_1 = "4^2";
  const problem2_2 = "(\\frac{5}{2})^2";
  const problem2_3 = "(-6)^2";
  const problem2_4 = "-(7)^2";

  const problem3_1 = "\\sqrt{9}";
  const problem3_2 = "\\sqrt{5\\cdot 5}";
  const problem3_3 = "\\sqrt{16}";
  const problem3_4 = "\\sqrt{4^2}";

  const solution2_1 = "a^2=a\\times a";
  const solution2_2 = "4^2=4\\times 4 = 16";
  const solution2_3 = "(\\frac{5}{2})(\\frac{5}{2})=\\frac{25}{4}";
  const solution2_4 = "(-6)(-6)";
  const solution2_5 = "(-6)^2=36";
  const solution2_6 = "-(7)^2=-(7)(7)";
  const solution2_7 = "-(7)^2=-(7)(7)=-49";

  const solution3_1 = "3\\times 3 = 9";
  const solution3_2 = "\\sqrt{9}=3";
  const solution3_3 = "\\sqrt{5^2}";
  const solution3_4 = "\\sqrt{5\\cdot 5}=5";
  const solution3_5 = "4\\times 4 = 16";
  const solution3_6 = "\\sqrt{16}=4";
  const solution3_7 = "\\sqrt{4^2}=4";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Arithmetic </h1>
      <h2 className={styles.subheader}>Posted on 3/31/21</h2>
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
            Find the greatest common factor of 34 and 68.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                What we need to do here is find all the values that divide 34
                and 68. Then we will compare these values to find the largest
                one, which will be our greatest common denominator. So, for 34
                we know that it is divisible by 2 and 17. Now, we don't need to
                find all the divisors of 68 because we're only looking for terms
                that divide both numbers. We only need to test the numbers that
                divide 34.
              </p>
              <p className={styles.text}>
                Interestingly, we have that 68 is divisible by both terms.
                68/2=34 and 68/17=4. This means that the greatest common factor
                of both 34 and 68 is 17.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            Determine <InlineMath>{problem2_1}</InlineMath>,{" "}
            <InlineMath>{problem2_2}</InlineMath>,{" "}
            <InlineMath>{problem2_3}</InlineMath>, and{" "}
            <InlineMath>{problem2_4}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                We start with <InlineMath>{problem2_1}</InlineMath>. Remember
                that <InlineMath>{solution2_1}</InlineMath>, so,{" "}
                <InlineMath>{solution2_2}</InlineMath>.
              </p>
              <p className={styles.text}>
                Our second problem is a bit more complicated. When we square
                fractions we need to apply fraction multiplication rules.
                Multiplying fractions requires us to multiply across the
                numerator and denominator of the fraction. So, for{" "}
                <InlineMath>{problem2_2}</InlineMath>, we have{" "}
                <InlineMath>{solution2_3}</InlineMath>.
              </p>
              <p className={styles.text}>
                For <InlineMath>{problem2_3}</InlineMath>, we need to keep in
                mind the negative value and pay attention to the parentheses. As
                in our first example, this can be rewritten as{" "}
                <InlineMath>{solution2_4}</InlineMath>. Since a negative times a
                negative gives a positive, this simplifies down to{" "}
                <InlineMath>{solution2_5}</InlineMath>.
              </p>
              <p className={styles.text}>
                The final problem here is another slightly tricky one. The
                negative value is outside the parentheses, so it can be
                rewritten as <InlineMath>{solution2_6}</InlineMath>. Now it's
                simply a matter of multiplying the values out. Our final answer
                is <InlineMath>{solution2_7}</InlineMath>.
              </p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            Determine <InlineMath>{problem3_1}</InlineMath>,{" "}
            <InlineMath>{problem3_2}</InlineMath>,{" "}
            <InlineMath>{problem3_3}</InlineMath>, and{" "}
            <InlineMath>{problem3_4}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                Starting with <InlineMath>{problem3_1}</InlineMath>, we're
                looking for a number that when multiplied with itself gives the
                value 9. Since <InlineMath>{solution3_1}</InlineMath>, 3 is the
                number we're looking for. So finally,{" "}
                <InlineMath>{solution3_2}</InlineMath>.
              </p>
              <p className={styles.text}>
                For the second problem, we have{" "}
                <InlineMath>{problem3_2}</InlineMath>. Since we're multiplying
                the same number together within the radical, we can rewrite this
                as <InlineMath>{solution3_3}</InlineMath>. Now, because the
                square and square root are inverse operations, they cancel out,
                leaving us with <InlineMath>{solution3_4}</InlineMath>.
              </p>
              <p className={styles.text}>
                Moving on to <InlineMath>{problem3_3}</InlineMath>, we're again
                looking for a number than when multiplied by itself gives the
                value 16. This is easily found to be 4, since{" "}
                <InlineMath>{solution3_5}</InlineMath>. So, this gives us our
                answer <InlineMath>{solution3_6}</InlineMath>.
              </p>
              <p className={styles.text}>
                For the final problem, we again keep in mind that the square
                root and squaring a number are opposite functions. That is, one
                cancels out the other. So,{" "}
                <InlineMath>{solution3_7}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
