import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import Link from "next/link";
import { SignUpEmailForm } from "../SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

const pic1 = require("../../../../../public/blogs/4-27-21/pic1.png");
const pic2 = require("../../../../../public/blogs/4-27-21/pic2.png");
const pic3 = require("../../../../../public/blogs/4-27-21/pic3.png");

export const DailyPost42721: React.FC = () => {
  const [problem1Color, setProblem1Color] = useState("transparent");
  const [problem1Shadow, setProblem1Shadow] = useState("0 0 7px #000");
  const [problemGraphics, setProblemGraphics] = useState("blur(7px)");

  const problem = "8\\times 4\\times 3";

  const solution1 = "8\\times 12";
  const solution2 = "8\\times 4\\times 3=96";

  function revealProblem1() {
    setProblem1Color("#3c3b3b");
    setProblem1Shadow("none");
    setProblemGraphics("blur(0px)");
  }

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>Arithmetic | Multiplying 3 Terms</h1>
      <h2 className={styles.subheader}>Posted on 4/27/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/_hZYHs-1II4"
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
            Multiply <InlineMath>{problem}</InlineMath>.
          </div>
          <div className={styles.context_container}>
            <ol className={styles.multiple_choice}>
              <li className={styles.individual_choice}>96</li>
              <li className={styles.individual_choice}>48</li>
              <li className={styles.individual_choice}>102</li>
              <li className={styles.individual_choice}>75</li>
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
                  Multiplication has a property called "commutativity," which
                  means that it doesn't matter what order we multiply our
                  numbers in. In the case of this problem, we could start by
                  multiplying 8 and 4 together or start by multiplying 4 and 3
                  together. Since 4 and 3 are smaller numbers, we'll begin with
                  them.
                </p>
                <p className={styles.text}>
                  4 times 3 is the same as saying we have 3 groupings of 4. What
                  is 3 groupings of 4? Well, 1 grouping of 4 is 4, 2 groupings
                  of 4 is 8, and so 3 groupings of 4 is 12. So, we can rewrite
                  our problem as <InlineMath>{solution1}</InlineMath>. Now, we
                  just need to multiply 8 and 12 together. Of course, the same
                  logic of talking in terms of groupings would work here, but it
                  might not be as effective considering how large these numbers
                  are. Do you really want to try and figure out what 12
                  groupings of 8 are? Instead, we can multiply them out by hand.
                </p>
                <div className={styles.large_image_block}>
                  <img
                    src={pic1}
                    className={styles.image}
                    style={{ filter: problemGraphics }}
                    alt="Multiplication by hand between 8 and 12"
                  />
                </div>
                <p className={styles.text}>
                  Write out the multiplication as above, with 12 sitting above
                  8. Then, we're going to multiply 8 times 2 to get 16. Since
                  this number is greater than 10, put a placeholder 1 above the
                  1 in 12. The 6 from our value of 16 we drop below the line.
                </p>
                <div className={styles.large_image_block}>
                  <img
                    src={pic2}
                    className={styles.image}
                    style={{ filter: problemGraphics }}
                    alt="Multiplication by hand between 8 and 12"
                  />
                </div>
                <p className={styles.text}>
                  Now we will move on to the next digit, the 1 in our value of
                  12. Multiplying 8 by 1, we get 8, and then we just need to add
                  that extra placement 1 we put above it when we multiplied 2 by
                  8. So, 8 plus 1 is 9, and so we drop this below the line.
                </p>
                <div className={styles.large_image_block}>
                  <img
                    src={pic3}
                    className={styles.image}
                    style={{ filter: problemGraphics }}
                    alt="Multiplication by hand between 8 and 12"
                  />
                </div>
                <p className={styles.text}>
                  The 96 that is now sitting below the line is our final value.
                  This means that <InlineMath>{solution2}</InlineMath>.
                </p>
                <p className={styles.text}></p>
                <p className={styles.text}></p>
                <p className={styles.text}></p>
                <p className={styles.text}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
