import React from "react";
import { Header } from "../Header/Header";
import { ValueProposition } from "../ValueProposition/ValueProposition";
import { OurTeam } from "../../front_page/OurTeam/OurTeam";
import { Reviews } from "../Reviews/Reviews";
import { InquiryForm } from "../InquiryForm/InquiryForm";
import styles from "./styles.module.scss";

export const Landing: React.FC = () => {
  return (
    <div className={styles.landing}>
      <Header />
      <ValueProposition />
      <OurTeam />
      <InquiryForm />
    </div>
  );
};
