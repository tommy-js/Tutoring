import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Logarithms } from "../../../../../components/materials/documents/precalc/worksheets/Logarithms/Logarithms";
import { Footer } from "../../../../../components/Footer/Footer";

export default function LogarithmsPage() {
  return (
    <main>
      <Head>
        <title>Logarithm Practice Problems</title>
        <meta name="description" content="Go over logarithm problems" />
      </Head>
      <Navbar />
      <Logarithms />
      <Footer />
    </main>
  );
}
