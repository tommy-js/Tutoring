import React from "react";
import styles from "./styles.module.scss";

const discount = require("../../../public/discount.png");

export const FreeSession: React.FC = () => {
  return (
    <div className={styles.free_session}>
      <div className={styles.image_block}>
        <img src={discount} className={styles.image} />
      </div>
    </div>
  );
};
