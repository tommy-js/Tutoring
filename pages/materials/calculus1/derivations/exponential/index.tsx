import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Exponential } from "../../../../../components/materials/documents/calculus1/derivations/Exponential/Exponential";

export default function ExponentialDerivativePage() {
  return (
    <div>
      <Head>
        <title>Exponential Function | Functional Tutoring</title>
        <meta
          name="description"
          content="Here we'll prove that the derivative of the exponential function is itself"
        />
      </Head>
      <Navbar />
      <Exponential />
    </div>
  );
}
