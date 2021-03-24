import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost32821: React.FC = () => {
  const problem2 = "\\frac{27}{4}";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Header</h1>
      <h2 className={styles.subheader}>Posted on [date]</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/FH3NfH5vWa4"
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
            1. Simplify the expression -(4-6)-(6+3).
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                In order to simplify this expression we first begin with what's
                in the parentheses. We know that 4-6=-2 and 6+3=9, so our
                expression becomes -(-2)-(9). Now, when we multiply two
                negatives they give us a positive, so -(-2)=2.
              </p>
              <p className={styles.text}>
                So, we now have just 2-(9). Since there is nothing else in the
                parentheses except for 9, we can simplify this down to 2-9. Our
                answer, then, is that -(4-6)-(6+3)=-7.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Use long division to find <InlineMath>{problem2}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                The process of long division is long but not as complicated as
                it may seem. We essentially need to keep asking how many times
                our divisor goes into the number we are dividing, and just keep
                going until there's nothing left to divide.
              </p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>3. Multiply 25 by 22.</div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_div} />
    </div>
  );
};
