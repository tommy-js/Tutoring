import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Derivatives } from "../../../../../components/materials/documents/calculus1/methods/Derivatives/Derivatives";

export default function DerivativesPage() {
  return (
    <div>
      <Head>
        <title>Derivation Methods | Functional Tutoring</title>
        <meta
          name="description"
          content="Learn how to take derivatives with this guide to the Power Rule, Product Rule, and more"
        />
      </Head>
      <Navbar />
      <Derivatives />
    </div>
  );
}
