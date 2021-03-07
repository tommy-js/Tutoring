import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Logarithms } from "../../../../../components/materials/documents/algebra2/worksheets/Logarithms/Logarithms";
import { Footer } from "../../../../../components/Footer/Footer";

export default function LogarithmsPage() {
  return (
    <div>
      <Head>
        <title>Practice Your Logarithms | Functional Tutoring</title>
        <meta
          name="description"
          content="Practice your logarithms in preparation for precalc and calculus"
        />
      </Head>
      <Navbar />
      <Logarithms />
      <Footer />
    </div>
  );
}
