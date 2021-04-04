import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost4721: React.FC = () => {
  const problem1_1 = "3\\frac{5}{6}";
  const problem1_2 = "5\\frac{2}{5}";

  const problem2 = "-22 + (-7) + (-14)";

  const problem3_1 = "5.25";
  const problem3_2 = "3.9";

  const solution1_1 = "3=\\frac{18}{6}";
  const solution1_2 = "3\\frac{5}{6}=\\frac{18}{6}+\\frac{5}{6}";
  const solution1_3 = "3\\frac{5}{6}=\\frac{18}{6}+\\frac{5}{6}=\\frac{23}{6}";
  const solution1_4 = "5=\\frac{25}{5}";
  const solution1_5 = "5\\frac{2}{5}=\\frac{25}{5}+\\frac{2}{5}";
  const solution1_6 = "\\frac{25}{5}+\\frac{2}{5}=\\frac{27}{5}";

  const solution2_1 = "-22-7-14";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Arithmetic</h1>
      <h2 className={styles.subheader}>Posted on 4/7/21</h2>
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
            1. Write <InlineMath>{problem1_1}</InlineMath> and{" "}
            <InlineMath>{problem1_2}</InlineMath> as improper fractions.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                In order to find mixed numbers as improper fractions, we need to
                rewrite the whole number in fractional form and then add the
                extra piece to its right. For{" "}
                <InlineMath>{problem1_1}</InlineMath>, we know that{" "}
                <InlineMath>{solution1_1}</InlineMath>, so we can rewrite this
                problem as <InlineMath>{solution1_2}</InlineMath>. Then, simply
                adding these fractions, we need to remember that when we have
                like bases we just add across the numerator and then simplify.
                So, <InlineMath>{solution1_3}</InlineMath>. Since 23 and 6 do
                not have any divisors in common, the fraction is in lowest
                terms, and so it's our final answer.
              </p>
              <p className={styles.text}>
                Moving on to the second question, we are to find{" "}
                <InlineMath>{problem1_2}</InlineMath> as a plain fraction. We
                proceed as we did in the first problem, by rewriting 5 with the
                denominator of the fraction to its right. We can multiply the
                numerator and denominator of 5 by 5 to get{" "}
                <InlineMath>{solution1_4}</InlineMath>, which means that{" "}
                <InlineMath>{solution1_5}</InlineMath>. Now, we just add the
                fractions to get <InlineMath>{solution1_6}</InlineMath>, our
                final answer. Again, this is in lowest terms, as 27 and 5 do not
                have any divisors in common.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Find the sum <InlineMath>{problem2}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                First of all, we want to write this in the simplest way
                possible. This means that instead of writing our problem as{" "}
                <InlineMath>{problem2}</InlineMath>, we'll write it as{" "}
                <InlineMath>{solution2_1}</InlineMath>, removing the
                parentheses. Now, we can treat this as a normal addition
                problem, since each term is negative. We are simply moving in
                the opposite direction on the number line.
              </p>
              <p className={styles.text}>
                We'll go term by term and simplify.{" "}
                <InlineMath>-22-7=-29</InlineMath>. We are just subtracting
                already negative terms from each other. Then, we take this value
                and subtract 14 from it to get{" "}
                <InlineMath>-29-14=-43</InlineMath>, giving us our final value.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Rewrite <InlineMath>{problem3_1}</InlineMath> and{" "}
            <InlineMath>{problem3_2}</InlineMath> as fractions.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
              <p className={styles.text}></p>
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
