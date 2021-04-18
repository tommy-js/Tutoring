import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost41821: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");

  const solution1_1 = "200\\times 50=10,000";
  const solution1_2 = "10,000\\times 0.5=5,000";

  const solution3_1 = "V=3m\\times 25cm";

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
        Algebra | Word Problems & Perfect Square Factoring
      </h1>
      <h2 className={styles.subheader}>Posted on 4/18/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/6RQqlQrI-gI"
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
            1. A factory produces bottles worth $0.5 each. 50 people work in the
            factory and each of them make 200 bottles per day. What is the total
            value of the bottles produced daily?
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>$2,500</li>
              <li className={styles.individual_choice}>$10,000</li>
              <li className={styles.individual_choice}>$5,000</li>
              <li className={styles.individual_choice}>$500</li>
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
                  We see that there are 50 people working, each of them making
                  200 bottles individually. This means that for the entire
                  factory <InlineMath>{solution1_1}</InlineMath> bottles are
                  made each day. Then, because each bottle sells for $0.50, we
                  know that the total value of bottles produced daily is{" "}
                  <InlineMath>{solution1_2}</InlineMath>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Factor the polynomial <InlineMath>a^2-2ab+b^2</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>(a-b)^2</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>(a+b)^2</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>(a-2b)^2</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>(2a+2b)^2</InlineMath>
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
                To factor this, we need to look for terms that multiply to{" "}
                <InlineMath>b^2</InlineMath> and add to{" "}
                <InlineMath>-2ab</InlineMath>. We see that if we multiply{" "}
                <InlineMath>(b)(b)</InlineMath> or{" "}
                <InlineMath>(-b)(-b)</InlineMath> we'll get{" "}
                <InlineMath>b^2</InlineMath>, however since the second term in
                our polynomial is negative we'll take the second option and try
                it.
              </p>
              <p className={styles.text}>
                Let's try <InlineMath>(a-b)^2</InlineMath>. If we expand this
                out and distribute, it becomes{" "}
                <InlineMath>(a-b)(a-b)=a^2-ab-ba+b^2=a^2-2ab+b^2</InlineMath>.
                Since it matches the polynomial we were looking to factor, we
                know that the factored form is <InlineMath>(a-b)^2</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. James is doing some spring cleaning and has a large box with a
            base area of 3 square meters and a height of 25 centimeters. He's
            trying to figure out how much of his stuff he can fit into this box.
            Help him out by figuring out the volume of the box.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>V=25m</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>V=2.5m</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>V=0.75m</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>V=1.25m</InlineMath>
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
                The most important part of solving unit problems like this one
                is to make sure that the units are consistent. For this problem,
                we're trying to calculate the volume of a box. Since volume of a
                box is given as length*width*height, we can do the math as
                follows: <InlineMath>{solution3_1}</InlineMath>. Note that the
                3m is the length times the width of the base, since it
                corresponds to the base area.
              </p>
              <p className={styles.text}>
                Now the only thing we need to keep track of is the units, as
                previously mentioned. We'll convert centimeters to meters in
                order to be consistent. We see that 25cm is 0.25m, so we can
                rewrite our equation as{" "}
                <InlineMath>V=3m*0.25m=0.75m</InlineMath>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
