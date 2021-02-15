import React from "react";
import { TitleCard } from "../TitleCard/TitleCard";
import { Introduction } from "../Introduction/Introduction";
import { AtAGlance } from "../AtAGlance/AtAGlance";
import { ScheduleSession } from "../ScheduleSession/ScheduleSession";
import { Qualifications } from "../Qualifications/Qualifications";
import { Hobbies } from "../Hobbies/Hobbies";
import { Subjects } from "../Subjects/Subjects";
import { WhyMe } from "../WhyMe/WhyMe";
import { Pricing } from "../Pricing/Pricing";
import { EmailForm } from "../EmailForm/EmailForm";
import { Contact } from "../Contact/Contact";
import { Faq } from "../Faq/Faq";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.scss";

export const AppPage: React.FC = () => {
  return (
    <div className={styles.app_page}>
      <TitleCard />
      <Introduction />
      <AtAGlance />
      <ScheduleSession />
      <Fade>
        <Qualifications />
        <Hobbies />
        <Subjects />
        <WhyMe />
        <Pricing />
        <Faq />
        <EmailForm />
        <Contact />
      </Fade>
    </div>
  );
};
