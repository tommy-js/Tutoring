import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { MultDivFrac } from "../../../../../components/materials/documents/arithmetic/worksheets/MultDivFrac/MultDivFrac";
import { Footer } from "../../../../../components/Footer/Footer";

export default function MultDivFracPage() {
  return (
    <main>
      <Head>
        <title>Practice Multiplying & Dividing Fractions</title>
        <meta
          name="description"
          content="Practice multiplying and dividing fractional numbers"
        />
      </Head>
      <Navbar />
      <MultDivFrac />
      <Footer />
    </main>
  );
}
