import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  id: string;
  title: string;
  path: string;
}

export const MaterialsLink: React.FC<Props> = (props) => {
  return (
    <Link href={`/materials/${props.path}`} passHref>
      <a className={styles.material_link}>
        <span className={styles.title}>{props.title}</span>
      </a>
    </Link>
  );
};
