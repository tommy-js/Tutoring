import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  path: string;
  image: string;
  text: string;
}

export const SubjectLink: React.FC<Props> = (props) => {
  return (
    <div className={styles.subject_link}>
      <Link href={props.path} passHref>
        <a className={styles.link}>
          <div className={styles.image_block}>
            <img className={styles.image} src={props.image} />
          </div>
          <p className={styles.text}>{props.text}</p>
        </a>
      </Link>
    </div>
  );
};
