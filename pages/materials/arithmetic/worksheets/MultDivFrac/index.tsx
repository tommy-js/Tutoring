import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { MultDivFrac } from "../../../../../components/materials/documents/arithmetic/worksheets/MultDivFrac/MultDivFrac";

export default function MultDivFracPage() {
  return (
    <main>
      <Head>
        <title>
          Practice Multiplying & Dividing Fractions | Functional Tutoring
        </title>
        <meta
          name="description"
          content="Practice multiplying and dividing fractional numbers"
        />
      </Head>
      <Navbar />
      <MultDivFrac />
    </main>
  );
}
