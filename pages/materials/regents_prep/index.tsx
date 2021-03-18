import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Regents } from "../../../components/materials/Regents/Regents";

export default function PreCalcPage() {
  return (
    <div>
      <Head>
        <title>Regents Prep | Functional Tutoring</title>
        <meta
          name="description"
          content="Check out our worksheets and documents on the New York State Regents exam"
        />
      </Head>
      <Navbar />
      <Regents />
    </div>
  );
}
