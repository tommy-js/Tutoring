import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost42021: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");

  const problem3 = "\\frac{1+i}{1-i}+\\frac{1}{1+i}";

  const solution1_1 = "16,500\\times 0.8=13,200";
  const solution1_2 = "13,200\\times D=11,220";
  const solution1_3 = "D=\\frac{11,220}{13,200}=0.85";

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
      <h1 className={styles.header}>Daily Problem</h1>
      <h2 className={styles.subheader}>Posted on 4/20/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/6GFQ8jYo9xQ"
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
        <h3 className={styles.solutions_header}>Problem & Solution</h3>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            A car that usually costs $16,500 is on sale for 20% off. As part of
            a promotion, everyone who chooses to purchase said vehicle will also
            receive an additional discount on the marked price. If the final
            price of the car was $11,220, what is the additional discount that
            was applied to the marked sale price?
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>32%</li>
              <li className={styles.individual_choice}>19%</li>
              <li className={styles.individual_choice}>15%</li>
              <li className={styles.individual_choice}>26%</li>
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
                  The first thing we need to do is apply the standard 20%
                  discount to the original sale price. Doing so, we see that the
                  discounted price is <InlineMath>{solution1_1}</InlineMath>.
                  Now, we just need to calculate the additional discount on the
                  vehicle. We know that the final price of the vehicle is
                  $11,220, and that the current price after our first discount
                  is $13,200. So, we know that{" "}
                  <InlineMath>{solution1_2}</InlineMath> for some discount D.
                </p>
                <p className={styles.text}>
                  Now, simply dividing by 13,200 from both sides, we get{" "}
                  <InlineMath>{solution1_3}</InlineMath>. This means that the
                  additional discount applied to our vehicle is 15%.
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
