import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const bitcoin = require("../../../public/bitcoin.png");
const credit_card = require("../../../public/credit_card.png");
const mobile_payment = require("../../../public/mobile_payment.png");
const arrow = require("../../../public/arrow.png");

export const PaymentOptions: React.FC = () => {
  const [droppedDown, setDroppedDown] = useState(false);
  const [droppedHeight, setDroppedHeight] = useState("0px");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (droppedDown === true) {
      setDroppedHeight("310px");
      setRotation(180);
    } else {
      setRotation(0);
      setDroppedHeight("0px");
    }
  }, [droppedDown]);

  return (
    <div className={styles.payment_options}>
      <div
        className={styles.upper}
        onClick={() => setDroppedDown(!droppedDown)}
      >
        <div className={styles.dropdown_icon}>
          <img
            src={arrow}
            className={styles.icon}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>
        <h2 className={styles.header}>What payment options do you accept?</h2>
      </div>

      <div className={styles.dropdown} style={{ maxHeight: droppedHeight }}>
        <p className={styles.text}>
          I accept a variety of payment options, making paying for your session
          as easy as signing up! These options include:
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
            Cryptocurrencies such as Bitcoin(BTC), Litecoin(LTC), and
            Etherium(ETH).
          </div>
        </div>
      </div>
    </div>
  );
};
