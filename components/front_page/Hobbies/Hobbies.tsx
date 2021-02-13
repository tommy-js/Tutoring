import React from "react";
import Link from "next/link";
import { ClimbingVideo } from "../ClimbingVideo/ClimbingVideo";
import styles from "./styles.module.scss";
const basilsCathedral = require("../../../public/basils_cathedral.jpg");

export const Hobbies: React.FC = () => {
  return (
    <div className={styles.hobbies}>
      <h2 className={styles.header}>About Me</h2>
      <p className={styles.text}>
        2020 was a challenging year for everyone. For many of us, it meant
        taking a break from our hobbies and interests. Luckily for me, I live
        close enough to the famous Shawangunks that I could continue taking part
        in one of my major passions: rock climbing. Being out along the cliff
        evokes such a sense of peace and wonder, and I am immensely grateful for
        the hard work of park rangers in upkeeping the rock climbing there.
      </p>
      <ClimbingVideo />
      <p className={styles.text}>
        Of course, sometimes the elements just don't cooperate. When that
        happens, you go inside!
      </p>
      <p className={styles.text}>
        Apart from climbing, I remain a perpetual student. Currently I'm in the
        process of learning Russian for personal interest. I've always found the
        language to be quite beautiful, and one day I aim to be fluent. It would
        be amazing to spend a few months studying mathematics in Russia,
        although the pandemic will have to end before I consider making that a
        reality!
      </p>
      <Link href="/materials/misc/BasilsCathedral">
        <div className={styles.image_block}>
          <img
            src={basilsCathedral}
            alt="Beautiful multi-colored cathedral under blue sky"
            className={styles.image}
          />
        </div>
      </Link>
      <p className={styles.text}>
        A dream of mine is to visit Saint Basil's Cathedral in Moscow. It
        started its construction in 1555 and now serves as an historic landmark
        and national symbol of Russia. Just look how beautiful that is!
      </p>
      <p className={styles.text}>
        Another major focus of mine remains mathematics. Even though I've
        completed my formal education in the subject up to a Bachelor's level,
        I'm still intensely interested in it, and I'm always seeking to know
        more. One day I hope to acquire a Master's Degree or PHD, although I'm
        not currently thinking too deeply about this. I first want to spend a
        while only focused on my students, and on learning new material for my
        own interest.
      </p>
    </div>
  );
};
