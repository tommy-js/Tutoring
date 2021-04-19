import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Arithmetic } from "../../../components/subjects/Arithmetic/Arithmetic";

export default function ArithmeticPage() {
  return (
    <div>
      <Head>
        <title>Arithmetic | Functional Tutoring</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <Arithmetic />
    </div>
  );
}
