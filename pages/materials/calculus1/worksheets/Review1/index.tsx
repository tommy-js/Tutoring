import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Review1 } from "../../../../../components/materials/documents/calculus1/worksheets/Review1/Review1";

export default function Review1Page() {
  return (
    <div>
      <Head>
        <title>Precalculus Review Worksheet | Functional Tutoring</title>
        <meta
          name="description"
          content="Review several concepts from precalculus, including limits and logarithms."
        />
      </Head>
      <Navbar />
      <Review1 />
    </div>
  );
}
