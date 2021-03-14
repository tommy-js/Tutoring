import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Prep1 } from "../../../../../components/materials/documents/sat/worksheets/Prep1/Prep1";

export default function Prep1Page() {
  return (
    <div>
      <Head>
        <title>SAT Prep Worksheet 1 | Functional Tutoring</title>
        <meta
          name="description"
          content="Practice for the upcoming SAT exams and get ahead of the curve."
        />
      </Head>
      <Navbar />
      <Prep1 />
    </div>
  );
}
