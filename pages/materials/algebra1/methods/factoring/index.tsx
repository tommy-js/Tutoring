import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Factoring } from "../../../../../components/materials/documents/algebra1/methods/Factoring/Factoring";

export default function Methods1Page() {
  return (
    <div>
      <Head>
        <title>Methods of Factoring | Functional Tutoring</title>
        <meta
          name="description"
          content="Learn how to factor using a variety of methods"
        />
      </Head>
      <Navbar />
      <Factoring />
    </div>
  );
}
