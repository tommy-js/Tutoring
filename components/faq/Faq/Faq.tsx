import React from "react";
import { Header } from "../Header/Header";
import { PaymentOptions } from "../PaymentOptions/PaymentOptions";
import { WhyMe } from "../WhyMe/WhyMe";
import { Process } from "../Process/Process";
import { RequiredEquipment } from "../RequiredEquipment/RequiredEquipment";
import { Cancellations } from "../Cancellations/Cancellations";
import { BulkPayment } from "../BulkPayment/BulkPayment";
import { Homework } from "../Homework/Homework";
import { Access } from "../Access/Access";
import { Footer } from "../../Footer/Footer";
import styles from "./styles.module.scss";

export const Faq: React.FC = () => {
  return (
    <div className={styles.faq_container}>
      <div className={styles.faq}>
        <Header />
        <PaymentOptions />
        <WhyMe />
        <Process />
        <RequiredEquipment />
        <Cancellations />
        <BulkPayment />
        <Access />
        <Homework />
      </div>
      <Footer />
    </div>
  );
};
