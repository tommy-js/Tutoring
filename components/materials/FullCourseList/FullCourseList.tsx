import React from "react";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

const arithmetic_thumbnail = require("../../../public/blogs/Arithmetic_Thumbnail.png");
const algebraI_thumbnail = require("../../../public/blogs/algebraI.png");
const algebraII_thumbnail = require("../../../public/blogs/algebraII.png");
const geometry_thumbnail = require("../../../public/blogs/geometry.png");
const precalc_thumbnail = require("../../../public/blogs/Precalculus_Thumbnail.png");
const sat_thumbnail = require("../../../public/blogs/sat_prep_thumbnail_2.png");
const calculus_thumbnail = require("../../../public/blogs/Calculus_Thumbnail.png");

export const FullCourseList: React.FC = () => {
  const testData = [
    {
      id: 0,
      title: "Arithmetic",
      path: "arithmetic",
      image: arithmetic_thumbnail,
    },
    {
      id: 1,
      title: "Geometry",
      path: "geometry",
      image: geometry_thumbnail,
    },
    {
      id: 2,
      title: "Algebra 1",
      path: "algebra1",
      image: algebraI_thumbnail,
    },
    {
      id: 3,
      title: "Algebra 2",
      path: "algebra2",
      image: algebraII_thumbnail,
    },
    {
      id: 4,
      title: "Pre-Calc",
      path: "precalc",
      image: precalc_thumbnail,
    },
    {
      id: 5,
      title: "Calculus 1",
      path: "calculus1",
      image: calculus_thumbnail,
    },
    {
      id: 6,
      title: "SAT Prep",
      path: "sat",
      image: sat_thumbnail,
    },
  ];

  return (
    <div className={styles.full_course_list}>
      <h1 className={styles.header}>All Courses</h1>
      {testData.map((el: any) => (
        <MaterialsLink
          id={el.id}
          title={el.title}
          path={el.path}
          image={el.image}
        />
      ))}
    </div>
  );
};
