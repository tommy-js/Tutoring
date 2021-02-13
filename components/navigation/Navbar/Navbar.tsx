import React from "react";
import { Logo } from "../Logo/Logo";
import { MaterialsNav } from "../MaterialsNav/MaterialsNav";
import { ScheduleSession } from "../ScheduleSession/ScheduleSession";
import { Policy } from "../Policy/Policy";
import { Faq } from "../Faq/Faq";
import { Pricing } from "../Pricing/Pricing";
import styles from "./styles.module.scss";

export const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <MaterialsNav />
      <Policy />
      <Faq />
      <ScheduleSession />
      <Pricing />
    </div>
  );
};
