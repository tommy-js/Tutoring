import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost41321: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problem2Color, setProblem2Color] = useState("transparent");
  const [problem2Shadow, setProblem2Shadow] = useState("0 0 7px #000");
  const [problem3Color, setProblem3Color] = useState("transparent");
  const [problem3Shadow, setProblem3Shadow] = useState("0 0 7px #000");

  const problem3_1 = "5x-3y=17";
  const problem3_2 = "12y+6x=4";

  const solution2_1 = "(4x^2-7x+12)+(8x^3-3x^2+x-6)=8x^3+x^2-6x+6";

  const solution3_1 = "x=\\frac{2}{3}-2y";
  const solution3_2 = "5(\\frac{2}{3}-2y)-3y=17";
  const solution3_3 = "\\frac{10}{3}-10y-3y=17";
  const solution3_4 = "-13y=\\frac{41}{3}";
  const solution3_5 = "y=-\\frac{41}{39}";
  const solution3_6 = "12(-\\frac{41}{39})+6x=4";
  const solution3_7 = "6x=4-12(-\\frac{41}{39})";
  const solution3_8 = "6x=\\frac{648}{39}";
  const solution3_9 = "6x=\\frac{216}{13}";
  const solution3_10 = "x=\\frac{216}{78}";
  const solution3_11 = "x=\\frac{108}{39}";
  const solution3_12 = "x=\\frac{36}{13}";

  const problem3_choice1_1 = "x=\\frac{4}{15}";
  const problem3_choice1_2 = "y=\\frac{41}{39}";
  const problem3_choice2_2 = "x=\\frac{6}{13}";
  const problem3_choice3_1 = "x=\\frac{36}{13}";
  const problem3_choice3_2 = "y=-\\frac{41}{39}";

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
        Algebra | Zero Product Property, Polynomial Addition & Systems of
        Equations
      </h1>
      <h2 className={styles.subheader}>Posted on 4/13/21</h2>
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
            1. Use the Zero Product Property to solve{" "}
            <InlineMath>(x+7)(x-3)=0</InlineMath> for x.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>x=2</InlineMath>, <InlineMath>x=6</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=3</InlineMath>, <InlineMath>x=7</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=-7</InlineMath>, <InlineMath>x=3</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=21</InlineMath>, <InlineMath>x=7</InlineMath>
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
              <p className={styles.text}>
                The Zero Product Property states that, given some variables a
                and b, if <InlineMath>ab=0</InlineMath>, then either{" "}
                <InlineMath>a=0</InlineMath> or <InlineMath>b=0</InlineMath>. In
                trying to solve our problem for x, we can use this to our
                advantage. Since we have that{" "}
                <InlineMath>(x+7)(x-3)=0</InlineMath>, we know by the Zero
                Product Property that either <InlineMath>x+7=0</InlineMath> or{" "}
                <InlineMath>x-3=0</InlineMath>.
              </p>
              <p className={styles.text}>
                Since we want to find possible values of x, we can just solve
                each equation. <InlineMath>x+7=0</InlineMath> means that, when
                we subtract 7 from both sides, <InlineMath>x=-7</InlineMath>.
                Similarly, taking <InlineMath>x-3=0</InlineMath>, we know that
                when we add 3 to both sides we get that{" "}
                <InlineMath>x=3</InlineMath>.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Add <InlineMath>4x^2-7x+12</InlineMath> and{" "}
            <InlineMath>8x^3-3x^2+x-6</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>9x^3+6x^2-2x+4</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>8x^3+x^2-6x+6</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>14x^2+6x-2</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>8x^3-9x^2+12x+6</InlineMath>
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
                Adding these polynomials require us to add term-by-term. What
                this means is that we can't simplify{" "}
                <InlineMath>4x^2+8x^3</InlineMath>, but we can simplify{" "}
                <InlineMath>4x^2-3x^2=x^2</InlineMath>.
              </p>
              <p className={styles.text}>
                So, since there is only one <InlineMath>x^3</InlineMath> term,
                we drop it down. The two <InlineMath>x^2</InlineMath> terms add
                together to give <InlineMath>4x^2-3x^2=x^2</InlineMath>, which
                we found just a moment ago. We add the{" "}
                <InlineMath>x</InlineMath> terms and get{" "}
                <InlineMath>x-7x=-6x</InlineMath>. Finally, the last numbers add
                together and this gives us <InlineMath>12-6=6</InlineMath>.
              </p>
              <p className={styles.text}>
                Putting it all together, we get{" "}
                <InlineMath>{solution2_1}</InlineMath>.
              </p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. Solve the system of linear equations{" "}
            <InlineMath>{problem3_1}</InlineMath> and{" "}
            <InlineMath>{problem3_2}</InlineMath> for x and y.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>
                <InlineMath>x=7</InlineMath>, <InlineMath>y=-1</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem3_choice1_1}</InlineMath>,{" "}
                <InlineMath>{problem3_choice1_2}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>x=3</InlineMath>,{" "}
                <InlineMath>{problem3_choice2_2}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{problem3_choice3_1}</InlineMath>,{" "}
                <InlineMath>{problem3_choice3_2}</InlineMath>
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
                While there are a few possible ways to solve this system of
                equations, we're going to use the method of solving for one
                variable, substituting it into the other equation, and then
                finding the value of each variable. Starting with{" "}
                <InlineMath>12y+6x=4</InlineMath>, we'll solve for x by
                subtracting 12y from both sides. This gives us{" "}
                <InlineMath>6x=12y+4</InlineMath>. Then, divide by 6 to get{" "}
                <InlineMath>{solution3_1}</InlineMath>.
              </p>
              <p className={styles.text}>
                Now, substitute this equation into{" "}
                <InlineMath>{problem3_1}</InlineMath> to get{" "}
                <InlineMath>{solution3_2}</InlineMath>. We'll distribute 5
                through the parentheses and then simplify like terms. This gives
                us <InlineMath>{solution3_3}</InlineMath>, which when we add
                like terms gives <InlineMath>{solution3_4}</InlineMath>. Simply
                dividing by -13 gives our value for y, which is{" "}
                <InlineMath>{solution3_5}</InlineMath>.
              </p>
              <p className={styles.text}>
                The hard part is done. In order to solve for x all we need to do
                is substitute y into either equation. We'll use{" "}
                <InlineMath>{problem3_2}</InlineMath> for illustrative purposes.
              </p>
              <p className={styles.text}>
                Substituting in, we get <InlineMath>{solution3_6}</InlineMath>.
                Subtracting the first term from both sides, we get{" "}
                <InlineMath>{solution3_7}</InlineMath>. Before dividing both
                sides by 6 we will simplify the right-hand side. In this way we
                won't get lost in the calculations. You should always simplify
                as much as possible between steps to reduce the risk of making a
                silly mistake.
                <p className={styles.text}>
                  Simplifying, we get <InlineMath>{solution3_8}</InlineMath>,
                  which is much easier to work with. In fact, we can see by
                  checking various values that both the numerator and
                  denominator are divisible by 3, so we can divide that out and
                  further simplify to <InlineMath>{solution3_9}</InlineMath>.
                  Now, to solve for x we just divide both sides by 6 to finally
                  get <InlineMath>{solution3_10}</InlineMath>.
                </p>
                <p className={styles.text}>
                  There's one more step here. Since both the numerator and
                  denominator are even, we know that they're divisible by 2. So,
                  we can divide this out from the top and bottom to get{" "}
                  <InlineMath>{solution3_11}</InlineMath>. We can go a step
                  further, though, because both 108 and 39 are divisible by 3.
                  So, simplifying further, we get{" "}
                  <InlineMath>{solution3_12}</InlineMath>.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
