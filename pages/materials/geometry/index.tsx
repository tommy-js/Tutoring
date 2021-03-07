import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Geometry } from "../../../components/materials/Geometry/Geometry";
import { Footer } from "../../../components/Footer/Footer";

export default function GeometryPage() {
  return (
    <div>
      <Head>
        <title>Geometry | Functional Tutoring</title>
        <meta
          name="description"
          content="Explore our worksheets and documents on plane geometry"
        />
      </Head>
      <Navbar />
      <Geometry />
    </div>
  );
}
