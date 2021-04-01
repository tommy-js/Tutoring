import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost4621: React.FC = () => {
  const problem1 = "f(x)=4x^3-2x^2-x-6";

  const problem2 = "f(x)=5x^3-2x-7";

  const problem3 = "f(x)=3x^4-2x^3+8x^2-7";

  const solution1_1 = "4(-5)^3-2(-5)^2+5-6=-500-50+5-6=-551";
  const solution1_2 = "4(6)^3-2(6)^2+5-6=864-72+5-6=791";

  const solution2_1 = "f'(x)=15x^2-2";
  const solution2_2 = "15x^2-2=0";
  const solution2_3 = "15x^2=2";
  const solution2_4 = "x^2=\\frac{2}{15}";
  const solution2_5 = "x=\\pm\\sqrt{\\frac{2}{15}}";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Calculus</h1>
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
            Use the Intermediate Value Theorem to determine whether or not there
            is a solution to the function <InlineMath>{problem1}</InlineMath>{" "}
            between x=-5 and x=6.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                The IVT shows that if a function has values of opposite signs on
                some interval, then there must be a root within that interval.
                So to determine whether or not there is a solution to our
                function we just need to calculate the function values at each
                endpoint.
              </p>
              <p className={styles.text}>
                For x=-5, we get <InlineMath>{solution1_1}</InlineMath>. For x=6
                we calculate <InlineMath>{solution1_2}</InlineMath>. Since we
                see a sign-change we know there somewhere on the interval there
                must be a zero.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            Find the local maximum and minimum of the function{" "}
            <InlineMath>{problem2}</InlineMath> using derivatives.{" "}
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                While there are several ways to find the maximum and minimum of
                the function, we are going to use methods of calculus. We will
                take the first derivative and then find where this derivative
                equals zero, which will find where the slope flattens out. That
                gives us the maximum and minimum.
              </p>
              <p className={styles.text}>
                So, taking the derivative of the function, we get{" "}
                <InlineMath>{solution2_1}</InlineMath>. Now, we solve for the
                roots by setting <InlineMath>f'(x)=0</InlineMath>. So, we solve{" "}
                <InlineMath>{solution2_2}</InlineMath>. Adding 2 to each side,
                this becomes <InlineMath>{solution2_3}</InlineMath>. Then,
                dividing by 15, we get <InlineMath>{solution2_4}</InlineMath>.
                Finally, take the square root, and don't forget to include a
                plus and minus: <InlineMath>{solution2_5}</InlineMath>.
              </p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            Determine the inflection points of the function{" "}
            <InlineMath>{problem3}</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                Finding the inflection points of a function requires us to take
                the second derivative.
              </p>
              <p className={styles.text}></p>
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
