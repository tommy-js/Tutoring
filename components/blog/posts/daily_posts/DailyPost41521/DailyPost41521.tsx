import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost41521: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");

  const problem1 = "4x^2+15x=-8";

  const problem1_1 = "x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}";
  const solution1_1 = "x=\\frac{-15\\pm \\sqrt{15^2-4(4)(8)}}{2(4)}";
  const solution1_2 = "x=\\frac{-15\\pm\\sqrt{97}}{8}";
  const solution1_3 = "x=\\frac{-15+\\sqrt{97}}{8}";
  const solution1_4 = "x=\\frac{-15-\\sqrt{97}}{8}";

  const problem1_choice_1 = "x=\\frac{-72+\\sqrt{34}}{2}";
  const problem1_choice_2 = "x=\\frac{-72-\\sqrt{34}}{2}";
  const problem1_choice_3 = "x=\\frac{14}{9}";

  const solution2_1 = "(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2})";
  const solution2_2 = "(\\frac{-4+6}{2},\\frac{2+14}{2})";
  const solution2_3 = "(1,8)";
  const solution2_4 = "\\frac{5+15}{2}";

  const solution3_1 = "\\frac{5\\times 4 + 8\\times 3}{7}";
  const solution3_2 = "\\frac{44}{7}";

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
        SAT Prep | Quadratic Equations, Circle Midpoint & Word Problems
      </h1>
      <h2 className={styles.subheader}>Posted on 4/15/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/ArxRYHhd_2o"
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
            1. Find all the solutions to the equation{" "}
            <InlineMath>{problem1}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>{problem1_choice_1}</InlineMath> and{" "}
                <InlineMath>{problem1_choice_2}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=17</InlineMath>, <InlineMath>y=134</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{solution1_3}</InlineMath> and{" "}
                <InlineMath>{solution1_4}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem1_choice_3}</InlineMath>,{" "}
                <InlineMath>x=142</InlineMath>
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
                <p className={styles.answer_text}>
                  <InlineMath>{solution1_3}</InlineMath> and{" "}
                  <InlineMath>{solution1_4}</InlineMath>
                </p>
              </div>
              <div className={styles.details}>
                <h4 className={styles.details_header}>Explanation: </h4>
                <p className={styles.text}>
                  First, we will want to get our equation in the form{" "}
                  <InlineMath>ax^2+bx+c=0</InlineMath>, since we're trying to
                  solve for x. So, add 8 to both sides to get{" "}
                  <InlineMath>4x^2+15x+8=0</InlineMath>. We can now decide how
                  we're going to solve this equation. Factoring is a
                  possibility, but this would likely be extremely messy and
                  difficult. Would you want to factor this? It would probably be
                  better to use the quadratic formula, so this is what we're
                  going to do. Remember, the quadratic formula states that{" "}
                  <InlineMath>{problem1_1}</InlineMath>, where a, b, and c
                  represent the coefficients on our quadratic equation.
                </p>
                <p className={styles.text}>
                  So, plugging in, we get <InlineMath>{solution1_1}</InlineMath>
                  . Finding the solution here is mostly a matter of
                  simplification. When dealing with radicals like this, make
                  sure to have a calculator handy. After simplifying, we get{" "}
                  <InlineMath>{solution1_2}</InlineMath>.
                </p>
                <p className={styles.text}>
                  Therefore, the solutions to our problem are{" "}
                  <InlineMath>{solution1_3}</InlineMath> and{" "}
                  <InlineMath>{solution1_4}</InlineMath>. If any part of this
                  process didn't make sense to you, make sure to review your
                  quadratic formulas and methods of solving for x.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. A circle in the xy-plane has a diameter with endpoints at{" "}
            <InlineMath>(-4,2)</InlineMath> and <InlineMath>(6,14)</InlineMath>.
            Which of the following is the center of the circle?
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>(-5,4)</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>(1,8)</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>(3,7)</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>(12,6)</InlineMath>
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
              <div className={styles.answer}>
                <h4 className={styles.answer_header}>Answer: </h4>
                <p className={styles.answer_text}>
                  <InlineMath>(1,8)</InlineMath>
                </p>
              </div>
              <div className={styles.details}>
                <h4 className={styles.details_header}>Explanation: </h4>
                <p className={styles.text}>
                  There are many ways to solve this problem, but we are going to
                  use one of the simplest methods that only takes into account
                  the endpoints. If we have endpoints{" "}
                  <InlineMath>(x_1,y_1)</InlineMath> and{" "}
                  <InlineMath>(x_2,y_2)</InlineMath>, the center of the cirle
                  will have coordinates <InlineMath>{solution2_1}</InlineMath>.
                  The logic for this is fairly simple: we're essentially finding
                  the average of each point. So, if we had{" "}
                  <InlineMath>x_1=5</InlineMath> and{" "}
                  <InlineMath>x_2=15</InlineMath> it would make sense that the
                  point exactly between them is <InlineMath>x=10</InlineMath>,
                  or rather <InlineMath>{solution2_4}</InlineMath>.
                </p>
                <p className={styles.text}>
                  So, substituting values in, we get that the coordinates of the
                  circle's center are <InlineMath>{solution2_2}</InlineMath>.
                  After simplifying, this becomes{" "}
                  <InlineMath>{solution2_3}</InlineMath>, the center of the
                  circle.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. John bought a bunch of music posters, each costing 5 dollars.
            Noah purchased several different posters, each costing 8 dollars. If
            the ratio of the number of posters John purchased to the number of
            posters Noah purchased was 4 to 3, what was the average cost of each
            poster they purchased?
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>$14.86</li>
              <li className={styles.individual_choice}>$7.25</li>
              <li className={styles.individual_choice}>$6.29</li>
              <li className={styles.individual_choice}>$5.95</li>
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
              <div className={styles.answer}>
                <h4 className={styles.answer_header}>Answer: </h4>
                <p className={styles.answer_text}>$6.29</p>
              </div>
              <div className={styles.details}>
                <h4 className={styles.details_header}>Explanation: </h4>
                <p className={styles.text}>
                  We need to average the cost per poster, but to do this we'll
                  also need to take into account the ratio of purchased posters.
                  Since we know that John is going to purchase 4/3 as many
                  posters as Noah, one way we could do this is say that John
                  buys 4 posters, Noah buys 3, and then divide by the total
                  number of posters they've both purchased. This will give us
                  the average value of each poster.
                </p>
                <p className={styles.text}>
                  So, we can write this mathematically as{" "}
                  <InlineMath>{solution3_1}</InlineMath>. After simplifying the
                  top this reduces down to{" "}
                  <InlineMath>{solution3_2}</InlineMath>, which still isn't a
                  pretty fraction, but at least gets us closer to an
                  understandable answer. Plugging this into a calculator gives
                  us roughly 6.29, and so this is the average cost of each
                  poster they purchased.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
