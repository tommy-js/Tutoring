import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Limits } from "../../../../../components/materials/documents/calculus1/worksheets/Limits/Limits";

export default function LimitsPage() {
  return (
    <div>
      <Head>
        <title>Limits Worksheet | Functional Tutoring</title>
        <meta
          name="description"
          content="Practice taking limits at an assortment of difficulties"
        />
      </Head>
      <Navbar />
      <Limits />
    </div>
  );
}
