import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { AddSubFracts } from "../../../../../components/materials/documents/arithmetic/worksheets/AddSubFracts/AddSubFracts";

export default function AddSubFractsPage() {
  return (
    <main>
      <Head>
        <title>
          Practice Adding & Subtracting Fractions | Functional Tutoring
        </title>
        <meta
          name="description"
          content="Practice adding and subtracting fractional numbers"
        />
      </Head>
      <Navbar />
      <AddSubFracts />
    </main>
  );
}
