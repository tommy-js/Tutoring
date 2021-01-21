import React from "react";
import { Header } from "../Header/Header";
import { PaymentOptions } from "../PaymentOptions/PaymentOptions";
import { Process } from "../Process/Process";
import { NoShow } from "../NoShow/NoShow";
import { RequiredEquipment } from "../RequiredEquipment/RequiredEquipment";
import { Cancellations } from "../Cancellations/Cancellations";
import { BulkPayment } from "../BulkPayment/BulkPayment";
import styles from "./styles.module.scss";

export const Faq: React.FC = () => {
  return (
    <div className={styles.faq}>
      <Header />
      <PaymentOptions />
      <Process />
      <NoShow />
      <RequiredEquipment />
      <Cancellations />
      <BulkPayment />
    </div>
  );
};
