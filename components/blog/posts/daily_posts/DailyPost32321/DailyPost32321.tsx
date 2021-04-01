import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost32321: React.FC = () => {
  const problem1_1 = "(x+a)(x+b)";
  const quadratic_equation = "\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}";

  const problem2_1 = "x=\\frac{17\\pm \\sqrt{17^2-4(5)(3)}}{2(5)}";
  const problem2_2 = "x=\\frac{17\\pm\\sqrt{229}}{10}";
  const problem2_3 = "x=\\frac{17+\\sqrt{229}}{10}";
  const problem2_4 = "x=\\frac{17-\\sqrt{229}}{10}";

  const problem3_1 = "f(x)=35ab+20a^2-21b^2-12ab";
  const problem3_2 = "f(x)=20a^2-21b^2+23ab";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>
        Algebra | Factoring, Root Finding & Distribution
      </h1>
      <h2 className={styles.subheader}>Posted on 3/23/21</h2>
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
            1. Factor <InlineMath>x^2+x-12</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                In order to factor this equation we'll need to find terms a and
                b that fit the formula <InlineMath>{problem1_1}</InlineMath>. We
                know that there is no coefficient greater than 1 on the x terms
                because when we multiply these together we get{" "}
                <InlineMath>x^2</InlineMath>, which is the first component to
                our equation.
              </p>
              <p className={styles.text}>
                Since we know that our factor will be of the form{" "}
                <InlineMath>{problem1_1}</InlineMath>, where a and b are some
                constants, we know there there must be some numbers that
                multiply out to -12 and add to 1. We can see that these numbers
                are 4 and -3.
              </p>
              <p className={styles.text}>
                Our problem is essentially solved now. We just need to
                substitute these values into the formula we came up with
                earlier. Thus, the answer is <InlineMath>(x-3)(x+3)</InlineMath>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Find the roots of <InlineMath>f(x)=5x^2-17x+2</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                For this problem we'll use the quadratic equation, which states
                that <BlockMath>{quadratic_equation}</BlockMath>
              </p>
              <p className={styles.text}>
                We'd like to use this particular method because factoring to
                find the roots would be very difficult. So, substituting terms
                in, we get <BlockMath>{problem2_1}</BlockMath>
              </p>
              <p className={styles.text}>
                This can be simplified down to{" "}
                <BlockMath>{problem2_2}</BlockMath>
              </p>
              <p className={styles.text}>
                So, the roots of our function are{" "}
                <InlineMath>{problem2_3}</InlineMath> and{" "}
                <InlineMath>{problem2_4}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Distribute <InlineMath>f(x)=(5a-3b)(7b+4a)</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                In order to distribute this function we need to remember the
                acronym "F.O.I.L", which stands for First Outer Inner Last. This
                helps us remember how to distribute terms through our
                expression.
              </p>
              <p className={styles.text}>
                So, you first multiply the two inner, or left-most terms, then
                the outer, or the right-most terms, followed by the inner terms
                and then the two outermost terms.
              </p>
              <p className={styles.text}>
                This gives us that <InlineMath>{problem3_1}</InlineMath>, which
                can be further simplified down to{" "}
                <InlineMath>{problem3_2}</InlineMath>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_div} />
    </div>
  );
};
