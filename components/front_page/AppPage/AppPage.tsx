import React from "react";
import { Introduction } from "../Introduction/Introduction";
import { Deal } from "../Deal/Deal";
import { SatCard } from "../SatCard/SatCard";
import { AtAGlance } from "../AtAGlance/AtAGlance";
import { ScheduleSession } from "../ScheduleSession/ScheduleSession";
import { SubjectHeader } from "../SubjectHeader/SubjectHeader";
import { Subjects } from "../Subjects/Subjects";
import { OurTeam } from "../OurTeam/OurTeam";
import { Footer } from "../../Footer/Footer";
import { WhyMe } from "../WhyMe/WhyMe";
import { EmailSignup } from "../../EmailSignup/EmailSignup";
import Fade from "react-reveal/Fade";
import styles from "./styles.module.scss";

export const AppPage: React.FC = () => {
  return (
    <div className={styles.title_header}>
      <SubjectHeader />
      <div className={styles.app_page}>
        <Subjects />
        <Deal />
        <SatCard />
        <Fade>
          <Introduction />
          <ScheduleSession />
          <AtAGlance />
          <OurTeam />
          <WhyMe />
          <EmailSignup />
        </Fade>
      </div>
      <div className={styles.bottom_container} />
      <Footer />
    </div>
  );
};
