import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Integrals } from "../../../../../components/materials/documents/calculus1/methods/Integrals/Integrals";

export default function IntegralsPage() {
  return (
    <div>
      <Head>
        <title>Integration Methods | Functional Tutoring</title>
        <meta
          name="description"
          content="Learn methods of integration, such as Integration by Parts and U-Substitution"
        />
      </Head>
      <Navbar />
      <Integrals />
    </div>
  );
}
