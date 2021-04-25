import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

const triangle = require("../../../../../public/blogs/4-25-21/triangle.png");
const unit_circle = require("../../../../../public/blogs/4-25-21/unit_circle.png");

export const DailyPost42521: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problemGraphics, setProblemGraphics] = useState("blur(7px)");

  const answer1 = "\\frac{14}{3}";
  const answer2 = "\\frac{\\sqrt{2}}{6}";
  const answer3 = "\\frac{5}{\\sqrt{3}}";
  const answer4 = "8.8492";

  const solution1 = "\\tan(\\theta)=\\frac{opposite}{adjacent}";
  const solution2 = "\\tan(30)=\\frac{b}{5}";
  const solution3 = "5\\tan(30)=b";
  const solution4 = "\\tan(30)";
  const solution5 = "\\tan(\\theta)=\\frac{\\sin(\\theta)}{\\cos(\\theta)}";
  const solution6 = "\\frac{\\sqrt{3}}{2}";
  const solution7 = "\\frac{1}{2}";
  const solution8 =
    "\\frac{\\frac{1}{2}}{\\frac{\\sqrt{3}}{2}}=\\frac{1}{2}\\cdot\\frac{2}{\\sqrt{3}}=\\frac{1}{\\sqrt{3}}";
  const solution9 = "b=5\\tan(30)=\\frac{5}{\\sqrt{3}}";

  function revealProblem1() {
    setProblem1Color("#3c3b3b");
    setProblem1Shadow("none");
    setProblemGraphics("blur(0px)");
  }

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>
        SAT Prep | Solving For a Triangle's Side
      </h1>
      <h2 className={styles.subheader}>Posted on 4/25/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/bHUiFr6uaGU"
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
            Solve for b in the triangle.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>{answer1}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{answer2}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{answer3}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{answer4}</InlineMath>
              </li>
            </ol>
            <div className={styles.image_block}>
              <img src={triangle} className={styles.image} />
            </div>
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
                  The first thing we need to do is figure out which of the
                  trigonometric functions we should use to solve this problem.
                  We note the position of the angle in our triangle and the side
                  we're trying to solve for, and decide that neither cosine nor
                  sine will work here. This is because for either of these
                  functions we would need the hypoteneuse in some capacity. Here
                  we only have the opposite side, b, and the adjacent side, 5.
                  So, we see that we will use the tangent function to solve.
                </p>
                <p className={styles.text}>
                  Since <InlineMath>{solution1}</InlineMath>, we see that the
                  expression we are trying to solve for is{" "}
                  <InlineMath>{solution2}</InlineMath>. Multiplying both sides
                  by 5, we get <InlineMath>{solution3}</InlineMath>. The last
                  thing we need to do is figure out what{" "}
                  <InlineMath>{solution4}</InlineMath> equals.
                </p>
                <p className={styles.text}>
                  Remember that because <InlineMath>{solution5}</InlineMath>, we
                  only need to know what cosine and sine of 30 degrees are. I'm
                  not a magician; I don't always remember these angles and I
                  don't expect you to either. If you look up a unit circle you
                  can get the values for these degrees, although the trig values
                  of 30, 45, 60, and 90 degrees really should be memorized at
                  some point.
                </p>
                <div className={styles.image_container}>
                  <img
                    style={{ filter: problemGraphics }}
                    src={unit_circle}
                    className={styles.image}
                  />
                </div>
                <p className={styles.text}>
                  You can see on this unit circle that at the 30 degree mark we
                  have a cosine value of <InlineMath>{solution6}</InlineMath>{" "}
                  and a sine value of <InlineMath>{solution7}</InlineMath>. This
                  means that for tangent of 30 degrees we have{" "}
                  <InlineMath>{solution8}</InlineMath>.
                </p>
                <p className={styles.text}>
                  So, our final answer is <InlineMath>{solution9}</InlineMath>.
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
