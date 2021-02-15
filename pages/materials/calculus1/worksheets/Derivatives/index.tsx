import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Derivatives } from "../../../../../components/materials/documents/calculus1/worksheets/Derivatives/Derivatives";
import { Footer } from "../../../../../components/Footer/Footer";

export default function DerivativesPage() {
  return (
    <div>
      <Head>
        <title>Derivatives Worksheet</title>
        <meta
          name="description"
          content="Practice taking derivatives at an assortment of difficulties"
        />
      </Head>
      <Navbar />
      <Derivatives />
      <Footer />
    </div>
  );
}
