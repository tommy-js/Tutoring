import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

interface Props {
  text: string;
}

export const InlineDefinition: React.FC<Props> = (props) => {
  return (
    <div className={styles.inline_definition}>
      <InlineMath>{props.text}</InlineMath>
    </div>
  );
};
