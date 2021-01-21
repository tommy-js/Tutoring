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
    <div className={styles.material_link} key={props.id}>
      <p className={styles.title}>{props.title}</p>
      <Link href={`/materials/${props.path}`}>
        <a>Go</a>
      </Link>
    </div>
  );
};
