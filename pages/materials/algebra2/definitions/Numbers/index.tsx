import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Numbers } from "../../../../../components/materials/documents/algebra2/definitions/Numbers/Numbers";

export default function NumberPage() {
  return (
    <div>
      <Head>
        <title>Definitions of Numbers</title>
        <meta
          name="description"
          content="Learn the difference between integers, transcendental, and rational numbers"
        />
      </Head>
      <Navbar />
      <Numbers />
    </div>
  );
}
