import React from "react";
import styles from "./styles.module.scss";

export const PaymentOptions: React.FC = () => {
  return (
    <div className={styles.payment_options}>
      <h2 className={styles.header}>What payment options do you accept?</h2>
      <p className={styles.text}>
        I accept a variety of payment options*, making paying for your session
        as easy as signing up! These options include:
      </p>
      <ul className={styles.text}>
        <li>Credit card or bank transfer at the time of invoicing.</li>
        <li>Paypal or Stripe.</li>
        <li>
          Cryptocurrencies such as Bitcoin(BTC), Litecoin(LTC), Etherium(ETH),
          and Ripple(XRP).
        </li>
      </ul>
      <p className={styles.text}>
        *Note that due to the online nature of my business I cannot accept cash
        or checks for my services.
      </p>
    </div>
  );
};
