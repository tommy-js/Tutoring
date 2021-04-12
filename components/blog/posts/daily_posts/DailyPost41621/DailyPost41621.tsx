import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost41621: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");

  const problem1 = "\\lim_{x\\to 0}\\frac{14x^3-6x^2+\\sin(9x)}{x(x-1)}";
  const problem2 = "\\int 6z^3-8z+16dz";
  const problem3 = "f(x)=9x^3+6x^2-12x+4";

  const solution1_1 =
    "\\lim_{x\\to 0}\\frac{14(0)^3-6(0)^2+\\sin(9(0))}{(0)((0)-1)}=\\frac{0}{0}";
  const solution1_2 = "f(x)=14x^3-6x^2+\\sin(9x)";
  const solution1_3 = "g(x)=x(x-1)";
  const solution1_4 = "f'(x)=42x^2-12x+9\\cos(9x)";
  const solution1_5 = "g'(x)=2x-1";
  const solution1_6 =
    "\\lim_{x\\to 0}\\frac{42(0)^2-12(0)+9\\cos(9(0))}{2(0)-1}=-9";
  const solution2_1 =
    "\\int 6z^3-8z+16dz=\\frac{6}{4}x^4-\\frac{8}{2}z^2+16z+C";
  const solution2_2 = "\\int 6z^3-8z+16dz=\\frac{3}{2}x^4-4z^2+16z+C";

  const problem2_choice_2 = "\\frac{14}{5}z^4-4z^2+16z+C";
  const problem2_choice_3 = "\\frac{3}{2}z^4-4z^2+16z+C";
  const problem2_choice_4 = "\\frac{5}{2}z^2-8";

  const solution3_1 = "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}";
  const solution3_2 = "x=\\frac{-12\\pm\\sqrt{12^2-4(27)(-12)}}{2(12)}";
  const solution3_3 = "x=\\frac{-12\\pm\\sqrt{1440}}{24}";
  const solution3_4 = "x=\\frac{-6+3\\sqrt{40}}{12}";
  const solution3_5 = "x=\\frac{-6-3\\sqrt{40}}{12}";
  const solution3_6 = "\\sqrt{1440}=\\sqrt{36}\\sqrt{40}=6\\sqrt{40}";
  const solution3_7 = "x=\\frac{-6\\pm 3\\sqrt{40}}{12}";

  const problem3_choice_3_1 = "x=\\frac{-12+\\sqrt{76}}{7}";
  const problem3_choice_3_2 = "x=\\frac{-12-\\sqrt{76}}{7}";
  const problem3_choice_4_1 = "x=\\frac{9\\sqrt{37}}{22}";
  const problem3_choice_4_2 = "x=-\\frac{9\\sqrt{37}}{22}";

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
      <h1 className={styles.header}>Calculus</h1>
      <h2 className={styles.subheader}>Posted on 4/15/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/LgYmGkCuPTQ"
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
            1. Use L'Hospital's Rule to evaluate{" "}
            <InlineMath>{problem1}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>9</li>
              <li className={styles.individual_choice}>-24</li>
              <li className={styles.individual_choice}>83</li>
              <li className={styles.individual_choice}>14</li>
            </ol>
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
              <div className={styles.answer}>
                <h4 className={styles.answer_header}>Answer: </h4>
                <p className={styles.answer_text}></p>
              </div>
              <div className={styles.details}>
                <h4 className={styles.details_header}>Explanation: </h4>
                <p className={styles.text}>
                  The first thing we need to do is determine if L'Hospital's
                  Rule is even necessary. Plugging zero into this limit we get{" "}
                  <InlineMath>{solution1_1}</InlineMath>. Since this is an
                  indeterminate form, and thus meaningless, it's a perfect
                  candidate to try and use L'Hospital's Rule.
                </p>
                <p className={styles.text}>
                  Remember that the rule states that if we have an indeterminate
                  form, we can take the derivative of the numerator and the
                  derivative of the denominator and then take the limit. So,
                  let's say that <InlineMath>{solution1_2}</InlineMath> and{" "}
                  <InlineMath>{solution1_3}</InlineMath>. Then, we can simply
                  see that <InlineMath>{solution1_4}</InlineMath> and{" "}
                  <InlineMath>{solution1_5}</InlineMath>.
                </p>
                <p className={styles.text}>
                  So let's plug these into the limit to see if we get a
                  different result. <InlineMath>{solution1_6}</InlineMath>,
                  which is not an indeterminate form. Thus, we can see from
                  using L'Hospital's Rule that there is an answer for us.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Evaluate the integral <InlineMath>{problem2}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>3z^4-6z^2+14z</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem2_choice_2}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem2_choice_3}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem2_choice_4}</InlineMath>
              </li>
            </ol>
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
                In order to solve this integral we'll need to find the
                antiderivatives of each component. Remember that the
                antiderivative is literally the opposite of a derivative. So
                while when we take the derivative of a power rule we would drop
                the exponent by 1 and multiply the coefficient of the term by
                it, when we take the antiderivative we raise the exponent by 1
                and divide by it.
              </p>
              <p className={styles.text}>
                For this problem, we can see that{" "}
                <InlineMath>{solution2_1}</InlineMath>. Notice that for each
                term we have raised the exponent by 1 and divided by this new
                exponent. It's also important to recognize the C term on the
                end: we need to add this on because we're taking the indefinite
                integral. There are an infinite number of possible integrals
                that fit this equation. Unless we have specific bounds, and are
                therefore taking the definite integral, we need to add this C
                onto the end.
              </p>
              <p className={styles.text}>
                Simplifying, our final equation will be{" "}
                <InlineMath>{solution2_2}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Determine the critical points of the function{" "}
            <InlineMath>{problem3}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>x=12.9</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{solution3_4}</InlineMath>,{" "}
                <InlineMath>{solution3_5}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem3_choice_3_1}</InlineMath>,{" "}
                <InlineMath>{problem3_choice_3_2}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem3_choice_4_1}</InlineMath>,{" "}
                <InlineMath>{problem3_choice_4_2}</InlineMath>
              </li>
            </ol>
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
                The critical points refer to the points at which the derivative
                of a function either equals zero or does not exist. To find
                them, we'll first need to find the derivative of{" "}
                <InlineMath>f(x)</InlineMath>. Fortunately, this is a simple
                power-rule problem, and so the derivative is easily found as{" "}
                <InlineMath>f'(x)=27x^2+12x-12</InlineMath>.
              </p>
              <p className={styles.text}>
                Now we need to find where this derivative equals zero and where
                it is not defined. Because this is just a simple polynomial, it
                is defined everywhere and for every real value. Therefore, we
                just need to look for where <InlineMath>f'(x)=0</InlineMath>.
              </p>
              <p className={styles.text}>
                Because this will likely be a very difficult polynomial to
                factor, we're going to use the quadratic formula to solve for
                x=0. Remember that the quadratic formula states for any
                polynomial of the form <InlineMath>ax^2+bx+c=0</InlineMath>, we
                can use the equation <InlineMath>{solution3_1}</InlineMath> to
                find the solutions for x. So, plugging in our function, we get{" "}
                <InlineMath>{solution3_2}</InlineMath>.
              </p>
              <p className={styles.text}>
                We can simplify this somewhat to get{" "}
                <InlineMath>{solution3_3}</InlineMath>. We can split up the root
                into <InlineMath>{solution3_6}</InlineMath>, and so can rewrite
                and simplify the expression as{" "}
                <InlineMath>{solution3_7}</InlineMath>. Therefore, our final
                solutions will be <InlineMath>{solution3_4}</InlineMath> and{" "}
                <InlineMath>{solution3_5}</InlineMath>.
              </p>
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
