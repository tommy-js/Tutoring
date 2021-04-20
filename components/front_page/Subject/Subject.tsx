import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  id: number;
  title: string;
  subtext: string;
  image: string;
  link: string;
}

export const Subject: React.FC<Props> = (props) => {
  return (
    <div className={styles.subject} key={props.id}>
      <Link href={props.link}>
        <div className={styles.inner_subject}>
          <div className={styles.image_block}>
            <img
              className={styles.image}
              src={props.image}
              alt={`${props.title} subject image`}
            />
          </div>
          <p className={styles.title}>{props.title}</p>
        </div>
      </Link>
    </div>
  );
};
