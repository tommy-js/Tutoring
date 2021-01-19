import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  id: number;
  title: string;
  subtext: string;
  image: string;
}

export const Subject: React.FC<Props> = (props) => {
  const [opened, setOpened] = useState(false);

  function renderInfo() {
    if (opened === true) {
      return (
        <div>
          <p>{props.subtext}</p>
        </div>
      );
    } else return null;
  }

  return (
    <div
      className={styles.subject}
      key={props.id}
      onClick={() => setOpened(!opened)}
    >
      <div className={styles.image_block}>
        <img className={styles.image} src={props.image} />
      </div>
      <p className={styles.title}>{props.title}</p>
      {renderInfo()}
    </div>
  );
};
