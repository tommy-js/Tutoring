import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Limits } from "../../../../../components/materials/documents/calculus1/definitions/Limits/Limits";

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
    </div>
  );
}
