import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost32721: React.FC = () => {
  const problem1 = "f(x)=4x\\cos(2x)";
  const solution1_1 = "(f(x)g(x))'=f'(x)g(x)+f(x)g'(x)";
  const solution1_2 = "f'(x) = 4x(\\cos(2x))' + (4x)'\\cos(2x)";
  const solution1_3 = "(\\cos(2x))'";
  const solution1_4 = "(f(g(x)))' = g'(x)f'(g(x))";
  const solution1_5 = "(\\cos(2x))' = -2\\sin(2x)";
  const solution1_6 = "f'(x) = -8x\\sin(2x) + 4\\cos(2x)";

  const problem2 = "lim_{x\\to 0}\\frac{x}{5-\\sqrt{x+25}}";
  const solution2_1 = "a+\\sqrt{b}";
  const solution2_2 = "a-\\sqrt{b}";
  const solution2_3 =
    "lim_{x\\to 0}\\frac{x}{5-\\sqrt{x+25}}\\cdot\\frac{5+\\sqrt{x+25}}{5+\\sqrt{x+25}}=lim_{x\\to 0}\\frac{x(5+\\sqrt{x+25})}{25-x-25}";
  const solution2_4 = "lim_{x\\to 0}\\frac{x(5+\\sqrt{x+25})}{-x}";
  const solution2_5 = "lim_{x\\to 0}[-5-\\sqrt{x+25}]";

  const solution2_6 = "lim_{x\\to 0}\\frac{x}{5-\\sqrt{x+25}} = -10";
  const problem3 = "f(x)=\\frac{7-x}{3-\\log(2x)+\\sqrt{5-x}}";
  const solution3_1 = "\\log(2x)";
  const solution3_2 = "\\sqrt{5-x}";
  const solution3_3 = "x>0";

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
            1. Take derivative of <InlineMath>{problem1}</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                Do solve this problem we will need to employ both the chain and
                product rules. We'll start with the product rule, which states
                that <InlineMath>{solution1_1}</InlineMath>. Using this, we see
                that our original derivative can be rewritten as{" "}
                <InlineMath>{solution1_2}</InlineMath>.
              </p>
              <p className={styles.text}>
                Now we need to use the chain rule to determine{" "}
                <InlineMath>{solution1_3}</InlineMath>. Since the chain rule
                states that <InlineMath>{solution1_4}</InlineMath>, we see that{" "}
                <InlineMath>{solution1_5}</InlineMath>.
              </p>
              <p className={styles.text}>
                So, all it takes is to put this together. We can see that by
                using the chain and product rule,{" "}
                <InlineMath>{solution1_6}</InlineMath>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Find the limit of <InlineMath>{problem2}</InlineMath>
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                The very first thing we should do to determine how to solve this
                limit is to look for points of discontinuity. We see here that
                when the denominator equals zero the expression is undefined.
                That is, when x equals zero.
              </p>
              <p className={styles.text}>
                In this case we're going to use the conjugate of the denominator
                to simplify the expresion. Remember that for a function{" "}
                <InlineMath>{solution2_1}</InlineMath> its conjugate is{" "}
                <InlineMath>{solution2_2}</InlineMath>. So, we multiply the
                numerator and denominator by the conjugate of the denominator.
              </p>
              <p className={styles.text}>
                So, we get <InlineMath>{solution2_3}</InlineMath>. This
                simplifies down to <InlineMath>{solution2_4}</InlineMath>. The
                x-terms cancel leaving only{" "}
                <InlineMath>{solution2_5}</InlineMath>. Since this is a very
                standard limit with no discontinuities, we can simply subsitute
                in the value of x being zero. So, our final answer is{" "}
                <InlineMath>{solution2_6}</InlineMath>.
              </p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Determine for which values of x the equation{" "}
            <InlineMath>{problem3}</InlineMath> is defined.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                When we're looking for defined values of a function we need to
                find the spots where the function is not defined. So, take a
                minute to pick out the values of x for which f(x) is not
                defined.
              </p>
              <p className={styles.text}>
                The problem areas of this function are{" "}
                <InlineMath>{solution3_1}</InlineMath> and{" "}
                <InlineMath>{solution3_2}</InlineMath> in the denominator. We
                know that the logarithm function is defined for values{" "}
                <InlineMath>{solution3_3}</InlineMath>, which means our entire
                function is as well. Then, when we look at the square root, we
                know that negative values are not defined on the real number
                graph.
              </p>
              <p className={styles.text}>
                Since the square root can't be negative, this means any values
                of x greater than 5 will be undefined. As a result, the function
                f(x) is defined on the interval <InlineMath>(0,5]</InlineMath>.
              </p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_div} />
    </div>
  );
};
