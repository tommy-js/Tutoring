import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { AddSubFracts } from "../../../../../components/materials/documents/arithmetic/worksheets/AddSubFracts/AddSubFracts";
import { Footer } from "../../../../../components/Footer/Footer";

export default function AddSubFractsPage() {
  return (
    <main>
      <Head>
        <title>Practice Adding and Subtracting Fractions</title>
        <meta
          name="description"
          content="Practice adding and subtracting fractional numbers"
        />
      </Head>
      <Navbar />
      <AddSubFracts />
      <Footer />
    </main>
  );
}
