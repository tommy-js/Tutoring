import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Exponents } from "../../../../../components/materials/documents/algebra2/worksheets/Exponents/Exponents";
import { Footer } from "../../../../../components/Footer/Footer";

export default function ExponentsPage() {
  return (
    <div>
      <Head>
        <title>Practice with Exponents</title>
        <meta
          name="description"
          content="Do some practice problems on this page and expand your exponent skills"
        />
      </Head>
      <Navbar />
      <Exponents />
      <Footer />
    </div>
  );
}
