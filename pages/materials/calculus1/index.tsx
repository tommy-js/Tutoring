import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Calculus1 } from "../../../components/materials/Calculus1/Calculus1";
import { Footer } from "../../../components/Footer/Footer";

export default function Calculus1Page() {
  return (
    <div>
      <Head>
        <title>Calculus I | Functional Tutoring</title>
        <meta
          name="description"
          content="Explore our full library of Calculus I worksheets and documents"
        />
      </Head>
      <Navbar />
      <Calculus1 />
    </div>
  );
}
