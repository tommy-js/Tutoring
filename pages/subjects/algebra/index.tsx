import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Algebra } from "../../../components/subjects/Algebra/Algebra";

export default function AlgebraPage() {
  return (
    <div>
      <Head>
        <title>Algebra | Functional Tutoring</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <Algebra />
    </div>
  );
}
