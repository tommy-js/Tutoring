import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { SatPrep } from "../../../components/materials/SatPrep/SatPrep";
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
      <SatPrep />
    </div>
  );
}
