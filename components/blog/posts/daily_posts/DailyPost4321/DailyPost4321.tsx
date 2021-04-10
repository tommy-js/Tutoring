import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost4321: React.FC = () => {
  const problem1 = "x^2+2x-35";
  const problem2 = "\\frac{a^2b^{-3}c^4}{c^{-1}a^2b^5}";
  const problem3_1 = "5!";
  const problem3_2 = "3!2!";
  const problem3_3 = "\\frac{4!6!}{2!3!}";
  const solution1_1 = "-7\\times 5";
  const solution1_2 = "5\\times -7";
  const solution1_3 = "-1\\times 35";
  const solution1_4 = "1\\times -35";
  const solution1_5 = "(x+7)(x-5)=0";
  const solution1_6 = "x=-7,x=5";

  const solution2_1 = "\\frac{a^2c^4c^1}{b^3a^2b^5}";
  const solution2_2 = "\\frac{a^2}{a^2}=1";
  const solution2_3 = "\\frac{c^5}{b^8}";

  const solution3_1 = "5!=5\\times 4\\times 3\\times 3\\times 2\\times 1=120";
  const solution3_2 = "3!2!=3\\times 2\\times 1\\times 2\\times 1 = 12";
  const solution3_3 =
    "\\frac{4!6!}{2!3!}=\\frac{4\\times 3\\times 2\\times 1\\times 6\\times 5\\times 4\\times 3\\times 2\\times 1}{2\\times 1\\times 3\\times 2\\times 1}=\\frac{17,280}{12}=1,440";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>
        Algebra | Root Solving, Expression Simplification & Factorials
      </h1>
      <h2 className={styles.subheader}>Posted on 4/3/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/8gXT82yz-Kg"
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
            1. Solve <InlineMath>{problem1}</InlineMath> for x.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                There are a few ways to solve this problem. The most obvious are
                either by way of factoring or by use of the quadratic formula.
                Since this doesn't look like it will be too hard to factor,
                we'll go with this method.
              </p>
              <p className={styles.text}>
                In order to factor <InlineMath>{problem1}</InlineMath>, we need
                to look for two values that when added together give 2 and when
                multiplied give -35. The best way to go about doing this is by
                writing all the factors of -35 and then determining which of
                them add to 2 as well. Seeing as -35 only has a few factors,
                this shouldn't be too hard. In fact, the only terms that
                multiply together to give this are{" "}
                <InlineMath>{solution1_1}</InlineMath>,{" "}
                <InlineMath>{solution1_2}</InlineMath>,{" "}
                <InlineMath>{solution1_3}</InlineMath>,{" "}
                <InlineMath>{solution1_4}</InlineMath>,
              </p>
              <p className={styles.text}>
                Now, we simply ask which of these add to 2. It is, of course 7
                and -5. So, we can rewrite our function as{" "}
                <InlineMath>{solution1_5}</InlineMath>. We set each term equal
                to zero and solve for x, giving{" "}
                <InlineMath>{solution1_6}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Simplify the expression <InlineMath>{problem2}</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                The first thing we should do when faced with a problem like this
                is get rid of the negative exponents. We know by exponent rules
                that these terms can be flipped to either the numerator and
                denominator, depending on the place they're in, and their
                exponent made positive. In other words, we can rewrite our
                equation as <BlockMath>{solution2_1}</BlockMath>
              </p>
              <p className={styles.text}>
                The a terms can be cancelled out completely, as{" "}
                <InlineMath>{solution2_2}</InlineMath>. By comparison, each b
                and c term can be combined to give our final answer of{" "}
                <InlineMath>{solution2_3}</InlineMath>.
              </p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Calculate <InlineMath>{problem3_1}</InlineMath>,{" "}
            <InlineMath>{problem3_2}</InlineMath>, and
            <InlineMath>{problem3_3}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                Beginning with <InlineMath>{problem3_1}</InlineMath>, we need to
                remember what the factorial means. Essentially, this exclamation
                point means that every number up to an including whatever the
                factorial is operating on will be multiplied together. For
                example, in our problem we will have that{" "}
                <InlineMath>{solution3_1}</InlineMath>.
              </p>
              <p className={styles.text}>
                For the problem <InlineMath>{problem3_2}</InlineMath>, we just
                need to keep in mind that even with factorials, other operations
                work exactly as expected. So, we get that{" "}
                <InlineMath>{solution3_2}</InlineMath>.
              </p>
              <p className={styles.text}>
                The same can be said for division, so that in the case of{" "}
                <InlineMath>{problem3_3}</InlineMath> we ultimately get{" "}
                <InlineMath>{solution3_3}</InlineMath>.
              </p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
