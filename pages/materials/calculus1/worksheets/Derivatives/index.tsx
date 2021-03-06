import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Derivatives } from "../../../../../components/materials/documents/calculus1/worksheets/Derivatives/Derivatives";

export default function DerivativesPage() {
  return (
    <div>
      <Head>
        <title>Derivatives Practice Problems | Functional Tutoring</title>
        <meta
          name="description"
          content="Practice taking derivatives at an assortment of difficulties"
        />
      </Head>
      <Navbar />
      <Derivatives />
    </div>
  );
}
