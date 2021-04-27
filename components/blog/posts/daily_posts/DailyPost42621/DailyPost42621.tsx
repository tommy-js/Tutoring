import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import Link from "next/link";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

const box = require("../../../../../public/blogs/4-26-21/box.png");

export const DailyPost42621: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [linkColor, setLinkColor] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problemGraphics, setProblemGraphics] = useState("blur(7px)");

  const answer2 = "x=\\sqrt{\\frac{7}{5}}";
  const answer3 = "x=\\sqrt[3]{\\frac{375}{32}}";
  const answer4 = "x=\\sqrt[3]{\\frac{274}{87}}";

  const solution1 = "h=\\frac{25}{2x^2}";
  const solution2 = "C(x)=16x^2+\\frac{375}{x}";
  const solution3 = "C'(x)=32x-\\frac{375}{x^2}";
  const solution4 = "32x-\\frac{375}{x^2}=0";
  const solution5 = "32x=\\frac{375}{x^2}";
  const solution6 = "32x^3=375";
  const solution7 = "x^3=\\frac{375}{32}";
  const solution8 = "x=\\sqrt[3]{\\frac{375}{32}}";

  function revealProblem1() {
    setProblem1Color("#3c3b3b");
    setLinkColor("#0b2cc2");
    setProblem1Shadow("none");
    setProblemGraphics("blur(0px)");
  }

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Calculus | Box Optimization</h1>
      <h2 className={styles.subheader}>Posted on 4/26/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/pWIA802XBmA"
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
            A rectangular box with an open top must have a total volume of{" "}
            <InlineMath>25m^3</InlineMath>. The length of its base is twice that
            of its width. Material for its base costs $8 per square meter.
            Material for the sides costs $5 per meter. Find the total cost of
            the material for the cheapest box.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>x=14</li>
              <li className={styles.individual_choice}>
                <InlineMath>{answer2}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{answer3}</InlineMath>
              </li>
              <li className={styles.individual_choice}>
                <InlineMath>{answer4}</InlineMath>
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
              <div className={styles.details}>
                <p className={styles.text}>
                  The first thing we want to do is draw the box. This should
                  always be our first step, as it will help us visualize what
                  we're trying to solve for.
                </p>
                <div className={styles.large_image_block}>
                  <img
                    src={box}
                    className={styles.image}
                    style={{ filter: problemGraphics }}
                    alt="Box with sides of x, 2x, and h"
                  />
                </div>
                <p className={styles.text}>
                  After drawing the box, we want to determine a cost function.
                  We see that since the box is longer than it is wide, and the
                  cost of the base is $8 per square meter, the function for our
                  base's cost is <InlineMath>C=8*x*2x</InlineMath>. Now we
                  really need to find the cost of the sides, and then we'll have
                  figured out our function.
                </p>
                <p className={styles.text}>
                  Since we have the sides costing $5 per square meter, we know
                  that the narrower sides are going to cost{" "}
                  <InlineMath>C=5*x*h</InlineMath>, where h is the height of the
                  box, and the wider sides are going to run us{" "}
                  <InlineMath>C=5*2x*h</InlineMath>.
                </p>
                <p className={styles.text}>
                  The total cost of the box, after a hefty amount of
                  simplification, can be expressed as the function{" "}
                  <InlineMath>C=16x^2+30xh</InlineMath>. We have a problem,
                  though; we don't know how to optimize with respect to two
                  variables, x and h. Luckily, we have a trick to figure out
                  what the value of h is.
                </p>
                <p className={styles.text}>
                  Since the question told us that the volume must be 25 cubic
                  meters, and we know that{" "}
                  <InlineMath>Volume=Base*Width*Height</InlineMath>, we see that{" "}
                  <InlineMath>x*2x*h=25</InlineMath>. Since we have h here, we
                  can easily solve for h in terms of x. Dividing both sides by{" "}
                  <InlineMath>2x^2</InlineMath>, we get that{" "}
                  <InlineMath>{solution1}</InlineMath>. Thus, we can substitute
                  this value of h into our cost function to get{" "}
                  <InlineMath>{solution2}</InlineMath>. This is, of course,
                  after a bit of simplification.
                </p>
                <p className={styles.text}>
                  Now that we have a function in terms of x, we want to figure
                  out the dimensions of the most cost-effective box we can buy.
                  To do this, we'll find the minimums of the function, which
                  requires us to find its derivative and solve for zero. In
                  other words, we're looking for the critical points of the
                  function and then determining the minimum. Taking the
                  derivative of this function is easy; it's a simple Power Rule
                  problem. If you need a refresher on the Power Rule,{" "}
                  <Link href="https://functionaltutoring.com/materials/calculus1/methods/Derivatives">
                    <a
                      className={styles.link}
                      style={{
                        color: linkColor,
                        textShadow: problem1Shadow,
                      }}
                    >
                      we have articles on this
                    </a>
                  </Link>{" "}
                  in our calculus page.
                </p>
                <p className={styles.text}>
                  After taking the derivative, we're left with{" "}
                  <InlineMath>{solution3}</InlineMath>. Since we're looking for
                  the critical points, we take this function and set it equal to
                  zero. <BlockMath>{solution4}</BlockMath>
                </p>
                <p className={styles.text}>
                  We add our fraction to both sides and get{" "}
                  <InlineMath>{solution5}</InlineMath>. Now, multiplying each
                  side by <InlineMath>x^2</InlineMath>, this gives us{" "}
                  <InlineMath>{solution6}</InlineMath>. At this point solving
                  for x should be fairly easy and straightforward. We simply
                  divide both sides by 32 to get{" "}
                  <InlineMath>{solution7}</InlineMath>, and then take the third
                  root of x.
                </p>
                <p className={styles.text}>
                  Thus, our critical point is{" "}
                  <InlineMath>{solution8}</InlineMath>. Because we only get one
                  critical point, it's very likely that this is the minimum of
                  our function. We could use the Second Derivative Test to make
                  sure this is accurate, but we could also simply use what we
                  know about parabolas to make sure our answer makes sense.
                  Since we have a positive x-squared term on our cost function,
                  we know that it is concave up, and so it has one global
                  minimum value and no global maximum. Thus, our answer must be
                  correct, and we are finished.
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
