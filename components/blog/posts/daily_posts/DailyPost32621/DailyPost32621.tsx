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

  const solution1_1 = "1.06(129.99x)";

  const problem2_1 = "-\\frac{3}{5}<-2x+4<\\frac{2}{6}";
  const problem2_2 = "-6x+12";
  const solution2_1 = "-\\frac{9}{5}<-6x+12<1";
  const solution2_2 = "-\\frac{9}{5}";

  const problem3_option1 = "x<95";
  const problem3_option2 = "x>45";
  const problem3_option3 = "x>10";
  const problem3_option4 = "x>25";

  const solution3_1 = "17x > 12x + 125";
  const solution3_2 = "5x > 125";
  const solution3_3 = "x > 25";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>SAT Prep | Word Problems & Inequalities</h1>
      <h2 className={styles.subheader}>Posted on 3/26/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/KeaWqKhP_-Q"
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
            1. James is staying at a motel that charges $129.99 per night plus
            tax. A tax of 6% is applied to the cost per night, and an additional
            one-time untaxed fee of $10.00 is charged by the motel. Which of the
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
              <p className={styles.text}>
                The best way to solve these type of problems is to piece them
                together line by line. We know that a tax of 6% is charged to
                the cost per night, which is $129.99. So, this means that the
                motel will charge James <InlineMath>{solution1_1}</InlineMath>,
                where x represents the number of nights stayed. Then, there is
                the one-time fee which we must tack on to the final cost. Note
                that this fee is untaxed, so our final answer is that James must
                pay a total of <InlineMath>{problem1_option3}</InlineMath> for
                his stay.
              </p>
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
            3. A company’s CEO estimated that the cost C, in dollars, of
            producing x items is C=12x+125. The company sells each item for $17.
            The company makes a profit when total income from selling a quantity
            of items is greater than the total cost of producing that quantity
            of items. Which of the following inequalities gives all possible
            values of n for which the CEO estimates that the company will make a
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
              <p className={styles.text}>
                The first thing we need to do is rewrite this as a solvable
                equation. We see that we need to find a value x for which 17x is
                greater than 12x+125. Rewriting this, we have that we need to
                solve x for <InlineMath>{solution3_1}</InlineMath>.
              </p>
              <p className={styles.text}>
                Now finding the solution is a matter of simply solving.
                Subtracting 12x from both sides, we get that{" "}
                <InlineMath>{solution3_2}</InlineMath>. Now, dividing both sides
                by 5, <InlineMath>{solution3_3}</InlineMath>. So, answer 4 is
                correct.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_div} />
    </div>
  );
};
