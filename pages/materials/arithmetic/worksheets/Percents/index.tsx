import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Percentages } from "../../../../../components/materials/documents/arithmetic/worksheets/Percentages/Percentages";
import { Footer } from "../../../../../components/Footer/Footer";

export default function PercentsPage() {
  return (
    <main>
      <Head>
        <title>Percent Problems</title>
        <meta name="description" content="Practice doing percent problems." />
      </Head>
      <Navbar />
      <Percentages />
      <Footer />
    </main>
  );
}
