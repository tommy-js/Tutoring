import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Algebra2 } from "../../../components/materials/Algebra2/Algebra2";
import { Footer } from "../../../components/Footer/Footer";

export default function Algebra2Page() {
  return (
    <div>
      <Head>
        <title>Algebra II | Functional Tutoring</title>
        <meta
          name="description"
          content="Check out our worksheets and topic explanations in our Algebra II library"
        />
      </Head>
      <Navbar />
      <Algebra2 />
    </div>
  );
}
