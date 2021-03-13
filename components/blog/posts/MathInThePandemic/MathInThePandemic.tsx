import React from "react";
import Link from "next/link";
import { Footer } from "../../../Footer/Footer";
import styles from "./styles.module.scss";

const distance_learning = require("../../../../public/blogs/distance_learning.jpg");
const empty_testing = require("../../../../public/blogs/empty_testing.jpg");
const students_in_classroom = require("../../../../public/blogs/students_in_classroom.jpg");

export const MathInThePandemic: React.FC = () => {
  return (
    <div className={styles.math_in_the_pandemic_container}>
      <div className={styles.math_in_the_pandemic}>
        <h1 className={styles.header}>Mathematics In The Pandemic</h1>
        <h2 className={styles.subheader}>
          How the pandemic is affecting our students at every level.
        </h2>
        <h3 className={styles.published_date}>
          Published 2/22/2021 -{" "}
          <Link href="https://tyler-55963.medium.com/mathematics-in-the-pandemic-e8b99fab358e">
            <a className={styles.link}>Read on Medium</a>
          </Link>
        </h3>
        <p className={styles.text}>
          It should come as no surprise that the pandemic has led to a general
          disruption of student learning. Even as many classes are shifting to
          online, distance education has resulted in lower engagement, less
          interaction, and overall worse test scores compared to just one year
          before. In fact, according to the Portland-based non-profit NWEA, in
          the fall of 2020 elementary and middle school students were scoring
          5-10% lower on mathematics tests than in 2019. In the same study it
          was shown that students did not see the same decrease in other
          subjects, such as reading.
        </p>
        <p className={styles.text}>
          The reason for this discrepancy between subjects remains unclear, and
          there are a host of possible explanations. It could be that due to
          children reading and writing in normal life, they don’t see nearly as
          severe a decline in this area as in mathematics. It could also be that
          reading and writing are relatively easy subjects to teach when
          compared to math.
        </p>
        <p className={styles.text}>
          While it may be too early to definitively say that the pandemic has
          led to a loss of mathematical skill in school students, this shouldn’t
          really come as much of a surprise to anyone. After all, students rely
          on being able to ask their teachers for help, being able to work on
          problem sets with their fellow classmates, and being able to receive
          personalized, one-on-one help.
        </p>
        <div className={styles.image_block}>
          <img
            src={students_in_classroom}
            className={styles.image}
            alt="Children studying at table together"
          />
        </div>
        <p className={styles.text}>
          Of course, part of the reason the pandemic has been so devastating for
          the education of our children is due to the fact that it is not a
          simple problem. This is a complex situation with very few clear
          solutions. An example of the difficulty that comes with showing
          exactly how much has been lost by students is perhaps best given by
          the fact that these statistics were only generated from the data of
          those students who took their mathematics tests. Some students,
          particularly from minority groups, are disproportionately
          underrepresented in the study. At the very least, the statistics are
          skewed higher than accurate.
        </p>
        <p className={styles.text}>
          Aside from the fact that students are simply getting less and lower
          quality instruction due to online learning, there is also the
          difficulty of heightened rates of depression and anxiety brought on by
          the pandemic. A large number of students are attending class less,
          doing less of their homework, and paying less attention to the classes
          they do attend. This is a problem we can likely expect to gradually
          dissipate as we all return to the classroom.
        </p>
        <p className={styles.text}>
          So what’s to be done about this problem? Well, one solution is to
          provide one-on-one instruction for students who need it. This is a
          difficult thing for teachers who are already trying to deal with
          teaching in a foreign setting. However, for us at Functional Tutoring
          this comes naturally. We are hoping we can help to provide the missing
          link that students need to get back up to speed. This isn’t to say we
          believe we can solve the problem in its entirety, but we do think that
          our services can help remedy it a little bit.
        </p>
        <p className={styles.text}>
          In fact, we plan on writing a piece on the rapid growth of online
          tutoring soon. Just over the past five years the industry has grown an
          average of around 10% yearly, and will likely grow even faster over
          the next few years to fill this growing demand.
        </p>
        <div className={styles.image_block}>
          <img
            src={distance_learning}
            className={styles.image}
            alt="IPad with scissors, erasers, and coloring books"
          />
        </div>
        <p className={styles.text}>
          Unfortunately, with so many students still learning from home,
          instructors are now relying on parents to provide the stability that
          schools and classrooms typically offer. In some ways this can help to
          explain the general lack of attentiveness of students who are
          currently distance learning.
        </p>
        <p className={styles.text}>
          This isn’t to blame the parents, of course: everyone is doing the best
          they can, given the circumstances. And even in this subpar situation
          many parents really are doing an admirable job. Still, it goes to show
          that without the classroom setting we can’t uniformly rely on parents
          to do the teacher’s job. Parents are continuing to work their normal
          day jobs as well. They now have to both work full time while also
          being responsible for making sure their children are taking their
          education seriously.
        </p>
        <p className={styles.text}>
          There are other challenges that come with trying to determine the
          effect this pandemic has had on mathematics education. For one,
          because schools are so used to doing testing in-person, the
          technological difficulties of distance-testing has led some schools to
          simply stop testing altogether. While this might seem like a good idea
          for now, as it decreases the strain teachers, students, and
          administrators are under, long-term it may prove a serious problem. We
          may all be in for a major shock in a few months when in-person testing
          begins again, as there’s no telling what the scores might tell us at
          that point.
        </p>
        <div className={styles.image_block}>
          <img
            src={empty_testing}
            className={styles.image}
            alt="Vacant testing room with chalkboard at front"
          />
        </div>
        <p className={styles.text}>
          The bigger issue actually has more to do with who is scoring
          substantially lower rather than why. As we mentioned before, minority
          groups seem increasingly underrepresented in the test scores that we
          do have. It’s difficult to say exactly why this is, but in the end the
          result is the same: black and Latino students are not doing as well as
          their white counterparts during this pandemic, which means that our
          limited test data is really only sufficient to give a general idea of
          how white students are doing at the moment.
        </p>
        <p className={styles.text}>
          Additionally, there are discrepancies between results from white
          students. For instance, a disproportionate number of private schools
          were able to conduct testing when compared to public schools. This
          would make sense, given that private schools tend to be smaller and
          have more resources available to devote to each student. They can both
          make sure their students are healthy and safe while also offering them
          one-on-one help, and are more readily able to test given their
          resources. This all makes the situation with scores even more tenuous
          and unreliable.
        </p>
        <p className={styles.text}>
          What is clear out of all of this is the fact that we just don’t know
          how students will have dealt with this pandemic until at least several
          months from now. Once everyone is back in school, vaccinated, and
          taking tests again, it may be clear how harmful this period was for
          everyone academically. Until then, it’s safe to say that the education
          of our students will have suffered, if only to an indeterminate
          degree.
        </p>
        <div className={styles.bottom} />
      </div>
      <Footer />
    </div>
  );
};
