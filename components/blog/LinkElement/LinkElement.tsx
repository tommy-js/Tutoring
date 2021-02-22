import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  image: string;
  title: string;
  route: string;
  description: string;
}

export const LinkElement: React.FC<Props> = (props) => {
  return (
    <Link href={props.route}>
      <div className={styles.link_element}>
        <div className={styles.image_block}>
          <img className={styles.image} src={props.image} />
        </div>
        <div className={styles.text_block}>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.description}>{props.description}</p>
        </div>
      </div>
    </Link>
  );
};
