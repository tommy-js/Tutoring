import React from "react";
import styles from "./styles.module.scss";

export const Hobbies: React.FC = () => {
  return (
    <div className={styles.hobbies}>
      <h2 className={styles.header}>About Me</h2>
      <p className={styles.text}>
        2020 was a challenging year for everyone. For many of us, it meant
        taking a break from our hobbies and interests. Luckily for me, I live
        close enough to the famous Shawangunks that I could continue taking part
        in one of my major passions; rock climbing. Being out along the cliff
        evokes such a sense of peace and wonder, and I am immensely grateful for
        the hard work of park rangers in upkeeping the rock climbing here.
      </p>
      <div>[VIDEO GOES HERE]</div>
      <p className={styles.text}>
        Apart from climbing, I remain a perpetual student. Currently I'm in the
        process of learning Russian for personal interest. I've always found the
        language to be quite beautiful, and one day I aim to be fluent.
      </p>
      <div>[VIDEO GOES HERE]</div>
      <p className={styles.text}>
        Of course, even though I've completed my formal education in mathematics
        up to a Bachelor's level, I still remain intensely interested in
        mathematics. One day I hope to acquire a Master's Degree or PHD in the
        subject, although I'm not currently thinking too deeply about this.
      </p>
    </div>
  );
};
