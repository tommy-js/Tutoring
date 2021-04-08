import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost4921: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");

  const problem1 = "f(x)=\\frac{x^2}{5}+7";

  const problem2_1 = "\\vec a=(-4,3)";
  const problem2_2 = "\\vec b=(7,2)";

  const problem3 = "\\frac{12x^5-5x^3+x^2-22}{x^2}";

  const solution1_1 = "y=\\frac{x^2}{5}+7";
  const solution1_2 = "x=\\frac{y^2}{5}+7";
  const solution1_3 = "x-7=\\frac{y^2}{5}";
  const solution1_4 = "5x-35=y^2";
  const solution1_5 = "y=\\pm\\sqrt{5x-35}";

  const solution2_1 = "(\\vec a)^2=(-4)^2+(3)^2";
  const solution2_2 = "|\\vec a|=\\sqrt{(-4)^2+(3)^2}";
  const solution2_3 = "|\\vec a|=\\sqrt{25}=5";
  const solution2_4 = "(\\vec b)^2=(7)^2+(2)^2";
  const solution2_5 = "|\\vec b|=\\sqrt{(7)^2+(2)^2}=\\sqrt{53}";
  const solution2_6 = "\\vec b";
  const solution2_7 = "\\sqrt{53}";

  const solution3_1 =
    "\\frac{12x^5}{x^2}-\\frac{5x^3}{x^2}+\\frac{x^2}{x^2}-\\frac{22}{x^2}";
  const solution3_2 = "\\frac{a^4}{a^2}";
  const solution3_3 = "a^2";
  const solution3_4 = "\\frac{12x^5}{x^2}=12x^3";
  const solution3_5 = "\\frac{5x^3}{x^2}=5x";
  const solution3_6 = "\\frac{x^2}{x^2}=1";
  const solution3_7 =
    "\\frac{12x^5-5x^3+x^2-22}{x^2}=12x^3-5x+1-\\frac{22}{x^2}";

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
      <h1 className={styles.header}>Precalculus</h1>
      <h2 className={styles.subheader}>Posted on 4/9/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/LgYmGkCuPTQ"
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
            1. Determine if the function <InlineMath>{problem1}</InlineMath> has
            an inverse.
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
                Figuring out whether a function has an inverse requires us to
                switch the position of the x and y variables and then solve for
                y. In our example, we have{" "}
                <InlineMath>{solution1_1}</InlineMath>, and so to begin solving
                it we first replace this with{" "}
                <InlineMath>{solution1_2}</InlineMath>. Now, we need to solve
                for y, so we begin by subtracting 7 from both sides to get{" "}
                <InlineMath>{solution1_3}</InlineMath>. Then, multiply both
                sides by 5 and simplify down to{" "}
                <InlineMath>{solution1_4}</InlineMath>.
              </p>
              <p className={styles.text}>
                Now the tricky part. To finishg solving for y we need to take
                the square root of both sides. However, remember that when we
                take the square root we end up with two possibilities: a
                positive value or a negative one. So, our equation becomes{" "}
                <InlineMath>{solution1_5}</InlineMath>.
              </p>
              <p className={styles.text}>
                This positive and negative value presents a problem for us,
                since this means that for any particular value of x there are
                two possible y-values. Since the definition of a function
                requires that there is only one value of y per value of x, this
                is not a function, and so the function{" "}
                <InlineMath>{problem1}</InlineMath> does not have an inverse.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Find the magnitude of the vectors{" "}
            <InlineMath>{problem2_1}</InlineMath> and{" "}
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
                In order to find the magnitude of a vector we must think about
                the geometry of a vector itself. In a vector, the first
                coordinate represents its length along the x-axis, while the
                second number represents its length along the y-axis. So, in
                looking for the magnitude of the vector we're really trying to
                find its length. Drawing our first vector out, we can see that
                the length of the vector is given exactly by the Pythagorean
                Theorem, which states that the length of a hypoteneuse of a
                triangle is the sum of the squares of its base and side. In
                other words, <InlineMath>a^2=b^2+c^2</InlineMath>.
              </p>
              <p className={styles.text}>
                So, in trying to find the magnitude of{" "}
                <InlineMath>{problem2_1}</InlineMath>, we just need to use the
                Pythagorean Theorem to find the hypoteneuse of the triangle
                formed by the length of the vector. Thus,{" "}
                <InlineMath>{solution2_1}</InlineMath>. Taking the square root
                of both sides, this simplifies down to{" "}
                <InlineMath>{solution2_2}</InlineMath>. Then, simplifying the
                right-hand side we get <InlineMath>{solution2_3}</InlineMath>.
                This means that the vector <InlineMath>{problem2_1}</InlineMath>{" "}
                we have its length equal to 5.
              </p>
              <p className={styles.text}>
                For the second question, we proceed just as we did before. Use
                the Pythagorean Theorem and plug in the values for our vector to
                get <InlineMath>{solution2_4}</InlineMath>. Take the square root
                of both sides, which gives us{" "}
                <InlineMath>{solution2_5}</InlineMath>. This means that our
                vector <InlineMath>{solution2_6}</InlineMath> has a length of{" "}
                <InlineMath>{solution2_7}</InlineMath>.
              </p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Simplify the polynomial <InlineMath>{problem3}</InlineMath>.
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
                We want to simplify this polynomial as much as possible. To
                start with, we're going to rewrite it and separate out each
                individual term. This gives us{" "}
                <InlineMath>{solution3_1}</InlineMath>. Now we just need to go
                term by term and divide out as much as possible. We remember
                that when we divide like terms we simply subtract the exponents,
                so if we have <InlineMath>{solution3_2}</InlineMath> this
                simplifies down to <InlineMath>{solution3_3}</InlineMath>.
              </p>
              <p className={styles.text}>
                So, the first term gives us{" "}
                <InlineMath>{solution3_4}</InlineMath>. The second term, very
                similarly, gives <InlineMath>{solution3_5}</InlineMath>. For our
                third term we just need to see that since we're dividing the top
                and bottom of the expression by the same value,{" "}
                <InlineMath>{solution3_6}</InlineMath>. Then, for the last
                expression, there is no real simplification to be done.
              </p>
              <p className={styles.text}>
                At the end of the process we have our final answer, which is
                that <InlineMath>{solution3_7}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
