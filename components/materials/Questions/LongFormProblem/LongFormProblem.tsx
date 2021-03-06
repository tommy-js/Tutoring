import React, { useEffect, useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import { SubmitButton } from "../../SubmitButton/SubmitButton";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

interface Props {
  problem: any;
  solution: string;
  index: number;
}

export const LongFormProblem: React.FC<Props> = (props) => {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  function testKatex(equa: string) {
    try {
      var html = katex.renderToString(equa);
      if (html) setAnswer(equa);
    } catch (e) {
      setAnswer(answer);
    }
  }

  function modSubmitted() {
    setSubmitted(true);
  }

  useEffect(() => {
    if (submitted === true) setShowSolution(true);
  }, [submitted]);

  function renderSolution() {
    if (showSolution === true) {
      return (
        <div>
          <p>Solution:</p>
          <BlockMath>{props.solution}</BlockMath>
        </div>
      );
    } else return null;
  }
  return (
    <div className={styles.long_form_problem}>
      <div className={styles.inline_question}>
        <p className={styles.question}>{props.problem}</p>
        <label>
          <div className={styles.answer}>
            <input
              onChange={(e) => testKatex(e.target.value)}
              className={styles.answer_input}
              placeholder="Your Answer"
            />
          </div>
        </label>
        <SubmitButton modSubmitted={modSubmitted} />
      </div>
      <div className={styles.answer_block}>
        <p>Your Answer:</p>
        <BlockMath>{answer}</BlockMath>
      </div>
      <div>{renderSolution()}</div>
    </div>
  );
};
