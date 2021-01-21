import React from "react";
import { TitleCard } from "../TitleCard/TitleCard";
import { Qualifications } from "../Qualifications/Qualifications";
import { Hobbies } from "../Hobbies/Hobbies";
import { Subjects } from "../Subjects/Subjects";
import { Contact } from "../Contact/Contact";
import { Pricing } from "../Pricing/Pricing";
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
      <Contact />
    </div>
  );
};
