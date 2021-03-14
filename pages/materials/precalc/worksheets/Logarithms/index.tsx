import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Logarithms } from "../../../../../components/materials/documents/precalc/worksheets/Logarithms/Logarithms";

export default function LogarithmsPage() {
  return (
    <main>
      <Head>
        <title>Logarithm Practice Problems | Functional Tutoring</title>
        <meta
          name="description"
          content="Go over logarithm problems ranging from easy to hard."
        />
      </Head>
      <Navbar />
      <Logarithms />
    </main>
  );
}
