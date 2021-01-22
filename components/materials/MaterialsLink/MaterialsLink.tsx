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
      <Pathing id={props.id} title={props.title} />
    </Link>
  );
};

const Pathing = React.forwardRef(({ onClick, href, id, title }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <div className={styles.material_link} key={id}>
        <p className={styles.title}>{title}</p>
      </div>
    </a>
  );
});
