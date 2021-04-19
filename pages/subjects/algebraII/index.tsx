import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { AlgebraII } from "../../../components/subjects/AlgebraII/AlgebraII";

export default function AlgebraIIPage() {
  return (
    <div>
      <Head>
        <title>Algebra II | Functional Tutoring</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <AlgebraII />
    </div>
  );
}
