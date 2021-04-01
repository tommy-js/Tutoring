import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost4521: React.FC = () => {
  const problem1 = "\\frac{2x+7}{3}=t";

  const problem2_1 = "i=\\sqrt{-1}";
  const problem2_2 = "(5i-1)-(4+3i)";

  const problem3_1 = "4x+7y=-32";
  const problem3_2 = "5x-3y=-40";

  const solution1_1 = "\\frac{2x+7}{3}=5";

  const solution3_1 = "5x=3y-40";
  const solution3_2 = "x=\\frac{3}{5}y-8";
  const solution3_3 = "4(\\frac{3}{5}y-8)+7y=-32";
  const solution3_4 = "\\frac{12}{5}y-32+7y=-32";
  const solution3_5 = "\\frac{12}{5}y+7y=0";
  const solution3_6 = "4x+7(0)=-32";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>SAT Prep</h1>
      <h2 className={styles.subheader}>Posted on 3/31/21</h2>
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
            If <InlineMath>{problem1}</InlineMath> and t=5, what is the value of
            x?
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                The first thing we need to do is substitute in t to get{" "}
                <InlineMath>{solution1_1}</InlineMath>. Now we multiply both
                sides by 3 to get <InlineMath>2x+7=15</InlineMath>. Then,
                subtract 7 from both sides and this gives us{" "}
                <InlineMath>2x=8</InlineMath> and then divide by 2 to get our
                final answer of <InlineMath>x=4</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            For <InlineMath>{problem2_1}</InlineMath>, what is the value of the
            expression <InlineMath>{problem2_2}</InlineMath>?
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                First, distribute the negative value into our second expression
                to get <InlineMath>(5i-1)+(-4-3i)</InlineMath>. Then, add term
                by term and treat i simply as a variable and get the final
                answer <InlineMath>2i-5</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            Find the solution (x,y) to the system of equations{" "}
            <InlineMath>{problem3_1}</InlineMath> and{" "}
            <InlineMath>{problem3_2}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                While there are numerous ways to solve a system of equations
                like this, we're going to go about it by solving in terms of one
                variable and substituting in to the other equation. We'll start
                with the equation <InlineMath>{problem3_2}</InlineMath>. Adding
                3y to both sides, we get <InlineMath>{solution3_1}</InlineMath>.
                Then, dividing 5, this becomes{" "}
                <InlineMath>{solution3_2}</InlineMath>.
              </p>
              <p className={styles.text}>
                Now, substitute this x-value into the other equation,{" "}
                <InlineMath>{problem3_1}</InlineMath>, to get{" "}
                <InlineMath>{solution3_3}</InlineMath>. Multiplying 4 through
                the parentheses, this becomes{" "}
                <InlineMath>{solution3_4}</InlineMath>. Now, add 32 to each side
                and we get <InlineMath>{solution3_5}</InlineMath>. Since the
                last two terms are multiples of y, we know that{" "}
                <InlineMath>y=0</InlineMath>.
              </p>
              <p className={styles.text}>
                Since we now have the y-value, solving for x becomes very easy.
                We take either equation and substutute y in. We'll use{" "}
                <InlineMath>{problem3_1}</InlineMath> and so{" "}
                <InlineMath>{solution3_6}</InlineMath>. Simplifying, this
                becomes <InlineMath>4x=-32</InlineMath>. Dividing both sides by
                4, we get finally <InlineMath>x=-8</InlineMath>. So, the
                solution to this system of equations is (-8,0).
              </p>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
