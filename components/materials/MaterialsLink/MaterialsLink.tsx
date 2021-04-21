import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  id: string;
  title: string;
  path: string;
  image: string;
}

export const MaterialsLink: React.FC<Props> = (props) => {
  return (
    <div className={styles.material_link_container}>
      <Link href={`/materials/${props.path}`} passHref>
        <a className={styles.material_link}>
          <div className={styles.image_block}>
            <img src={props.image} className={styles.image} />
          </div>
          <p className={styles.title}>{props.title}</p>
        </a>
      </Link>
    </div>
  );
};
