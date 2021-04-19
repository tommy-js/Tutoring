import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Precalculus } from "../../../components/subjects/Precalculus/Precalculus";

export default function PrecalculusPage() {
  return (
    <div>
      <Head>
        <title>Precalculus | Functional Tutoring</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <Precalculus />
    </div>
  );
}
