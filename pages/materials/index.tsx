import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Materials } from "../../components/materials/Materials/Materials";

export default function MaterialsPage() {
  return (
    <div>
      <Head>
        <title>Documents & Worksheets</title>
        <meta
          name="description"
          content="Explore our list of documents on worksheets on a variety of topics"
        />
      </Head>
      <Navbar />
      <Materials />
    </div>
  );
}
