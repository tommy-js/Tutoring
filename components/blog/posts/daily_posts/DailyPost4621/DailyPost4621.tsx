import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost4621: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");

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

  const solution3_1 = "f'(x)=12x^3-6x^2+16x";
  const solution3_2 = "f''(x)=36x^2-12x+16";
  const solution3_3 = "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}";
  const solution3_4 = "x=\\frac{12\\pm\\sqrt{144-4(36)(16)}}{2(36)}";
  const solution3_5 = "x=\\frac{12\\pm\\sqrt{-2160}}{72}";

  function revealProblem1() {
    setProblem1Color("#3c3b3b");
    setProblem1Shadow("none");
  }

  function revealProblem2() {
    setProblem2Color("#3c3b3b");
    setProblem2Shadow("none");
  }

  function revealProblem3() {
    setProblem3Color("#3c3b3b");
    setProblem3Shadow("none");
  }

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>
        Calculus | Intermediate Value Theorem, Maximums & Minimums & Inflection
        Points
      </h1>
      <h2 className={styles.subheader}>Posted on 4/6/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/xWYuotP9a2s"
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
            1. Use the Intermediate Value Theorem to determine whether or not
            there is a solution to the function{" "}
            <InlineMath>{problem1}</InlineMath> between x=-5 and x=6.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <button
              className={styles.solution_button}
              onClick={() => revealProblem1()}
            >
              View Solution
            </button>
            <div
              className={styles.solution}
              style={{ color: problem1Color, textShadow: problem1Shadow }}
            >
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
            2. Find the local maximum and minimum of the function{" "}
            <InlineMath>{problem2}</InlineMath> using derivatives.{" "}
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <button
              className={styles.solution_button}
              onClick={() => revealProblem2()}
            >
              View Solution
            </button>
            <div
              className={styles.solution}
              style={{ color: problem2Color, textShadow: problem2Shadow }}
            >
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
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Determine the inflection points of the function{" "}
            <InlineMath>{problem3}</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <button
              className={styles.solution_button}
              onClick={() => revealProblem3()}
            >
              View Solution
            </button>
            <div
              className={styles.solution}
              style={{ color: problem3Color, textShadow: problem3Shadow }}
            >
              <p className={styles.text}>
                This is actually somewhat of a trick question, and we'll see why
                in a minute. Finding the inflection points of a function
                requires us to take the second derivative. Taking the first
                derivative, we see simply by the Power Rule that{" "}
                <InlineMath>{solution3_1}</InlineMath>. Then, going one step
                further, <InlineMath>{solution3_2}</InlineMath>. Now, we need to
                solve for the roots of this quadratic, which will give us the
                points of inflection.
              </p>
              <p className={styles.text}>
                To do so, we'll use the Quadratic Formula, which says that{" "}
                <InlineMath>{solution3_3}</InlineMath>. The variables a, b, and
                c here refer to the coefficients on our quadratic equation. We
                substitute in to get <InlineMath>{solution3_4}</InlineMath>. Now
                we see that something strange is happening. If we simplify our
                expression we see that we get{" "}
                <InlineMath>{solution3_5}</InlineMath>.
              </p>
              <p className={styles.text}>
                What does it mean to have a negative value in the square root
                here? Well, it means that we have only complex values for
                solutions to the quadratic. Effectively, there are no real
                values that satisfy this equation. In simpler terms, it means
                that there are no real solutions, and therefore no inflection
                points to the function. So, it's a trick question, but it does
                show you how to go about proving that a function has no
                inflection points.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
