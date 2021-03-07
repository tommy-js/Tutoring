import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Similar } from "../../../../../components/materials/documents/geometry/worksheets/Similar/Similar";
import { Footer } from "../../../../../components/Footer/Footer";

export default function SimilarPage() {
  return (
    <div>
      <Head>
        <title>Similar & Congruent Shapes | Functional Tutoring</title>
        <meta
          name="description"
          content="Explore the differences between similar and congruent shapes"
        />
      </Head>
      <Navbar />
      <Similar />
      <Footer />
    </div>
  );
}
