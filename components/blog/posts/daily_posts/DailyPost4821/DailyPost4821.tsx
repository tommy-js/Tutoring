import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost4821: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");

  const problem3_2 = "\\frac{2}{13}";
  const problem3_3 = "\\frac{2x}{3x-1}";

  const solution1_1 = "4,500=4.5\\times 10^3";
  const solution1_2 = "4.9\\times 10^x";
  const solution1_3 = "4.9\\times 10^9=4,900,000,000";
  const solution1_4 = "4.9\\times 10^9";
  const solution1_5 = "6.3\\times 10^x";
  const solution1_6 = "6.3\\times 10^{-6}";

  const solution3_1 = "c=\\frac{c}{1}";
  const solution3_2 = "\\frac{1}{12}";
  const solution3_3 = "\\frac{13}{2}";
  const solution3_4 = "\\frac{3x-1}{2x}";

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
        Algebra | Scientific Notation, Absolute Value & Reciprocals
      </h1>
      <h2 className={styles.subheader}>Posted on 4/8/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/lapR4wv7zW8"
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
            1. Rewrite <InlineMath>4,900,000,000</InlineMath> and{" "}
            <InlineMath>0.0000063</InlineMath> in Scientific Notation.
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
                Rewriting these values into Scientific Notation requires us to
                remember what is means to be in this form in the first place.
                Recall that if we have some expression, for example{" "}
                <InlineMath>4,500</InlineMath>, we can rewrite this into
                Scientific Notation by taking the first number and then
                multiplying it by 10, which we raise to a power. So,{" "}
                <InlineMath>{solution1_1}</InlineMath>. This isn't some fancy,
                meaningless statement: if we raise 10 to the power 3 and
                multiply it by 4.5 we will get 4,500. It's a shorthand for the
                original value, which becomes very useful as we deal with
                expressions that have a lot of terms.
              </p>
              <p className={styles.text}>
                So for our example of <InlineMath>4,900,000,000</InlineMath>, we
                take the first and second numbers and rewrite the expression as{" "}
                <InlineMath>{solution1_2}</InlineMath>. Now all we need to do is
                figure out what that x-value is. To do this we just need to
                count up all the spaces between the decimal and the end of the
                expression. In this case, x is 9, since{" "}
                <InlineMath>{solution1_3}</InlineMath>. So, the Scientific
                Notation form of <InlineMath>4,900,000,000</InlineMath> is{" "}
                <InlineMath>{solution1_4}</InlineMath>.
              </p>
              <p className={styles.text}>
                Of course, this can go the other way, too, and work for very
                small values. Our second problem asks us to find the Scientific
                Notation form of <InlineMath>0.0000063</InlineMath>. All that's
                necessary to figure this out is to take the final few values in
                the decimal and rewrite the expression as{" "}
                <InlineMath>{solution1_5}</InlineMath>. Now, count the values
                necessary to get from the decimal point to the position of our
                decimal in our Scientific Notation form. The only tricky part of
                this is that we're now moving backwards instead of forwards. We
                count up 6 moves in the negative direction, meaning that x=-6.
                So, we can rewrite <InlineMath>0.0000063</InlineMath> in
                Scientific Notation as <InlineMath>{solution1_6}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Find <InlineMath>-|-4|</InlineMath>,{" "}
            <InlineMath>|6-9|</InlineMath>, and <InlineMath>|-4*5|</InlineMath>.
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
                Taking the absolute value of some expression means that we're
                going to find the positive value of whatever that expression is.
                So, for example, <InlineMath>|-5|=5</InlineMath>. We just take
                the positive of whatever the value is in the expression.
              </p>
              <p className={styles.text}>
                So, for <InlineMath>-|-4|</InlineMath>, we just need to take the
                positive value within the absolute value signs. Therefore, we
                get that <InlineMath>-|-4|=-4</InlineMath>.
              </p>
              <p className={styles.text}>
                For <InlineMath>|6-9|</InlineMath>, we can just perform
                subtraction as normal within the absolute value signs. So,{" "}
                <InlineMath>|6-9|=|-3|=3</InlineMath>.
              </p>
              <p className={styles.text}>
                Last but not least, simplify the expression{" "}
                <InlineMath>|-4*5|</InlineMath>. Well, since we can perform
                operations within the absolute value signs as normal, we can
                rewrite this as <InlineMath>|-4*5|=|-20|=20</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Take the reciprocal of <InlineMath>12</InlineMath>,{" "}
            <InlineMath>{problem3_2}</InlineMath> and{" "}
            <InlineMath>{problem3_3}</InlineMath>
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
                Taking the reciprocal is just a fancy way of saying "flip the
                expression." So for our first problem, to find the reciprocal of
                12, we first recognize that any whole number "c" can be
                rewritten as <InlineMath>{solution3_1}</InlineMath>. Therefore,
                for 12, its reciprocal would be{" "}
                <InlineMath>{solution3_2}</InlineMath>, since we're just
                flipping the value.
              </p>
              <p className={styles.text}>
                Moving on to <InlineMath>{problem3_2}</InlineMath>, we proceed
                like before, just flipping the expression. This gives us{" "}
                <InlineMath>{solution3_3}</InlineMath>.
              </p>
              <p className={styles.text}>
                For the last problem, we see that taking the reciprocal works
                for abstract terms as well. We can take the reciprocal of{" "}
                <InlineMath>{problem3_3}</InlineMath> just as we did with our
                previous problems. Doing so gives us{" "}
                <InlineMath>{solution3_4}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
