import React from "react";
import { Logo } from "../Logo/Logo";
import { MaterialsNav } from "../MaterialsNav/MaterialsNav";
import { ScheduleSession } from "../ScheduleSession/ScheduleSession";
import { Faq } from "../Faq/Faq";
import { Signin } from "../Signin/Signin";
import styles from "./styles.module.scss";

export const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <MaterialsNav />
      <ScheduleSession />
      <Faq />
      <Signin />
    </div>
  );
};
