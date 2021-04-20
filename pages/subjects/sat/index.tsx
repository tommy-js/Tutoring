import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Sat } from "../../../components/subjects/Sat/Sat";

export default function SatPage() {
  return (
    <div>
      <Head>
        <title>SAT | Functional Tutoring</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <Sat />
    </div>
  );
}
