import React from "react";
import Link from "next/link";
import { Footer } from "../../../Footer/Footer";
import styles from "./styles.module.scss";

const parent = require("../../../../public/blogs/parent.jpg");
const teacher = require("../../../../public/blogs/teacher.jpg");
const childcare = require("../../../../public/blogs/childcare.jpg");

export const FamiliesInLockdown: React.FC = () => {
  return (
    <div className={styles.families_in_lockdown_container}>
      <div className={styles.families_in_lockdown}>
        <h1 className={styles.header}>Families in Lockdown</h1>
        <h2 className={styles.subheader}>
          How lockdown is impacting families and revealing gender inequality
        </h2>
        <h3 className={styles.published_date}>
          Published 3/17/2021 -{" "}
          <Link href="https://tyler-55963.medium.com/families-in-lockdown-2ab453cc797">
            <a className={styles.link}>Read on Medium</a>
          </Link>
        </h3>
        <p className={styles.text}>
          The pandemic has thrown many things out of whack. Industries, social
          norms, our collective mental health, and more have been profoundly
          affected. One of the most interesting impacts of the past year has
          been on our relationships. Namely, exposing ourselves to the fact that
          we continue to live in a society which expects women to be the sole
          caretakers of their children, and where men don’t have nearly as much
          impact as they should.
        </p>
        <p className={styles.text}>
          Over the course of our several month long lockdown, it was found that
          while women and men divided tasks relatively equally when concerning
          their children, women put significantly more energy and time towards
          them.
        </p>
        <p className={styles.text}>
          Ultimately, this has put a lot of strain on relationships throughout
          the country. In fact, over half of all parents stated that
          homeschooling their children was causing issues in their families.
          This makes sense when you think about the fact that caretaking of
          children is still generally regarded as something to be done more by
          women than men, while the working world has become relatively equal in
          terms of work expectations.
        </p>
        <div className={styles.image_block}>
          <img
            src={childcare}
            className={styles.image}
            alt="Woman in blue boots standing with child in yellow sweater on log"
          />
        </div>
        <p className={styles.text}>
          Unfortunately, all of this is having a serious negative effect on
          everyone’s mental health. Parents around the world are reporting
          generally worse wellbeing, with about half of all parents stating that
          they were feeling strained.
        </p>
        <p className={styles.text}>
          Part of this is probably due to the fact that parents simply lack the
          time to dedicate both to working full time and taking care of their
          children. They need help taking care of their children, but don’t know
          where to get it. With the pandemic, not only do they lack schools and
          daycare centers, but also babysitting services.
        </p>
        <p className={styles.text}>
          Luckily, the situation has gotten better. In the most recent lockdown
          in the early spring, a much larger fraction of the population said
          that their children were spending significant time learning through
          materials provided by their school. Educators have stepped up to help,
          but there’s really only so much they can do here.
        </p>
        <p className={styles.text}>
          In some ways, negatives can actually be positives down the line. While
          it is unfortunate that this is the reality we’re living in, it paints
          a picture of problems we have yet to fix. Just as expectations of work
          have become more equal in recent years, so too should our social
          responsibilities for childcare. It’s the job of both men and women to
          take care of and educate their kids.
        </p>
        <div className={styles.image_block}>
          <img
            src={teacher}
            className={styles.image}
            alt="Teacher standing at front of classroom with student in front of blackboard"
          />
        </div>
        <p className={styles.text}>
          The fact that childcare is inherently unequal shouldn’t really come as
          a surprise to us, though. This was plain to see if we just took the
          time to look, even pre-pandemic. For example, about 9 out of every 10
          workers in the childcare industry are women, a statistic that has
          several negative implications. This fact means that not only is there
          social stigma against men joining this industry, but because the
          average wage for someone in a childcare profession is only around
          $16,000, it has the effect of reducing the average wage of women in
          the United States.
        </p>
        <p className={styles.text}>
          Clearly there is some level of social pressure for women to act as the
          primary caregivers and, more importantly, for men to specifically not
          act as the main provider of care. In short, it was obvious to anyone
          paying close attention that this would become a problem once lockdowns
          really kicked into full gear.
        </p>
        <p className={styles.text}>
          Even in the public education sector, one which we typically see as
          more equal in terms of gender distribution, there is a large gap.
          Despite there being far less of a stigma to become a male public
          school teacher, more than three-quarters of all teachers are female.
        </p>
        <p className={styles.text}>
          The question then becomes what we should do about it. One solution
          might be putting more emphasis on trying to hire men for roles
          traditionally done by women. Hiring more men at daycare centers and in
          preschools might have the intended effect of reducing perceived stigma
          against men in these fields. Some schools and businesses are already
          doing this. Still, because there is so much social pressure against
          men doing these jobs, it’s a slow and difficult process.
        </p>
        <p className={styles.text}>
          Another solution, which is probably going to end up being the case for
          solving most of the problem, would be to simply be a part of positive
          social growth. All of us have the responsibility to encourage gender
          equality on a personal scale. Pay attention to how you respond to men
          in your own life who want to get into a childcare field.
        </p>
        <p className={styles.text}>
          We focus on the professional world because it offers a relatively
          straightforward and simple solution to what really is a complicated
          issue. Increasing male participation in the care and education of
          their children is a difficult task. After all, if it were a simple
          problem it would have been solved already.
        </p>
        <div className={styles.image_block}>
          <img
            src={parent}
            className={styles.image}
            alt="Father running along boardwalk with his daughter"
          />
        </div>
        <p className={styles.text}>
          Rather than having some sort of clear-cut solution, even if it is
          difficult, establishing equality within families requires complex
          social change on a massive scale. One way we can all start, and help
          to shift things a bit, would be if we just made sure to gear our
          treatment of others in a way that encourages positive behavior.
        </p>
        <p className={styles.text}>
          If I were to notice my brother treating women in a way that I feel is
          degrading, I would view it as my responsibility to let him know that
          this kind of thing wasn’t okay. In the same way, seeing positive
          behavior would be a chance for me to reach out and encourage it
          further. If we want a better world, it’s on all of us to do our part.
        </p>
        <div className={styles.bottom} />
      </div>
      <Footer />
    </div>
  );
};
