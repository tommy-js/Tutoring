import React from "react";
import Link from "next/link";
import { FreeSession } from "../FreeSession/FreeSession";
import { SinglePackage } from "../SinglePackage/SinglePackage";
import { TriplePackage } from "../TriplePackage/TriplePackage";
import { QuintPackage } from "../QuintPackage/QuintPackage";
import styles from "./styles.module.scss";

const discount = require("../../../public/discount.png");
const conversation = require("../../../public/conversation.png");
const email = require("../../../public/email.png");

export const Pricing: React.FC = () => {
  return (
    <div className={styles.pricing}>
      <h1 className={styles.header}>Pricing</h1>
      <div className={styles.scale}>
        <div className={styles.line}></div>
        <div className={styles.bullet_point}></div>
      </div>
      <FreeSession />
      <SinglePackage />
      <TriplePackage />
      <h2 className={styles.subheader}>Discounts & Rewards</h2>
      <div className={styles.pricing_container}>
        <div className={styles.image_block}>
          <img src={conversation} className={styles.image} />
        </div>
        <div className={styles.text_block}>
          <div className={styles.text}>
            Get 25% off your next session when you refer a friend!
          </div>
          <div className={styles.inline_text}>
            Just have them let us know you sent them during their session and
            you'll both enjoy 25% off.
          </div>
        </div>
      </div>
      <div className={styles.pricing_container}>
        <div className={styles.image_block}>
          <img src={email} className={styles.image} />
        </div>
        <div className={styles.text_block}>
          <div className={styles.text}>
            Enjoy 25% off your next session when you join our mailing list
          </div>
          <div className={styles.inline_text}>
            Get even more discounts, updates, and new math problem sets from us
            through email.
          </div>
        </div>
      </div>
      <div className={styles.margin}>
        <Link href="/schedule">
          <a className={styles.link}>Sign up for a session</a>
        </Link>
      </div>
    </div>
  );
};
