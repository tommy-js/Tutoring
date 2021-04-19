import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Calculus } from "../../../components/subjects/Calculus/Calculus";

export default function CalculusPage() {
  return (
    <div>
      <Head>
        <title>Calculus | Functional Tutoring</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <Calculus />
    </div>
  );
}
