import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { FactoringPolynomials } from "../../../components/blog/posts/FactoringPolynomials/FactoringPolynomials";

export default function FactoringPolynomialsPage() {
  return (
    <div>
      <Head>
        <title>Factoring Polynomials | Functional Tutoring</title>
        <meta
          name="description"
          content="Learn how to factor polynomials with us at Functional Tutoring!"
        />
      </Head>
      <Navbar />
      <FactoringPolynomials />
    </div>
  );
}
