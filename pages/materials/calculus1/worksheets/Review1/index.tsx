import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Review1 } from "../../../../../components/materials/documents/calculus1/worksheets/Review1/Review1";
import { Footer } from "../../../../../components/Footer/Footer";

export default function Review1Page() {
  return (
    <div>
      <Head>
        <title>Review Worksheet</title>
        <meta
          name="description"
          content="Review several concepts from precalculus, including limits and logarithms."
        />
      </Head>
      <Navbar />
      <Review1 />
      <Footer />
    </div>
  );
}
