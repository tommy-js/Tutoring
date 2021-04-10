import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost41221: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");

  const problem1_1 = "\\frac{-3}{6}";
  const problem1_2 = "\\frac{-15}{-5}";

  const problem2_1 = "5.75+1.25";
  const problem2_2 = "7.9+2.5";

  const problem3_1 = "\\frac{7}{4}";
  const problem3_2 = "\\frac{9}{3}";

  const solution1_1 = "-\\frac{1}{2}";
  const solution1_2 = "\\frac{-3}{-1}";
  const solution1_3 = "\\frac{3}{1}";
  const solution1_4 = "3";

  const solution2_1 = "5 + 0.75 + 1 + 0.25 + 2 + 0.5";
  const solution2_2 = "5 + 1 + 2 + 0.75 + 0.25 + 0.5";
  const solution2_3 = "5 + 1 + 2 = 8";
  const solution2_4 = "0.75 + 0.25 = 1";
  const solution2_5 = "1 + 0.5 = 1.5";
  const solution2_6 = "8 + 1.5";

  const solution3_1 = "\\frac{4}{4}";
  const solution3_2 = "\\frac{9}{3}\\times\\frac{4}{4}";
  const solution3_3 = "\\frac{9\\times 4}{3\\times 4}=\\frac{36}{12}";
  const solution3_4 =
    "\\frac{7}{4}\\times\\frac{3}{3}=\\frac{7\\times 3}{4\\times 4}=\\frac{21}{12}";

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
      <h2 className={styles.subheader}>Posted on 4/12/21</h2>
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
            1. Find <InlineMath>{problem1_1}</InlineMath> and{" "}
            <InlineMath>{problem1_2}</InlineMath>
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
                Starting with <InlineMath>{problem1_1}</InlineMath>, we're
                looking to simplify this expression as far as we can. Since we
                know that both 3 and 6 are divisible by 3, we divide this value
                out to get 1 in the numerator and 2 in the denominator. When we
                have a negative in the numerator or denominator we can drop it
                out to the front of the fraction, so our final, fully simplified
                expression is <InlineMath>{solution1_1}</InlineMath>.
              </p>
              <p className={styles.text}>
                Moving on to <InlineMath>{problem1_2}</InlineMath>, we're again
                going to look for terms that divide both the numerator and
                denominator. Since 5 divides 5 and 5 also divides 15, we'll use
                this number. 15 divided by 5 is 3, while 5 divided by 5 is 1, so
                we can simplify down to <InlineMath>{solution1_2}</InlineMath>.
              </p>
              <p className={styles.text}>
                Now, when we divide a negative by a negative they cancel out,
                just like when you multiply a negative by a negative. So we can
                simply drop the negatives. This gives us{" "}
                <InlineMath>{solution1_3}</InlineMath>. Remember that when we
                divide something by 1 the result is just whatever whole number
                is on the numerator, so we can just drop this, leaving{" "}
                <InlineMath>{solution1_4}</InlineMath> as our final, simplified
                result.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Determine <InlineMath>{problem2_1}</InlineMath> and{" "}
            <InlineMath>{problem2_2}</InlineMath>.
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
                This problem is easiest solved by going one step at a time and
                simplifying as much as possible. For our first step we'll
                separate out the decimals from the whole numbers. Doing so, we
                get the expression <InlineMath>{solution2_1}</InlineMath>.
              </p>
              <p className={styles.text}>
                Now, we want to move all the whole numbers to one side of the
                problem and the decimals to the other. This will make adding
                easier and simpler for us: we should always try to make our
                problems more visually obvious! Shuffling things around a bit,
                we get <BlockMath>{solution2_2}</BlockMath>
              </p>
              <p className={styles.text}>
                We add the whole numbers on the left and the decimals on the
                right. <InlineMath>{solution2_3}</InlineMath>, an easy addition
                to do. The decimal addition is a bit harder, but we just go
                term-by-term. We can see that{" "}
                <InlineMath>{solution2_4}</InlineMath>, and then{" "}
                <InlineMath>{solution2_5}</InlineMath>.
              </p>
              <p className={styles.text}>
                So, after all this addition, we're just left to figure out{" "}
                <InlineMath>{solution2_6}</InlineMath>. If you have trouble with
                this, you can again separate out into whole numbers and
                decimals, so that you have <InlineMath>8+1+0.5</InlineMath>.
                Now, just add the whole numbers to get{" "}
                <InlineMath>9+0.5</InlineMath>, and then after adding we just
                get <InlineMath>9.5</InlineMath>, the answer to our question.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Rewrite <InlineMath>{problem3_1}</InlineMath> and{" "}
            <InlineMath>{problem3_2}</InlineMath> as fractions with their least
            common denominator.
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
                We're looking to figure out how to represent these fractions
                when they have their least common denominator. Maybe the
                simplest way to find the least common denominator between two
                fractions is to take the denominator of one and multiply both
                the numerator and denominator of the other fraction by it. For
                example, taking <InlineMath>{problem3_1}</InlineMath>, we
                multiply <InlineMath>{problem3_2}</InlineMath> by{" "}
                <InlineMath>{solution3_1}</InlineMath>. Remember that because
                we're multiplying the fraction by{" "}
                <InlineMath>{solution3_1}</InlineMath>, it's the same as
                multiplying by 1, so only its appearance changes, not its value.
              </p>
              <p className={styles.text}>
                When we take <InlineMath>{solution3_2}</InlineMath>, we multiply
                across the numerator and denominator, giving us{" "}
                <InlineMath>{solution3_3}</InlineMath>. Now, going in the
                opposite direction, we use the denominator of{" "}
                <InlineMath>{problem3_2}</InlineMath> and so multiply{" "}
                <InlineMath>{solution3_4}</InlineMath>. So, we've found the
                common denominator between these two fractions, and we're done
                with the problem.
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
