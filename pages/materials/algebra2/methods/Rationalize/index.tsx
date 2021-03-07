import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Rationalize } from "../../../../../components/materials/documents/algebra2/methods/Rationalize/Rationalize";
import { Footer } from "../../../../../components/Footer/Footer";

export default function RationalizePage() {
  return (
    <div>
      <Head>
        <title>Rationalizing the Denominator | Functional Tutoring</title>
        <meta
          name="description"
          content="Get up to speed with the concept and methods of rationalizing the denominator"
        />
      </Head>
      <Navbar />
      <Rationalize />
      <Footer />
    </div>
  );
}
