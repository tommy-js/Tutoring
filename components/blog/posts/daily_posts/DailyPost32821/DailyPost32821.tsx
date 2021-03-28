import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const ar1_1 = require("../../../../../public/blogs/3-28-21/ar1_1.png");
const ar1_2 = require("../../../../../public/blogs/3-28-21/ar1_2.png");
const ar1_3 = require("../../../../../public/blogs/3-28-21/ar1_3.png");
const ar2_1 = require("../../../../../public/blogs/3-28-21/ar2_1.png");
const ar2_2 = require("../../../../../public/blogs/3-28-21/ar2_2.png");
const ar2_3 = require("../../../../../public/blogs/3-28-21/ar2_3.png");
const ar2_4 = require("../../../../../public/blogs/3-28-21/ar2_4.png");
const ar2_5 = require("../../../../../public/blogs/3-28-21/ar2_5.png");

const katex = require("katex");

export const DailyPost32821: React.FC = () => {
  const problem2 = "\\frac{27}{4}";
  const solution2_1 = "6\\frac{3}{4}";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>
        Arithmetic | Simplification, Multiplication & Long Division
      </h1>
      <h2 className={styles.subheader}>Posted on 3/28/21</h2>
      <div className={styles.video_block}>
        <ReactPlayer
          url="https://youtu.be/1PHgOGzzQag"
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
            1. Simplify the expression -(4-6)-(6+3).
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                In order to simplify this expression we first begin with what's
                in the parentheses. We know that 4-6=-2 and 6+3=9, so our
                expression becomes -(-2)-(9). Now, when we multiply two
                negatives they give us a positive, so -(-2)=2.
              </p>
              <p className={styles.text}>
                So, we now have just 2-(9). Since there is nothing else in the
                parentheses except for 9, we can simplify this down to 2-9. Our
                answer, then, is that -(4-6)-(6+3)=-7.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. Use long division to find <InlineMath>{problem2}</InlineMath>.
          </div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                The process of long division is long but not as complicated as
                it may seem. We essentially need to keep asking how many times
                our divisor goes into the number we are dividing, and just keep
                going until there's nothing left to divide.
              </p>
              <div className={styles.images_block}>
                <div className={styles.image_container}>
                  <img className={styles.image} src={ar1_1} />
                </div>
                <div className={styles.image_container}>
                  <img className={styles.image} src={ar1_2} />
                </div>
                <div className={styles.image_container}>
                  <img className={styles.image} src={ar1_3} />
                </div>
              </div>
              <p className={styles.text}>
                In the left-most image we're looking to ask how many times 4
                goes into 2. Since it doesn't go into cleanly, we then ask how
                many times 4 goes into 27. We see that 6 times 4 is 24, while 7
                times 4 is 28. So, 4 goes cleanly into 27 6 times. We write that
                number at the top of the division symbol and subtract away 24
                from 27, leaving us with 3. This is what we see in the middle
                image.
              </p>
              <p className={styles.text}>
                Finally, we need to ask how many times 4 goes into 3. We could
                simply say that 27 divided by 4 is 6 with a remainder of 3. In
                this problem we'll write it as a fraction, though. This means
                that our final answer is that 27 divided by 4 is{" "}
                <InlineMath>{solution2_1}</InlineMath>.
              </p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>3. Multiply 25 by 22.</div>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                Like the previous problem, this is a bit of a process, but is
                easy once you get the hang of it.
              </p>
              <div className={styles.images_block}>
                <div className={styles.image_container}>
                  <img className={styles.image} src={ar2_1} />
                </div>
                <div className={styles.image_container}>
                  <img className={styles.image} src={ar2_2} />
                </div>
                <div className={styles.image_container}>
                  <img className={styles.image} src={ar2_3} />
                </div>
                <div className={styles.image_container}>
                  <img className={styles.image} src={ar2_4} />
                </div>
                <div className={styles.image_container}>
                  <img className={styles.image} src={ar2_5} />
                </div>
              </div>
              <p className={styles.text}>
                We begin by writing our multiplication in the form on the upper
                left. This allows us to easily go through and multiply
                everything by hand. In the second image, we multiply 2 by 5 to
                get 10. Since this is a two-digit number, we put the first digit
                above the next number in the process, in this case the 2 in 25.
                We then drop down the second digit below the line, which is 0
                here.
              </p>
              <p className={styles.text}>
                Then, we go on to multiply the next number in the process, which
                is here the 2 in 25 and the second 2 in 22. We take the 1 that
                we put above the 2 in our last step and add this to the number
                we get when multiplying 2 by 2. This gives us a 5, which we drop
                down in front of the 0 below the line.
              </p>
              <p className={styles.text}>
                We go on to repeat this process with the first digit of 22,
                dropping the extra 1 from above the 2 that we used to add to 4
                in our last step. Since 2 times 5 is again 10, we put a 1 above
                the 2 in 25 again. The only difference in this part of the
                process is that we move over whatever values we find one space.
                Since 2 times 5 is again 10, we put a 1 above the two and drop
                the 0 below the 5 under the line.
              </p>
              <p className={styles.text}>
                Finally, we finish out the process to get the last image, where
                we add each term together to get a final value of 550.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_div} />
    </div>
  );
};
