import React from "react";
import { TitleCard } from "../TitleCard/TitleCard";
import { Introduction } from "../Introduction/Introduction";
import { Qualifications } from "../Qualifications/Qualifications";
import { Hobbies } from "../Hobbies/Hobbies";
import { Subjects } from "../Subjects/Subjects";
import { WhyMe } from "../WhyMe/WhyMe";
import { Pricing } from "../Pricing/Pricing";
import { Contact } from "../Contact/Contact";
import { Faq } from "../Faq/Faq";
import styles from "./styles.module.scss";

export const AppPage: React.FC = () => {
  return (
    <div className={styles.app_page}>
      <TitleCard />
      <Introduction />
      <Qualifications />
      <Hobbies />
      <Subjects />
      <WhyMe />
      <Pricing />
      <Faq />
      <Contact />
    </div>
  );
};
