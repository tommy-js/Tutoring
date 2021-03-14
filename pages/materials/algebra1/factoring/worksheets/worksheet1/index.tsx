import Head from "next/head";
import { Navbar } from "../../../../../../components/navigation/Navbar/Navbar";
import { Factoring } from "../../../../../../components/materials/documents/algebra1/worksheets/Factoring/Factoring";

export default function FactoringWorksheet1Page() {
  return (
    <div>
      <Head>
        <title>Factoring & Distribution Worksheet | Functional Tutoring</title>
        <meta
          name="description"
          content="Practice factoring and distributing with this worksheet"
        />
      </Head>
      <Navbar />
      <Factoring />
    </div>
  );
}
