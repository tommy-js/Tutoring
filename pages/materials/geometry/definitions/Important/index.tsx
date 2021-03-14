import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Important } from "../../../../../components/materials/documents/geometry/definitions/Important/Important";

export default function ImportantPage() {
  return (
    <div>
      <Head>
        <title>Notable Theorems | Functional Tutoring</title>
        <meta
          name="description"
          content="Check out a number of notable concepts from plane geometry"
        />
      </Head>
      <Navbar />
      <Important />
    </div>
  );
}
