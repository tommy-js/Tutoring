import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost41721: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");

  const problem2 = "\\frac{7}{8}=\\frac{y}{24}";
  const problem3 = "0.75-0.4";

  const solution1_1 = "\\frac{2}{2}\\times\\frac{2}{5}=\\frac{4}{10}";

  const solution2_1 = "\\frac{7}{8}";
  const solution2_2 = "\\frac{3\\times 7}{3\\times 8}=\\frac{21}{24}";
  const solution2_3 = "\\frac{21}{24}";
  const solution2_4 = "\\frac{y}{24}";

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
      <h1 className={styles.header}>Arithmetic</h1>
      <h2 className={styles.subheader}>Posted on 4/17/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/LgYmGkCuPTQ"
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
            1. Convert 1/4 and 2/5 to decimals.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>0.25</InlineMath> and <InlineMath>0.4</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>0.33</InlineMath> and <InlineMath>0.5</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>0.2</InlineMath> and <InlineMath>0.95</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>0.1</InlineMath> and <InlineMath>0.4</InlineMath>
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
              <div className={styles.details}>
                <p className={styles.text}>
                  Let's start with 1/4. We'll use a pie-chart to see how this
                  can be described in geometric terms. If we draw a chart with 4
                  different segments and fill in 1, we've shown 1/4
                  geometrically. Then, we can see that this corresponds to 25%
                  of the graph, or 25/100 of it. After all, this is what a
                  percent is: a number out of 100. Now, we just need to converto
                  to a decimal.
                </p>
                <p className={styles.text}>
                  If we take 25/100, we know that dividing by 100 requires us to
                  take our whole number and move the decimal to the left by 2
                  spaces. So, we get that <InlineMath>1/4=0.25</InlineMath>.
                </p>
                <p className={styles.text}>
                  While we could absolutely use this same method for figuring
                  out the decimal representation of 2/5, instead we'll use some
                  basic rules of fractions. If we take the fraction and multiply
                  its numerator and denominator by 2, we would get{" "}
                  <InlineMath>{solution1_1}</InlineMath>. This is because when
                  we multiply a fraction by another fraction, we multiply
                  straight across. So, we would multiply 2 by 2 on the numerator
                  and 2 by 5 on the denominator.
                </p>
                <p className={styles.text}>
                  Now we essentially apply the same reasoning as in our first
                  problem. Since we're dividing 4 by 10, we take the decimal and
                  move it one space to the left, giving us{" "}
                  <InlineMath>0.4</InlineMath> as our decimal representation of
                  2/5.
                </p>
                <p className={styles.text}></p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Find the value of y: <InlineMath>{problem2}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>y=81</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>y=-5</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>y=21</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>y=17</InlineMath>
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
                In order to find the value of y we need to recognize that 3
                times 8 is 24. If we see this, then we can multiply the
                numerator and denominator of the fraction{" "}
                <InlineMath>{solution2_1}</InlineMath> by 3. If we do this, we
                see that <InlineMath>{solution2_2}</InlineMath>. Because the
                denominators of <InlineMath>{solution2_3}</InlineMath> and{" "}
                <InlineMath>{solution2_4}</InlineMath> are the same, we can see
                that <InlineMath>y=21</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Find the value of <InlineMath>{problem3}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>0.29</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>0.35</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>0.13</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>1.24</InlineMath>
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
                There are a few different ways to solve this problem. We could
                try and convert it to a pie-chart to make the solution more
                visually clear, but this may prove difficult given the fact that
                we're starting from a decimal. Instead, we'll multiply the
                numerator and denominator by 100, which will help us convert to
                whole numbers.
              </p>
              <p className={styles.text}>
                Multiplying 0.75 and 0.4 by 100, we get{" "}
                <InlineMath>75-40</InlineMath>. This will make the process a
                little more obvious. Now, subtracting whole numbers may be
                clearer, and so <InlineMath>75-40=35</InlineMath>. Since we had
                originally multiplied the numerator and denominator by 100, we
                need to divide this out again, and in doing so we just need to
                move the decimal place over two spots. This results in{" "}
                <InlineMath>0.35</InlineMath>, our final answer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
