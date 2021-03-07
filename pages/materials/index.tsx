import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Materials } from "../../components/materials/Materials/Materials";
import { Footer } from "../../components/Footer/Footer";

export default function MaterialsPage() {
  return (
    <div>
      <Head>
        <title>Documents & Worksheets | Functional Tutoring</title>
        <meta
          name="description"
          content="Explore our library of documents on worksheets on a variety of topics"
        />
      </Head>
      <Navbar />
      <Materials />
    </div>
  );
}
