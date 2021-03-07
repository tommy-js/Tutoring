import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Complex } from "../../../../../components/materials/documents/precalc/worksheets/Complex/Complex";
import { Footer } from "../../../../../components/Footer/Footer";

export default function ComplexPage() {
  return (
    <main>
      <Head>
        <title>Complex Number Practice Problems | Functional Tutoring</title>
        <meta
          name="description"
          content="Go over complex numbers and get prepped for calculus"
        />
      </Head>
      <Navbar />
      <Complex />
      <Footer />
    </main>
  );
}
