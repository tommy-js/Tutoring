import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

const problem1_graphic = require("../../../../../public/blogs/4-11-21/graphic_1.png");

export const DailyPost41121: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");

  const problem2_1 = "\\int_{2}^{6}f(x)";
  const problem2_2 = "f(x)=x^2+\\frac{6x}{5}-17";

  const solution2_1 = "\\int_{2}^{6}x^2+\\frac{6x}{5}-17";
  const solution2_2 = "\\frac{x^3}{3}";
  const solution2_3 = "\\frac{6x}{5}";
  const solution2_4 = "\\frac{6x^2}{10}";
  const solution2_5 =
    "\\int_{2}^{6}x^2+\\frac{6x}{5}-17=\\frac{x^3}{3}+\\frac{6x^2}{10}-17x\\bigg|^{6}_{2}";
  const solution2_6 =
    "(\\frac{6^3}{3}+\\frac{6(6)^2}{10}-17(6))-(\\frac{2^3}{3}+\\frac{6(2)^2}{10}-17(2))";
  const solution2_7 = "\\int_{2}^{6}x^2+\\frac{6x}{5}-17=20.533";

  const solution3_1 = "\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}";
  const solution3_2 = "\\lim_{h\\to 0}\\frac{|0+h|-|0|}{h}";
  const solution3_3 = "\\lim_{h\\to 0}\\frac{|h|}{h}";
  const solution3_4 = "\\lim_{h^-\\to 0}\\frac{|h|}{h}";
  const solution3_5 = "\\lim_{h^+\\to 0}\\frac{|h|}{h}";

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
      <h1 className={styles.header}>
        Calculus | Optimization, Definite Integration & Derivative Definition
      </h1>
      <h2 className={styles.subheader}>Posted on 4/11/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/NnNmQtYbOII"
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
            1. We need to enclose a rectangular field in a fence. We have 500
            feet of fencing material for the full length. There is a river on
            one side of the field, which will not need any fencing. Determine
            the dimensions of the field that will enclose the largest area.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>x=200</InlineMath>, <InlineMath>y=100</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=125</InlineMath>, <InlineMath>y=250</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=300</InlineMath>, <InlineMath>y=100</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=100</InlineMath>, <InlineMath>y=300</InlineMath>
              </li>
            </ol>
            <div className={styles.image_block}>
              <img src={problem1_graphic} className={styles.image} />
            </div>
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
              <p className={styles.text}>
                The first thing we want to do for this problem is draw a picture
                describing it. We draw a rectange and drop off one of the sides,
                labelling two of the sides x and one of the sides y. We know
                that two of the sides are the same length because it is a
                rectangle. Now we need to come up with equations describing this
                problem. We know that because we have 500 feet of fencing and
                we're trying to find the maximum area, the sum of all the sides
                have to add up to 500. So, <InlineMath>2x+y=500</InlineMath>.
                Then, we need another function to describe this problem so we
                see that the area is equal to the multiple of x and y.
                Therefore, <InlineMath>A=xy</InlineMath>.
              </p>
              <p className={styles.text}>
                We're going to want to find the derivative of A in terms of
                either x or y so that we can optimize it. To do this, we'll need
                to solve our first equation in terms of x or y. We'll choose y,
                since it's more straightforward. Subtracting 2x from{" "}
                <InlineMath>2x+y=500</InlineMath> yields{" "}
                <InlineMath>y=500-2x</InlineMath>, which we can then substitute
                into <InlineMath>A=xy</InlineMath>. This gives us{" "}
                <InlineMath>A=2(500-2x)</InlineMath>.
              </p>
              <p className={styles.text}>
                Distributing through, we can simplify this equation into{" "}
                <InlineMath>A=500x-2x^2</InlineMath>. Now, in order to find the
                maximum area that can be formed from some value of x, we will
                find the derivative of A and solve for zero.
              </p>
              <p className={styles.text}>
                Taking the derivative of A, <InlineMath>A'=500-4x</InlineMath>.
                This can be solved for zero to find the maximum of the function
                A: <InlineMath>500-4x=0</InlineMath>. Adding 4x to both sides
                gives <InlineMath>4x=500</InlineMath>, and then after dividing
                both sides by 4, <InlineMath>x=125</InlineMath>.
              </p>
              <p className={styles.text}>
                This gives one optimized variable, but now we need to find the
                other one, y. Luckily, we can simply take our equation,{" "}
                <InlineMath>2x+y=500</InlineMath> and substitute in our newly
                found value of x. This gives us{" "}
                <InlineMath>2(125)+y=500</InlineMath>, which after some
                simplification, <InlineMath>y=250</InlineMath>.
              </p>
              <p className={styles.text}>
                So, the optimal length of x and y for our river-side fence is{" "}
                <InlineMath>x=125</InlineMath> feet and{" "}
                <InlineMath>y=250</InlineMath> feet.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Integrate <InlineMath>{problem2_1}</InlineMath> for the function{" "}
            <InlineMath>{problem2_2}</InlineMath>.
          </div>
          <ol className={styles.multiple_choice}>
            <li className={styles.individual_choice}>8.95</li>
            <li className={styles.individual_choice}>-6.23</li>
            <li className={styles.individual_choice}>20.533</li>
            <li className={styles.individual_choice}>19.435</li>
          </ol>
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
                The first thing we'll want to do is rewrite our problem with the
                function substituted in. Being able to clearly see what we're
                triyng to do is essential in mathematics. So, we are trying to
                integrate <InlineMath>{solution2_1}</InlineMath>. Now, we
                remember that the power rule for integration is exactly the
                opposite of that for derivatives. In other words, while taking a
                derivative by the power rule requires you to reduce the exponent
                by 1 and multiply the expression by that previous exponent,
                taking an integral has you increase the exponent by 1 and divide
                by that new exponent.
              </p>
              <p className={styles.text}>
                To make this clear, we'll go term-by-term. Finding the
                antiderivative of <InlineMath>x^2</InlineMath>, we increase the
                exponent by 1 and then divide by the new exponent. So, the
                antiderivative of <InlineMath>x^2</InlineMath> would be{" "}
                <InlineMath>{solution2_2}</InlineMath>. We can use the same
                logic for the other terms as well. For{" "}
                <InlineMath>{solution2_3}</InlineMath>, we can clearly see that
                its antiderivative would be{" "}
                <InlineMath>{solution2_4}</InlineMath>. Likewise, since{" "}
                <InlineMath>17=17x^0</InlineMath>, taking its antiderivative
                just gives us <InlineMath>17x</InlineMath>.
              </p>
              <p className={styles.text}>
                So, taking the entire integral, we can see that{" "}
                <InlineMath>{solution2_5}</InlineMath>. Now all that's left to
                do is substitute in our bounds and solve for the final value of
                our integral. Substituting in, we get{" "}
                <InlineMath>{solution2_6}</InlineMath>. After a hefty amount of
                simplification and arithmetic, this gives us our final value,{" "}
                <InlineMath>{solution2_7}</InlineMath>.
              </p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Use the definition of the derivative to determine whether the
            derivative of <InlineMath>f(x)=|x|</InlineMath> exists at{" "}
            <InlineMath>x=0</InlineMath>.
          </div>
          <ol className={styles.multiple_choice}>
            <li className={styles.individual_choice}>Limit does exist</li>
            <li className={styles.individual_choice}>Limit does not exist</li>
          </ol>
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
                We start with the definition of the derivative,{" "}
                <InlineMath>{solution3_1}</InlineMath>. If the absolute value
                function reaches the same limit within this definition, it has a
                derivative at <InlineMath>x=0</InlineMath>. Substituting in, we
                get <InlineMath>{solution3_2}</InlineMath>, which after dropping
                off the zero terms simplifies to{" "}
                <InlineMath>{solution3_3}</InlineMath>.
              </p>
              <p className={styles.text}>
                The question is whether or not this limit exists. The test to
                figure this out is to check the limit from negative and positive
                directions. From the negative direction, we can see that h will
                be negative, while |h| will always be positive, so{" "}
                <InlineMath>{solution3_4}</InlineMath> is going to be negative.
                By comparison, coming from the positive direction h will be a
                positive value, while |h| again remains positive. Thus,{" "}
                <InlineMath>{solution3_5}</InlineMath> is positive.
              </p>
              <p className={styles.text}>
                Because the limits from left and right do not equal the same
                value, this limit does not exist. Thus, by the limit definition
                of the derivative, <InlineMath>f'(x)=|x|</InlineMath> does not
                exist at <InlineMath>x=0</InlineMath>.
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
