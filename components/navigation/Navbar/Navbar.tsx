import React from "react";
import { Logo } from "../Logo/Logo";
import { ScheduleSession } from "../ScheduleSession/ScheduleSession";
import { Policy } from "../Policy/Policy";
import { Faq } from "../Faq/Faq";
import { Contact } from "../Contact/Contact";
import { Pricing } from "../Pricing/Pricing";
import { Blog } from "../Blog/Blog";
import styles from "./styles.module.scss";

export const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Contact />
      <Blog />
      <Pricing />
      <Faq />
      <ScheduleSession />
    </div>
  );
};
