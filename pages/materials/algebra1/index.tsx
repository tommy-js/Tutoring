import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Algebra1 } from "../../../components/materials/Algebra1/Algebra1";

export default function Algebra1Page() {
  return (
    <div>
      <Head>
        <title>Algebra I</title>
        <meta
          name="description"
          content="Explore our documents for the Algebra I high-school course"
        />
      </Head>
      <Navbar />
      <Algebra1 />
    </div>
  );
}
