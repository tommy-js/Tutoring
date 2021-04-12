import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

const problem2_graphic1 = require("../../../../../public/blogs/4-14-21/graphic1.png");
const problem2_graphic2 = require("../../../../../public/blogs/4-14-21/graphic2.png");
const problem2_graphic3 = require("../../../../../public/blogs/4-14-21/graphic3.png");

export const DailyPost41421: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");
  const [problemGraphics, setProblemGraphics] = useState("blur(7px)");

  const problem1 = "\\frac{4+6i}{3-2i}";
  const problem2 = "\\frac{5x^3-3x^2+7x+2}{x+6}";
  const problem3 = "f(x)=\\frac{4x^5}{3}-7x^4+3x^2-17";

  const solution1_1 =
    "\\frac{4+6i}{3-2i}\\times\\frac{3+2i}{3+2i}=\\frac{(4+6i)(3+2i)}{(3-2i)(3+2i)}";
  const solution1_2 = "\\frac{12+8i+18i-12}{9+6i-6i+4}";
  const solution1_3 = "\\frac{26i}{13}";

  const solution2_1 = "\\frac{5x^3-3x^2+7x+2}{x+6}=5x^2-33x+205+R";
  const solution2_2 =
    "\\frac{5x^3-3x^2+7x+2}{x+6}=5x^2-33x+205-\\frac{1228}{x+6}";

  const problem2_choice_2 =
    "\\frac{5}{6}x^2-\\frac{1}{2}x+\\frac{7}{6}+\\frac{2}{x+6}";
  const problem2_choice_3 = "5x^2-33x+205-\\frac{1228}{x+6}";
  const problem2_choice_4 = "5x^2-92x+176-\\frac{2289}{x+6}";

  function revealProblem1() {
    setProblem1Color("#3c3b3b");
    setProblem1Shadow("none");
  }

  function revealProblem2() {
    setProblem2Color("#3c3b3b");
    setProblem2Shadow("none");
    setProblemGraphics("blur(0px)");
  }

  function revealProblem3() {
    setProblem3Color("#3c3b3b");
    setProblem3Shadow("none");
  }

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Precalculus</h1>
      <h2 className={styles.subheader}>Posted on 4/14/21</h2>
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
            1. Simplify the expression <InlineMath>{problem1}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>14i</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>23</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>2i</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>-19i</InlineMath>
              </li>
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
                <p className={styles.answer_text}>
                  <InlineMath>2i</InlineMath>
                </p>
              </div>
              <div className={styles.details}>
                <h4 className={styles.details_header}>Explanation: </h4>
                <p className={styles.text}>
                  It can be hard to figure out exactly what to do with this
                  equation at first. If we remember a simple rule, though, it
                  becomes fairly easy to figure out. Multiplying the numerator
                  and denominator by the complex conjugate will help us get the
                  imaginary term out of the denominator, so we'll start there.
                </p>
                <p className={styles.text}>
                  Remember that if we have some complex number{" "}
                  <InlineMath>a+bi</InlineMath>, its conjugate is{" "}
                  <InlineMath>a-bi</InlineMath>. So, multiplying the numerator
                  and denominator by <InlineMath>3+2i</InlineMath>, we get{" "}
                  <InlineMath>{solution1_1}</InlineMath>.
                </p>
                <p className={styles.text}>
                  We want to distribute out the numerator and denominator and
                  then simplify the terms. Expanding out, we get{" "}
                  <InlineMath>{solution1_2}</InlineMath>. We'll combine
                  like-terms and reduce, which gives us a much cleaner looking
                  expression, <InlineMath>{solution1_3}</InlineMath>. We can
                  divide the numerator and denominator by 13 to get our final
                  answer of <InlineMath>2i</InlineMath>. Since this is in lowest
                  terms, it is our final answer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Find <InlineMath>{problem2}</InlineMath> by synthetic division.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>5x^2-3x+7+2</InlineMath>
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
              <div className={styles.answer}>
                <h4 className={styles.answer_header}>Answer: </h4>
                <p className={styles.answer_text}>
                  <InlineMath>{solution2_2}</InlineMath>
                </p>
              </div>
              <div className={styles.details}>
                <h4 className={styles.details_header}>Explanation: </h4>
                <p className={styles.text}>
                  Synthetic division is a method of dividing one polynomial by
                  another that is quite useful under certain circumstances.
                  Because these circumstances have to be right, though, it's a
                  bit of a niche technique, and may not be necessary to remember
                  unless your course requires you to do so. Still, in this
                  example we'll show you how to go through and divide these
                  polynomials.
                </p>
                <p className={styles.text}>
                  First of all, there are a few things that need to be true for
                  us to use the method of synthetic division in this particular
                  way. The denominator needs to be a polynomial of degree 1 with
                  a coefficient of 1 on the x-term. We see that this is the case
                  here, so we're in business.
                </p>
                <p className={styles.text}>
                  First, we draw out an operation symbol where each of the
                  coefficients on the polynomial in the numerator are written
                  out. We take the negative of the non-x term in the denominator
                  and drop that out front.
                </p>
                <div className={styles.problem_image}>
                  <img
                    style={{ filter: problemGraphics }}
                    src={problem2_graphic1}
                    className={styles.image}
                  />
                </div>
                <p className={styles.text}>
                  Now, we're going to drop the first term down below the line.
                  It's important to realize that synthetic division is an
                  algorithm: it often seems like magic at first. While possible
                  to understand why it works, students typically simply learn it
                  for an exam and never dive deep into the method.
                </p>
                <p className={styles.text}>
                  From this point, we'll multiply the 5 we dropped down below
                  the line by our -6 and put that term just below the -3. We're
                  going to move across performing this operation over and over
                  until we get to the last number.
                </p>
                <div className={styles.problem_image}>
                  <img
                    style={{ filter: problemGraphics }}
                    src={problem2_graphic2}
                    className={styles.image}
                  />
                </div>
                <p className={styles.text}>
                  Add -3 to the -30 and drop this term below the line. Then,
                  multiply the sum of -33 by -6 to get 198 and drop this term
                  below the 7. Add 7 to 198 and put the value of 205 below the
                  line. Multiply 205 by -6 to get -1230 and put this just below
                  the 2, the final value in our chain. Add 2 to -1230 and drop
                  this number of -1228 below the line.
                </p>
                <div className={styles.problem_image}>
                  <img
                    style={{ filter: problemGraphics }}
                    src={problem2_graphic3}
                    className={styles.image}
                  />
                </div>
                <p className={styles.text}>
                  The numbers we got below the line correspond to coefficients
                  on the resulting polynomial. Since we're dividing an{" "}
                  <InlineMath>x^3</InlineMath> term by an{" "}
                  <InlineMath>x</InlineMath> term, the resulting polynomial will
                  be of degree 2. So, we can write out the polynomial as{" "}
                  <InlineMath>{solution2_1}</InlineMath>. Here the R stands for
                  the polynomial's remainder, and it refers to that last value
                  of -1228. When we divide two polynomials, we'll often be left
                  with some value that can't be exactly divided, and so we'll
                  have to tack it onto the end.
                </p>
                <p className={styles.text}>
                  In this case, when we end up with this remainder we can take
                  it and leave the divisor on. In other words, our final result
                  will be <InlineMath>{solution2_2}</InlineMath>.
                </p>
                <p className={styles.text}></p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Use the Fundamental Theorem of Algebra to determine how many
            roots the function <InlineMath>{problem3}</InlineMath> has.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>7 roots</li>
              <li className={styles.individual_choice}>3 roots</li>
              <li className={styles.individual_choice}>5 roots</li>
              <li className={styles.individual_choice}>0 roots</li>
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
              <div className={styles.answer}>
                <h4 className={styles.answer_header}>Answer: </h4>
                <p className={styles.answer_text}>5 Roots</p>
              </div>
              <div className={styles.details}>
                <h4 className={styles.details_header}>Explanation: </h4>
                <p className={styles.text}>
                  The Fundamental Theorem of Algebra states that every
                  polynomial of degree n has exactly n number of roots. Since
                  our polynomial is of degree 5, we know that there are exactly
                  5 roots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
