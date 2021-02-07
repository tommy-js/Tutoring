import React, { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import styles from "./styles.module.scss";

const katex = require("katex");

interface Props {
  text: string;
  function: string;
  index: number;
}

export const WordQuestion = (props) => {
  const [answer, setAnswer] = useState("");

  function testKatex(equa: string) {
    try {
      var html = katex.renderToString(equa);
      if (html) setAnswer(equa);
    } catch (e) {
      setAnswer(answer);
    }
  }

  return (
    <div className={styles.word_question}>
      <p className={styles.question}>
        {props.index}. {props.text}
      </p>
      <div className={styles.function}>
        <InlineMath>{props.function}</InlineMath>
      </div>
      :
      <div className={styles.answer}>
        <input
          onChange={(e) => testKatex(e.target.value)}
          className={styles.answer_input}
          placeholder="Your Answer"
        />
      </div>
      <div className={styles.answer_block}>
        <BlockMath>{answer}</BlockMath>
      </div>
    </div>
  );
};
