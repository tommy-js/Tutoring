import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Limits } from "../../../../../components/materials/documents/calculus1/definitions/Limits/Limits";
import { Footer } from "../../../../../components/Footer/Footer";

export default function LimitsPage() {
  return (
    <div>
      <Head>
        <title>Definition of the Derivative</title>
        <meta
          name="description"
          content="Get up to speed with the definition of the derivative"
        />
      </Head>
      <Navbar />
      <Limits />
      <Footer />
    </div>
  );
}
