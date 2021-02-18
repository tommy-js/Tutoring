import React from "react";
import { InlineDefinition } from "../../../../InlineDefinition/InlineDefinition";
import styles from "./styles.module.scss";

export const TrigIdentities: React.FC = () => {
  return (
    <div className={styles.trig_identities}>
      <h1 className={styles.header}>Trigonometric Identities</h1>
      <h2 className={styles.subheader}>
        Here we've listed a number of important trigonometric identities and
        formulas for you to reference. In actuality, only a few of these will
        prove important to remember.
      </h2>
      <div className={styles.most_important}>
        <h3 className={styles.div_header}>Important to memorize</h3>
        <div className={styles.unit_container}>
          <InlineDefinition text="\tan(x)=\frac{\sin(x)}{\cos(x)}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\csc(x)=\frac{1}{\sin(x)}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\sec(x)=\frac{1}{\cos(x)}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\cot(x) = \frac{1}{\tan(x)}=\frac{\cos(x)}{\sin(x)}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\sin(x)^2+\cos(x)^2=1" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\sin(-x)=-\sin(x)" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\cos(-x)=\cos(x)" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\tan(-x)=-\tan(x)" />
        </div>
      </div>
      <div className={styles.less_important}>
        <h3 className={styles.div_header}>Important to be aware of</h3>
        <div className={styles.unit_container}>
          <InlineDefinition text="\tan(x)^2+1=\sec(x)^2" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="1+\cot(x)^2=\csc(x)^2" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\sin(a+b)=\sin(a)\cos(b)+\cos(a)\sin(b)" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\sin(a-b)=\sin(a)\cos(b)-\cos(a)\sin(b)" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\cos(a+b)=\cos(a)\cos(b)-\sin(a)\sin(b)" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\cos(a-b)=\cos(a)\cos(b)+\sin(a)\sin(b)" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\tan(a+b)=\frac{\tan(a)+\tan(b)}{1-\tan(a)\tan(b)}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\tan(a-b)=\frac{\tan(a)-\tan(b)}{1+\tan(a)\tan(b)}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\sin(2x)=2\sin(x)\cos(x)" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\cos(2x)=\cos(x)^2-\sin(x)^2=1-2\sin(x)^2=2\cos(x)^2-1" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\tan(2x)=\frac{2\tan(x)}{1-\tan(x)^2}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\sin(\frac{x}{2})=\pm\sqrt{\frac{1-\cos(x)}{2}}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\cos(\frac{x}{2})=\pm\sqrt{\frac{1+\cos(x)}{2}}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\tan(\frac{x}{2})=\pm\sqrt{\frac{1-\cos(x)}{1+\cos(x)}}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\sin(x)^2=\frac{1}{2}-\frac{\cos(2x)}{2}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\cos(x)^2=\frac{1}{2}+\frac{\cos(2x)}{2}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\tan(x)^2=\frac{1-\cos(2x)}{1+\cos(2x)}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\sin(a)+\sin(b)=2\sin(\frac{a+b}{2})\cos(\frac{a-b}{2})" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\sin(a)-\sin(b)=2\cos(\frac{a+b}{2})\sin(\frac{a-b}{2})" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\cos(a)+\cos(b)=2\cos(\frac{a+b}{2})\cos(\frac{a-b}{2})" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\cos(a)-\cos(b)=-2\sin(\frac{a+b}{2})\sin(\frac{a-b}{2})" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\sin(a)\cos(b)=\frac{\sin(a+b)}{2}+\frac{\sin(a-b)}{2}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\cos(a)\sin(b)=\frac{\sin(a+b)}{2}-\frac{\sin(a-b)}{2}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\cos(a)\cos(b)=\frac{\cos(a-b)}{2}+\frac{\cos(a+b)}{2}" />
        </div>
        <div className={styles.unit_container}>
          <InlineDefinition text="\sin(a)\sin(b)=\frac{\cos(a-b)}{2}-\frac{\cos(a+b)}{2}" />
        </div>
      </div>
      <div className={styles.bottom_container} />
    </div>
  );
};
