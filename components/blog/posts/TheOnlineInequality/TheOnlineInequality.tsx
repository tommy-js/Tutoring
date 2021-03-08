import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const distance_learning = require("../../../../public/blogs/distance_learning_2.jpg");
const radio_tower = require("../../../../public/blogs/radio_tower.jpg");
const work = require("../../../../public/blogs/work.jpg");

export const TheOnlineInequality: React.FC = () => {
  return (
    <div className={styles.the_online_inequality}>
      <h1 className={styles.header}>The Online Inequality</h1>
      <h2 className={styles.subheader}>
        Understanding the impact of online education on more rural communities
      </h2>
      <h3 className={styles.published_date}>
        Published 3/8/2021 -{" "}
        <Link href="https://tyler-55963.medium.com/the-online-inequality-8e66be4149e8">
          <a className={styles.link}>Read on Medium</a>
        </Link>
      </h3>
      <p className={styles.text}>
        The 2020 pandemic has severely impacted the way we engage with the
        world. Businesses that previously operated physically have shifted to
        the internet, where success has been mixed. For certain industries, it’s
        been a rare opportunity for innovation, resulting in immense growth. For
        others, the move online has been a continuous struggle. This couldn't be
        more true than in the education sector, where the bulk of classes have
        shifted online over the past year.
      </p>
      <p className={styles.text}>
        While posing unique difficulties for many students, this change has not
        completely upended most educations. The majority of people have been
        able to adapt to the changes with varying success. For a subset of
        Americans, however, the move towards online learning has had a
        catastrophic impact.
      </p>
      <p className={styles.text}>
        According to the Federal Communications Commission, over 14 million
        Americans remain without any form of internet access. For these people,
        the shift to online-only education has resulted in them not having any
        access to school at all. For the 25 million Americans without broadband
        access, it has made staying safe either impossible or incredibly
        difficult.
      </p>
      <p className={styles.text}>
        Instead, these people have had to continue attending a physical school
        through the pandemic. They have parents who need to work, who also can’t
        do their jobs online. The end result is that you have entire families
        forced into exposing themselves to the virus over periods of weeks or
        months.
      </p>
      <div className={styles.image_block}>
        <img
          src={work}
          className={styles.image}
          alt="Man working in coffee shop"
        />
      </div>
      <p className={styles.text}>
        Even worse, when there is inevitably an outbreak and the schools and
        businesses must close down for some time, these families are left
        without any options. They’re suddenly forced into isolation. Without
        work, they become more impoverished, worsening their situation.
      </p>
      <p className={styles.text}>
        Technology is a glorious thing: it has the ability to reshape the way we
        conduct our lives, business, and education. It can make living easier
        and more enjoyable. The natural inclination we all have is to continue
        pushing our technology forward, always keeping the idea of a future
        where everyone has access to affordable internet in mind. This is
        something we’re very passionate about at Functional Tutoring. We want
        this future to be real, and hope that someday soon an outbreak of a
        virus won’t mean the end of safe education and employment for millions
        of Americans.
      </p>
      <p className={styles.text}>
        Unfortunately, we’re not there yet. The technology simply hasn’t evolved
        enough to get us to that point, and so we should be careful to not get
        ahead of ourselves. If we aren’t cautious, there is always the
        possibility that we end up creating more problems than we solve. It’s
        incredibly important for us to remain aware that we could be leaving
        these Americans behind if we shift too much emphasis within our
        education system to the online sphere.
      </p>
      <div className={styles.image_block}>
        <img
          src={distance_learning}
          className={styles.image}
          alt="Child reading textbook while sitting at computer"
        />
      </div>
      <p className={styles.text}>
        A fact we should consider is that while the issue of access is one of
        wealth inequality, it’s also one of geography. People who grow up in
        poor areas tend to stay poor, while those who live in wealthier regions
        have the advantage of access to greater resources and opportunities. If
        you grew up in a depressed, post-industrial town, the likelihood is that
        you wouldn’t have had access to any of the resources necessary to obtain
        a higher education or attend a better school. The end result is that
        there are plenty of places throughout the United States that simply
        don’t have access to internet fast enough to attend online classes.
      </p>
      <p className={styles.text}>
        It’s a good thing, of course, that small towns and cities can decide how
        to frame their own public schools and education. Were this not the case,
        we would risk further increasing the divide between large, well-off
        cities and small, rural communities. Investing into these communities
        would be a good step towards getting those 14 million Americans online.
        It would give them the resources they need to provide better internet
        for their people.
      </p>
      <p className={styles.text}>
        Unsurprisingly, it isn’t a simple problem to solve. There are a host of
        issues behind lacking internet quality and availability country-wide.
        Poverty is only one of many; another issue is structural in nature.
      </p>
      <div className={styles.image_block}>
        <img
          src={radio_tower}
          className={styles.image}
          alt="Large cellphone tower"
        />
      </div>
      <p className={styles.text}>
        In order to ensure that this service makes its way to all Americans,
        it’s essential that we continue to invest into our internet service
        providers. One of the big problems, and the major reason many people
        still lack internet access, is the fact that in most places within the
        country there just aren’t many options. This is for a variety of
        reasons, one of which being that it’s simply too expensive to get an ISP
        built. There are billions of dollars in infrastructure that need to be
        constructed.
      </p>
      <p className={styles.text}>
        Because there are so few internet service providers, and progress moves
        so slowly, large portions of the mid-western United States don’t have
        the infrastructure needed to provide customers with high-speed internet.
        It will take many years and huge investments to get to this point.
      </p>
      <p className={styles.text}>
        There is a real risk that as our education system continues to move
        online, rural communities will be left behind by larger, more affluent
        cities. This is principally an issue because there is already a notable
        wealth inequality between these two worlds. If you live in a small,
        country town the chances are good that you make less than someone who
        lives in a big city. Internet service providers might see less of an
        incentive to provide customers here with the internet they need, and as
        education and commerce continues to shift online, the wealth gap will
        likely widen further.
      </p>
      <div className={styles.bottom} />
    </div>
  );
};
