import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Geometry } from "../../../components/subjects/Geometry/Geometry";

export default function GeometryPage() {
  return (
    <div>
      <Head>
        <title>Geometry | Functional Tutoring</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <Geometry />
    </div>
  );
}
