import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Quadratic } from "../../../../../components/materials/documents/algebra1/derivations/Quadratic/Quadratic";
import { Footer } from "../../../../../components/Footer/Footer";

export default function QuadraticPage() {
  return (
    <div>
      <Head>
        <title>Derivation of the Quadratic Formula | Functional Tutoring</title>
        <meta
          name="description"
          content="Learn how to derive the Quadratic Formula from basic assumptions"
        />
      </Head>
      <Navbar />
      <Quadratic />
      <Footer />
    </div>
  );
}
