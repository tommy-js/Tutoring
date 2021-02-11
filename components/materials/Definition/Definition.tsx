import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

interface Props {
  title: string;
  def: string;
}

export const Definition: React.FC<Props> = (props) => {
  return (
    <div className={styles.definition}>
      <h2 className={styles.header}>{props.title}</h2>
      <p className={styles.def}>{props.def}</p>
    </div>
  );
};
