import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Arithmetic } from "../../../components/materials/Arithmetic/Arithmetic";
import { Footer } from "../../../components/Footer/Footer";

export default function ArithmeticPage() {
  return (
    <div>
      <Head>
        <title>Arithmetic</title>
        <meta
          name="description"
          content="Explore our full list of arithmetic worksheets and documents"
        />
      </Head>
      <Navbar />
      <Arithmetic />
    </div>
  );
}
