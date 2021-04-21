import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost42121: React.FC = () => {
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");

  const problem2 = "f(x)=x^3\\sin(x^2)";

  const problem_choice_1 = "f'(x)=4x^3\\sin(x^2)";
  const problem_choice_2 = "f'(x)=3x^2\\sin(x^2)+x^3\\cos(x^2)";
  const problem_choice_3 = "f'(x)=3x^2\\sin(x^2)+2x^4\\cos(x^2)";
  const problem_choice_4 = "f'(x)=3x^2\\sin(2x)";

  const solution1 =
    "f'(x)=\\frac{d}{dx}[x^3]\\sin(x^2)+x^3\\frac{d}{dx}[\\sin(x^2)]";
  const solution2 = "\\sin(x^2)";
  const solution3 = "\\frac{d}{dx}[\\sin(x^2)]=2x\\cos(x^2)";
  const solution4 = "f'(x)=3x^2\\sin(x^2)+2x^4\\cos(x^2)";

  function revealProblem2() {
    setProblem2Color("#3c3b3b");
    setProblem2Shadow("none");
  }

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Calculus | Chain & Product Rules</h1>
      <h2 className={styles.subheader}>Posted on 4/21/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/P_BKBHcqzN8"
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
            Take the derivative of the function{" "}
            <InlineMath>{problem2}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>{problem_choice_1}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem_choice_2}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem_choice_3}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem_choice_4}</InlineMath>
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
                This problem requires both the Product Rule and Chain Rule to
                solve. This is because we're multiplying two functions,{" "}
                <InlineMath>x^3</InlineMath> and{" "}
                <InlineMath>sin(x^2)</InlineMath> and also have an embedded
                function within the sin term. So, we'll start with the Product
                Rule so that we can split up our terms.
              </p>
              <p className={styles.text}>
                Taking the Product Rule, we get{" "}
                <InlineMath>{solution1}</InlineMath>. The derivative of{" "}
                <InlineMath>x^3</InlineMath> is easy, as it's simply the Power
                Rule. On the other hand, taking the derivative of{" "}
                <InlineMath>{solution2}</InlineMath> is a bit more complex, as
                it requires using the Chain Rule. When we use this rule, we have
                to take the derivative of the outside function and multiply it
                by the derivative of the inside function. So, for our function
                here, we get <InlineMath>{solution3}</InlineMath>.
              </p>
              <p className={styles.text}>
                Thus, after all this work we can see that{" "}
                <InlineMath>{solution4}</InlineMath>.
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
