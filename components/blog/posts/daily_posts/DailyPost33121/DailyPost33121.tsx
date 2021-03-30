import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const DailyPost33121: React.FC = () => {
  const problem2_option1 = "422b+63e \\geq 4,000";
  const problem2_option2 = "422e+63b > 4,000";
  const problem2_option3 = "422b+63e < 4,000";
  const problem2_option4 = "\\frac{422}{b}+\\frac{63}{e} > 4,000";

  const problem3_option1 = "a < 12";
  const problem3_option2 = "a > 15";
  const problem3_option3 = "12 < a < 15";
  const problem3_option4 = "a = 13.5";

  return (
    <div className={styles.daily_post}>
      <h1 className={styles.header}>SAT Prep | Word Problems</h1>
      <h2 className={styles.subheader}>Posted on 3/31/21</h2>
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
            1. The recommended daily potassium intake for an adult is roughly
            4,000 milligrams. One banana contains 422 mg of potassium and one
            egg contains 63 mg of potassium. Which of the following inequalities
            represents the possible number of bananas b and eggs e an adult
            could have daily to meet the recommended daily potassium intake from
            these foods alone?
          </div>
          <ol className={styles.multiple_choice}>
            <li>
              <InlineMath>{problem2_option1}</InlineMath>
            </li>
            <li>
              <InlineMath>{problem2_option2}</InlineMath>
            </li>
            <li>
              <InlineMath>{problem2_option3}</InlineMath>
            </li>
            <li>
              <InlineMath>{problem2_option4}</InlineMath>
            </li>
          </ol>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                We're looking for the total number of possible ways we could
                combine bananas and eggs to get the recommended intake of 4,000
                mg of potassium. We can immediately strike out answer 2, as e
                represents eggs and b bananas, and answer 3, since we're trying
                to find ways we can get at least 4,000 mg, not less than this.
              </p>
              <p className={styles.text}>
                This leaves the possibility of answer 1 and 4. Answer 4 is not
                correct because it stems from an incorrect understanding of what
                we're trying to do. We are looking for ways to combine bananas
                and eggs, so it makes no sense to divide them. This leaves
                answer 1, which is correct.
              </p>
              <p className={styles.text}></p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            2. A teaching assistant randomly selects 40 undergrad students from
            all students enrolled in the math program at their university. He
            asks each of the students, "How many minutes each day do you usually
            study?" The mean study time in this sample is 104 minutes, and the
            margin of error is 3.64 minutes. Another assistant decides to
            reproduce the survey and will try to get a smaller margin of error.
            Which of the following samples are most likely to result in a
            smaller margin of error for the estimated mean time students in this
            math program study daily?
          </div>
          <ol className={styles.multiple_choice}>
            <li>125 randomly selected undergrad math program students.</li>
            <li>10 randomly selected undergrad math program students.</li>
            <li>200 randomly selected students across all programs.</li>
            <li>
              10 randomly selected undergrad students across all programs.
            </li>
          </ol>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                We know that increasing the sample size will result in a
                lowering of the margin of error. This is because outlyers will
                have less of an effect as the number of students within our
                sample grows. By contrast, one or two outlyers in a sample size
                of 10 people will have a great impact on the margin of error.
              </p>
              <p className={styles.text}>
                So, we're left with choice 1 and 3. Because the question is
                specifically asking about students within the math program
                itself, we can get rid of choice 3, and so we know that choice 1
                is the correct answer.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.problem}>
          <div className={styles.problem_header}>
            3. At a zoo, the mean age of all female giraffes is 12 years, and
            the mean age of all males is 15 years. Which of the following must
            be true about the mean age a of the combined group of male and
            female giraffes at the zoo?
          </div>
          <ol className={styles.multiple_choice}>
            <li>
              <InlineMath>{problem3_option1}</InlineMath>
            </li>
            <li>
              <InlineMath>{problem3_option2}</InlineMath>
            </li>
            <li>
              <InlineMath>{problem3_option3}</InlineMath>
            </li>
            <li>
              <InlineMath>{problem3_option4}</InlineMath>
            </li>
          </ol>
          <div className={styles.problem_solution}>
            <h3 className={styles.micro_header}>Solution</h3>
            <div className={styles.solution}>
              <p className={styles.text}>
                We know that because the average age of all males is 15 years
                old, the mean age of the entire group cannot be greater than 15
                years. Likewise, since the mean age of the female giraffes is
                12, the average group age cannot be less than this. So, the mean
                group age has to be somewhere between these two values.
                Therefore, our answer is 3,{" "}
                <InlineMath>{problem3_option3}</InlineMath>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_div} />
    </div>
  );
};
