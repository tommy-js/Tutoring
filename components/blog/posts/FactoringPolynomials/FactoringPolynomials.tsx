import React from "react";
import ReactPlayer from "react-player";
import { BlockMath, InlineMath } from "react-katex";
import { SignUpEmailForm } from "../daily_posts/SignUpEmailForm/SignUpEmailForm";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

const katex = require("katex");

export const FactoringPolynomials: React.FC = () => {
  return (
    <div className={styles.post_container}>
      <div className={styles.post}>
        <h1 className={styles.header}>Factoring Polynomials</h1>
        <h2 className={styles.subheader}>Methods to help you factor</h2>
        <div className={styles.video_block}>
          <ReactPlayer
            url="https://youtu.be/LgYmGkCuPTQ"
            loop={false}
            playing={false}
            controls={true}
            volume={100}
            muted={false}
            width={"100%"}
            className={styles.player}
          />
        </div>
        <p className={styles.text}>
          Learning how to factor can be hard and stressful, but it doesn't have
          to be this way. In this short article we'll go over a few methods you
          should learn to get ahead on this often difficult concept.
        </p>
      </div>
      <SignUpEmailForm />
    </div>
  );
};
