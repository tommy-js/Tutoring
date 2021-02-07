import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

interface Props {
  identity: string;
  index: number;
}

export const Identity: React.FC<Props> = (props) => {
  return (
    <div className={styles.indentity}>
      <p>
        {props.index}. Indentity: <InlineMath>{props.identity}</InlineMath>
      </p>
    </div>
  );
};
