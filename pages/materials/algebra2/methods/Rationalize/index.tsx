import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Rationalize } from "../../../../../components/materials/documents/algebra2/methods/Rationalize/Rationalize";

export default function RationalizePage() {
  return (
    <div>
      <Head>
        <title>Rationalizing the Denominator</title>
        <meta
          name="description"
          content="Get up to speed with the concept and methods of rationalizing the denominator"
        />
      </Head>
      <Navbar />
      <Rationalize />
    </div>
  );
}
