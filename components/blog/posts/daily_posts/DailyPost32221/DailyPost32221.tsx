import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost32221: React.FC = () => {
  const question1 = "lim_{x\\to 2}\\frac{x^2-4}{x-2}";
  const question2 = "f(x)=4x^2-6x";
  const question3 = "f'(x) = 6x^2+4x";

  const problem1_1 = "lim_{x\\to 2}\\frac{(x-2)(x+2)}{x-2}";
  const problem1_2 = "lim_{x\\to 2}[x+2]";
  const question1_3 = "lim_{x\\to 2}[x+2]=4";

  const problem2_1 = "lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}";
  const problem2_2 = "lim_{h\\to 0}\\frac{[4(x+h)^2-6(x+h)]-[4x^2-6x]}{h}";
  const problem2_3 = "lim_{h\\to 0}\\frac{4x^2+8xh+4h^2-6x-6h-4x^2+6x}{h}";
  const problem2_4 = "lim_{h\\to 0}\\frac{8xh+4h^2-6h}{h}";
  const problem2_5 = "lim_{h\\to 0}8x+4h-6=8x-6";

  const problem3_1 = "f(x)=2x^3+2x^2+C";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>
        Calculus 1 | Limits, Derivatives & Antiderivatives
      </h1>
      <h2 className={styles.subheader}>Posted on 3/22/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/GTdXFy4GboE"
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
            1. Find the limit of <InlineMath>{question1}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                We first look to see if there is anything stopping us from
                taking the limit outright. We see that there is a discontinuity
                at x=2, so we will need to do some algebraic trickery to figure
                it out.
              </p>
              <p className={styles.text}>
                Luckily, upon further inspection we see that the numerator can
                be factored into two components. We can therefore rewrite the
                expression as <InlineMath>{problem1_1}</InlineMath>. Now, since
                the denominator cancels with a term in the numerator, the
                expression further simplifies down to{" "}
                <InlineMath>{problem1_2}</InlineMath>.
              </p>
              <p className={styles.text}>
                {" "}
                From here there is no longer a discontinuity present in the
                limit, and so determining its value is as simple as plugging in
                the limit term. We see then that our expression finally
                simplifies down to <InlineMath>{question1_3}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Use the limit definition to determine the derivative of{" "}
            <InlineMath>{question2}</InlineMath>
          </div>
          <h3 className={styles.micro_header}>Solution</h3>
          <div className={styles.solution}>
            <p className={styles.text}>
              We start by writing the definition of the derivative in limit
              notation: <BlockMath>{problem2_1}</BlockMath>.
            </p>
            <p className={styles.text}>
              Then, we substitute our function into this definition to get{" "}
              <InlineMath>{problem2_2}</InlineMath>. At this point it's mostly a
              matter of simplification and careful algebraic manipulation.
            </p>
            <p className={styles.text}>
              <BlockMath>{problem2_3}</BlockMath>
            </p>
            <p className={styles.text}>
              <BlockMath>{problem2_4}</BlockMath>
            </p>
            <p className={styles.text}>
              <BlockMath>{problem2_5}</BlockMath>
            </p>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Determine the antiderivative of{" "}
            <InlineMath>{question3}</InlineMath>
          </div>
          <h3 className={styles.micro_header}>Solution</h3>
          <div className={styles.solution}>
            <p className={styles.text}>
              There are methods we can use to find a function's antiderivative
              methodologically, but if you're in calculus 1 you likely don't
              know them yet. So, in this example we'll simply use intuition to
              figure it out.
            </p>
            <p className={styles.text}>
              Take the function f'(x). We are looking for its antiderivative. In
              this case we can ask the question, "what function when we take its
              derivative gives us <InlineMath>6x^2+4x</InlineMath>?"
            </p>
            <p className={styles.text}>
              Well, we can see that the function{" "}
              <InlineMath>{problem3_1}</InlineMath> does, provided we have some
              constant C. The C value is important here because any constant
              will work here. When we take a derivative, the constant always
              drops off and becomes zero, so it's important to include this in
              our answer.
            </p>
            <p className={styles.text}></p>
          </div>
        </div>
      </div>
      <div className={styles.bottom_div} />
    </div>
  );
};
