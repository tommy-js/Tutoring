import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Inequalities } from "../../../../../components/materials/documents/algebra2/worksheets/Inequalities/Inequalities";

export default function InequalitiesPage() {
  return (
    <div>
      <Head>
        <title>Practice with Inequalities | Functional Tutoring</title>
        <meta
          name="description"
          content="Do some practice problems on this page and expand your skills with inequalities"
        />
      </Head>
      <Navbar />
      <Inequalities />
    </div>
  );
}
