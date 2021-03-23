import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost32621: React.FC = () => {
  const problem1_option1 = "(129.99*7)+10";
  const problem1_option2 = "(10*0.06)+129.99";
  const problem1_option3 = "1.06(129.99x)+10";
  const problem1_option4 = "129.99(1.06x + 10)";

  const problem2_1 = "-\\frac{3}{5}<-2x+4<\\frac{2}{6}";
  const problem2_2 = "-6x+12";
  const solution2_1 = "-\\frac{9}{5}<-6x+12<1";
  const solution2_2 = "-\\frac{9}{5}";

  const problem3_option1 = "x<95";
  const problem3_option2 = "x>45";
  const problem3_option3 = "x>10";
  const problem3_option4 = "x>25";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Header</h1>
      <h2 className={styles.subheader}>Posted on [date]</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/bfDO_iSIHCs"
          loop={true}
          playing={true}
          controls={false}
          volume={0}
          muted={true}
          width={"100%"}
          className={styles.player}
        />
      </div>
      <div className={styles.solutions_block}>
        <h3 className={styles.solutions_header}>Problems & Solutions</h3>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            1. James is staying at a motel that charges $129.99 per night plus
            tax. A tax of 6% is applied to the cost per night, and an additional
            onetime untaxed fee of $10.00 is charged by the motel. Which of the
            following represents the total charge, in dollars, James must pay
            for staying x nights?
          </div>
          <ol className={styles.multiple_choice}>
            <li>
              <InlineMath>{problem1_option1}</InlineMath>
            </li>
            <li>
              <InlineMath>{problem1_option2}</InlineMath>
            </li>
            <li>
              <InlineMath>{problem1_option3}</InlineMath>
            </li>
            <li>
              <InlineMath>{problem1_option4}</InlineMath>
            </li>
          </ol>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. If <InlineMath>{problem2_1}</InlineMath>, what is a possible
            value for <InlineMath>{problem2_2}</InlineMath>?
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                We see that <InlineMath>{problem2_2}</InlineMath> is a multiple
                of 3 of <InlineMath>-2x+4</InlineMath>. So, multiplying the
                entire equation by 3, we get{" "}
                <InlineMath>{solution2_1}</InlineMath>. This inference was the
                most challenging part of the problem. From here we can simply
                see that any value laying between{" "}
                <InlineMath>{solution2_2}</InlineMath> and 1 will work as a
                solution.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            A company’s CEO estimated that the cost C, in dollars, of producing
            x items is C=12x+125. The company sells each item for $17. The
            company makes a profit when total income from selling a quantity of
            items is greater than the total cost of producing that quantity of
            items. Which of the following inequalities gives all possible values
            of n for which the manager estimates that the company will make a
            profit?
          </div>
          <ol className={styles.multiple_choice}>
            <li>
              <InlineMath>{problem3_option1}</InlineMath>
            </li>
            <li>
              <InlineMath>{problem3_option2}</InlineMath>
            </li>
            <li>
              <InlineMath>{problem3_option3}</InlineMath>
            </li>
            <li>
              <InlineMath>{problem3_option4}</InlineMath>
            </li>
          </ol>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>We first see that </p>
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
