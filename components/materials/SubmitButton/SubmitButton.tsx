import React from "react";
import styles from "./styles.module.scss";

interface Props {
  modSubmitted: () => void;
}

export const SubmitButton: React.FC<Props> = (props) => {
  return (
    <button onClick={() => props.modSubmitted()} className={styles.button}>
      Check
    </button>
  );
};
