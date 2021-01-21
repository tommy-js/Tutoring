import React from "react";
import { TitleCard } from "../TitleCard/TitleCard";
import { Qualifications } from "../Qualifications/Qualifications";
import { Hobbies } from "../Hobbies/Hobbies";
import { Subjects } from "../Subjects/Subjects";
import { WhyMe } from "../WhyMe/WhyMe";
import { Pricing } from "../Pricing/Pricing";
import { Schedule } from "../Schedule/Schedule";
import { Contact } from "../Contact/Contact";
import styles from "./styles.module.scss";

export const AppPage: React.FC = () => {
  return (
    <div className={styles.app_page}>
      <TitleCard />
      <Qualifications />
      <Hobbies />
      <Subjects />
      <WhyMe />
      <Pricing />
      <Schedule />
      <Contact />
    </div>
  );
};
