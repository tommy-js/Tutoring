import React from "react";
import { Header } from "../Header/Header";
import { Lateness } from "../Lateness/Lateness";
import { Cancellations } from "../Cancellations/Cancellations";
import { NoShow } from "../NoShow/NoShow";
import { SinglePerson } from "../SinglePerson/SinglePerson";
import { TechnicalIssues } from "../TechnicalIssues/TechnicalIssues";
import { FailureToPay } from "../FailureToPay/FailureToPay";
import { PaymentTimeframe } from "../PaymentTimeframe/PaymentTimeframe";
import styles from "./styles.module.scss";

export const Policy: React.FC = () => {
  return (
    <div className={styles.policy}>
      <Header />
      <Lateness />
      <Cancellations />
      <NoShow />
      <SinglePerson />
      <TechnicalIssues />
      <FailureToPay />
      <PaymentTimeframe />
    </div>
  );
};
