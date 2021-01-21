import React from "react";
import { WelcomeHeader } from "../WelcomeHeader/WelcomeHeader";
import { CourseMaterials } from "../CourseMaterials/CourseMaterials";
import { ViewAllMaterials } from "../ViewAllMaterials/ViewAllMaterials";
import styles from "./styles.module.scss";

export const Materials: React.FC = () => {
  return (
    <div className={styles.materials}>
      <WelcomeHeader />
      <CourseMaterials />
      <ViewAllMaterials />
    </div>
  );
};
