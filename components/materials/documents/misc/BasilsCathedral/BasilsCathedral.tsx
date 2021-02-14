import React from "react";
import styles from "./styles.module.scss";

const cathedral = require("../../../../../public/basils_cathedral.jpg");
const cathedral2 = require("../../../../../public/cathedral_2.jpg");

export const BasilsCathedral: React.FC = () => {
  return (
    <div className={styles.basils_cathedral}>
      <div className={styles.image_block}>
        <img
          className={styles.image}
          src={cathedral}
          alt="Beautiful multi-colored cathedral under blue sky"
        />
      </div>
      <h1 className={styles.header}>St. Basil's Cathedral</h1>
      <h2 className={styles.subheader}>The Cathedral of Vasily the Blessed</h2>
      <p className={styles.text}>
        St. Basil's Cathedral is an important cultural symbol of Russia that
        sits in Red Square, Moscow. It was constructed from 1555 to 1561 to
        commemorate the capturing of Astrakhan and Kazan, two major Russian
        cities. The cathedral was built on orders from Ivan the Terrible, the
        first Tsar of Russia.
      </p>
      <p className={styles.text}>
        Since 1990, the church has been a component of the Moscow Kremlin and
        Red Square World Heritage Site. It currently operates as a museum of
        Russian history and offers occasional services to the vast population of
        Russian Orthodox Christians.
      </p>
      <div className={styles.image_block}>
        <img
          className={styles.image}
          src={cathedral2}
          alt="Large, multicolored cathedral under clear sky with crowd of people before it"
        />
      </div>
      <p className={styles.text}>
        Despite being distinctly Russian, the building is unique in its
        architecture. It is designed after a bonfire rising into the sky. That
        being said, domes themselves are quite common in Russian architecture,
        so perhaps it's a bit unfair to suggest that its look is entirely
        unique.
      </p>
      <p className={styles.text}>
        The domes are for more than simply appearance. Each marks a different
        church within the Cathedral, adding purpose to their beauty. The
        distinctive colors, too, bear religious motivation. This coloring
        follows a specific depiction of the Heavenly City in the Book of
        Revelation.
      </p>
      <div className={styles.bottom} />
    </div>
  );
};
