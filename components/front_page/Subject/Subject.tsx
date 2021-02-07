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
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (opened === true) setHeight("75px");
    else setHeight("0px");
  }, [opened]);

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
      <p style={{ height }} className={styles.subtext}>
        {props.subtext}
      </p>
    </div>
  );
};
