import React from "react";
import { Introduction } from "../Introduction/Introduction";
import { AtAGlance } from "../AtAGlance/AtAGlance";
import { ScheduleSession } from "../ScheduleSession/ScheduleSession";
import { SubjectHeader } from "../SubjectHeader/SubjectHeader";
import { Subjects } from "../Subjects/Subjects";
import { OurTeam } from "../OurTeam/OurTeam";
import { Footer } from "../../Footer/Footer";
import { WhyMe } from "../WhyMe/WhyMe";
import { EmailForm } from "../EmailForm/EmailForm";
import { Contact } from "../Contact/Contact";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.scss";

export const AppPage: React.FC = () => {
  return (
    <div className={styles.title_header}>
      <SubjectHeader />
      <div className={styles.app_page}>
        <Introduction />
        <ScheduleSession />
        <AtAGlance />
        <Contact />
        <Fade>
          <Subjects />
          <EmailForm />
          <OurTeam />
          <WhyMe />
        </Fade>
      </div>
      <div className={styles.bottom_container} />
      <Footer />
    </div>
  );
};
