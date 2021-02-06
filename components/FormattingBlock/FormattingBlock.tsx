import React, { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import styles from "./styles.module.scss";
const katex = require("katex");

interface Props {
  header: string;
  text: string;
  placeholder: string;
}

export const FormattingBlock: React.FC<Props> = (props) => {
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
    <div className={styles.formatting_block}>
      <h2 className={styles.header}>{props.header}</h2>
      <p className={styles.text}>{props.text}</p>
      <div className={styles.try_me}>
        <p className={styles.example}>Try this out: </p>
        <input
          className={styles.input}
          onChange={(e) => testKatex(e.target.value)}
          placeholder={props.placeholder}
        />
        <InlineMath>{answer}</InlineMath>
      </div>
    </div>
  );
};
