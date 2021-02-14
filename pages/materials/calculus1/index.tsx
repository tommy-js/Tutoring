import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Calculus1 } from "../../../components/materials/Calculus1/Calculus1";

export default function Calculus1Page() {
  return (
    <div>
      <Head>
        <title>Calculus I</title>
        <meta
          name="description"
          content="Explore our full list of Calculus I worksheets and documents"
        />
      </Head>
      <Navbar />
      <Calculus1 />
    </div>
  );
}
