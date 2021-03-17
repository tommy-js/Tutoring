import React from "react";
import styles from "./styles.module.scss";

const bitcoin = require("../../../public/bitcoin.png");
const credit_card = require("../../../public/credit_card.png");
const mobile_payment = require("../../../public/mobile_payment.png");

export const PaymentOptions: React.FC = () => {
  return (
    <div className={styles.payment_options}>
      <h2 className={styles.header}>What payment options do you accept?</h2>
      <p className={styles.text}>
        I accept a variety of payment options, making paying for your session as
        easy as signing up! These options include:
      </p>

      <div className={styles.payment_info_block}>
        <div className={styles.image_block}>
          <img src={credit_card} className={styles.image} />
        </div>
        <div className={styles.text_container}>
          Credit card or bank transfer at the time of invoicing.
        </div>
      </div>
      <div className={styles.payment_info_block}>
        <div className={styles.image_block}>
          <img src={mobile_payment} className={styles.image} />
        </div>
        <div className={styles.text_container}>Paypal, Stripe, or Venmo.</div>
      </div>
      <div className={styles.payment_info_block}>
        <div className={styles.image_block}>
          <img src={bitcoin} className={styles.image} />
        </div>
        <div className={styles.text_container}>
          Cryptocurrencies such as Bitcoin(BTC), Litecoin(LTC), Etherium(ETH),
          and Ripple(XRP).
        </div>
      </div>
    </div>
  );
};
