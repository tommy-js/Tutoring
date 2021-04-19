import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost41921: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");

  const problem1 = "\\sin(\\frac{6x^2}{7})=14";
  const problem2 = "\\frac{3!4!}{0!}";
  const problem3_1 = "g(f(x))";
  const problem3_2 = "g(x)=x^2+6x-14";
  const problem3_3 = "f(x)=\\frac{(x+1)^2}{17}";

  const problem1_choice1 = "x=14\\sin^{-1}(\\frac{7}{6})";
  const problem1_choice2 = "x=\\pm\\sqrt{\\frac{7}{6}\\sin^{-1}(14)}";
  const problem1_choice3 = "x=\\sqrt{\\frac{14}{6}}\\sin^{-1}(7)";
  const problem1_choice4 = "\\frac{7}{6}\\sin(14)";

  const solution1_1 = "\\frac{6x^2}{7}=\\sin^{-1}(14)";
  const solution1_2 = "6x^2=7\\sin^{-1}(14)";
  const solution1_3 = "x^2=\\frac{7}{6}\\sin^{-1}(14)";
  const solution1_4 = "x=\\pm\\sqrt{\\frac{7}{6}\\sin^{-1}(14)}";

  const problem2_choice1 = "86";
  const problem2_choice2 = "144";
  const problem2_choice3 = "-79";
  const problem2_choice4 = "208";

  const solution2_1 = "\\frac{3\\times 2\\times 4\\times 3\\times 2}{1}";

  const problem3_choice_1 = "g(f(x))=x^4+16x^3+17x+54";
  const problem3_choice_2 =
    "g(f(x))=\\frac{x^4+4x^3+1}{17}+\\frac{6x^2+6x+12}{289}+14";
  const problem3_choice_3 =
    "g(f(x))=\\frac{x^4+4x^3+6x^2+4x+1}{289}+\\frac{6x^2+12x+6}{17}-14";
  const problem3_choice_4 =
    "g(f(x))=\\frac{x^5+6x^4+16x-14}{289}-\\frac{5x^3+17x}{21}";

  const solution3_1 =
    "f(x)=\\frac{(x+1)^2}{17}=\\frac{(x+1)(x+1)}{17}=\\frac{x^2+2x+1}{17}";
  const solution3_2 =
    "g(f(x))=(\\frac{x^2+2x+1}{17})^2+6(\\frac{x^2+2x+1}{17})-14";
  const solution3_3 =
    "g(f(x))=\\frac{x^4+4x^3+6x^2+4x+1}{289}+\\frac{6x^2+12x+6}{17}-14";

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
        Precalculus | Inverse Trig, Factorials & Functional Composition
      </h1>
      <h2 className={styles.subheader}>Posted on 4/19/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/xJk3CtXyK6Y"
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
            1. Solve <InlineMath>{problem1}</InlineMath> for x.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>{problem1_choice1}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem1_choice2}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem1_choice3}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem1_choice4}</InlineMath>
              </li>
            </ol>
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
              <div className={styles.answer}>
                <h4 className={styles.answer_header}>Answer: </h4>
                <p className={styles.answer_text}></p>
              </div>
              <div className={styles.details}>
                <h4 className={styles.details_header}>Explanation: </h4>
                <p className={styles.text}>
                  To solve this problem we need to isolate the x. First we'll
                  start by taking the inverse sin function on both sides which
                  will separate the x from the sin. Doing so yields{" "}
                  <InlineMath>{solution1_1}</InlineMath>. Now we continue by
                  simply isolating the x, and we see that the easiest way of
                  doing this is by multiplying both sides by 7.
                </p>
                <p className={styles.text}>
                  After multiplying, we get{" "}
                  <InlineMath>{solution1_2}</InlineMath>. Now, divide by 6 to
                  get <InlineMath>{solution1_3}</InlineMath>. All that's left to
                  do is take the square root of both sides to solve for x. Thus,
                  our complicated looking expression simplifies down to{" "}
                  <InlineMath>{solution1_4}</InlineMath>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Simplify <InlineMath>{problem2}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>{problem2_choice1}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem2_choice2}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem2_choice3}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem2_choice4}</InlineMath>
              </li>
            </ol>
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
                The most complicated thing about this problem is keeping in mind
                what <InlineMath>0!</InlineMath> is. If we remember that the
                factorial represents the number of possible ways you can count
                something, <InlineMath>0!=1</InlineMath> would make sense. After
                all, there is only one way to count zero of something.
              </p>
              <p className={styles.text}>
                So, expanding out the numerator and simplifying the denominator,
                we get <InlineMath>{solution2_1}</InlineMath>. After multiplying
                out the numerator, this finally gives us{" "}
                <InlineMath>144</InlineMath>, choice 2 in our problem.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Compose <InlineMath>{problem3_1}</InlineMath> using{" "}
            <InlineMath>{problem3_2}</InlineMath> and{" "}
            <InlineMath>{problem3_3}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>{problem3_choice_1}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem3_choice_2}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem3_choice_3}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem3_choice_4}</InlineMath>
              </li>
            </ol>
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
                We are trying to compose <InlineMath>g(x)</InlineMath> with{" "}
                <InlineMath>f(x)</InlineMath>. This means that we're going to
                take the function <InlineMath>f(x)</InlineMath> and substitute
                it into each variable in <InlineMath>g(x)</InlineMath>. Before
                doing so, we should expand out <InlineMath>f(x)</InlineMath> so
                that it is easier to simplify. Expanding out the numerator of{" "}
                <InlineMath>f(x)</InlineMath>, we see that{" "}
                <InlineMath>{solution3_1}</InlineMath>.
              </p>
              <p className={styles.text}>
                Now that we have the expanded form of{" "}
                <InlineMath>f(x)</InlineMath>, we substitute and find that{" "}
                <InlineMath>{solution3_2}</InlineMath>. This is a bit of a messy
                problem, and there's a lot of simplification needed here. Still,
                we can expand and distribute out to get{" "}
                <InlineMath>{solution3_3}</InlineMath>. I strongly recommend
                working through this step and simplifying everything out
                yourself. Make sure you know how to do it!
              </p>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
