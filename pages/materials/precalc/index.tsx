import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { PreCalc } from "../../../components/materials/PreCalc/PreCalc";

export default function PreCalcPage() {
  return (
    <div>
      <Head>
        <title>Pre-Calculus</title>
        <meta
          name="description"
          content="Check out our worksheets and documents on pre-calc"
        />
      </Head>
      <Navbar />
      <PreCalc />
    </div>
  );
}
