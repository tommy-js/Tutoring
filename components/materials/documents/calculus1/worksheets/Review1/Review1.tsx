import React, { useState, useEffect } from "react";
import Link from "next/link";
import { WordQuestion } from "../../../../Questions/WordQuestion/WordQuestion";
import { BlockMath, InlineMath } from "react-katex";
import styles from "./styles.module.scss";
import "katex/dist/katex.min.css";

export const Review1: React.FC = () => {
  const problem1cost = "C=x^2+5x+45";
  const problem1demand = "p=250-x";

  return (
    <div className={styles.review}>
      <h1 className={styles.header}>Review of Precalculus Concepts</h1>
      <h2 className={styles.subheader}>
        Here we'll go over several concepts from precalculus.
      </h2>
      <Link href="/formatting">
        <a className={styles.formatting_link}>Need help formatting?</a>
      </Link>
      <p className={styles.text}>
        1. Suppose that in a monopoly market the total cost per week of
        producing a high-tech product is given by{" "}
        <InlineMath>{problem1cost}</InlineMath>. Suppose further that the weekly
        demand function for this product is{" "}
        <InlineMath>{problem1demand}</InlineMath>.
      </p>
      <p className={styles.text}>
        <ol>
          <li>Determine the profit function.</li>
          <li>Find the break-even point(s).</li>
          <li>
            Find the value of x that maximized the revenue. Find the maximum
            revenue.
          </li>
        </ol>
      </p>
      <p className={styles.text}>
        2. Sketch the graph of the piecewise defined function
      </p>
      <p className={styles.text}>
        <ol>
          <li>Evaluate f(6)</li>
          <li>Evaluate f(-5)</li>
        </ol>
      </p>
      <p className={styles.text}>
        Find the equilibrium point for the demand and supply functions for the
        Ultra-Fine coffee maker. Here q represents the number of coffee makers
        produced, in hundreds, and p is the price of a coffee maker id dollars.
      </p>
      <p className={styles.text}></p>
      <p className={styles.text}></p>
      <p className={styles.text}></p>
      <p className={styles.text}></p>
      <div className={styles.bottom}></div>
    </div>
  );
};
