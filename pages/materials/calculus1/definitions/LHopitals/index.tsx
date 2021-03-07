import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { LHopitals } from "../../../../../components/materials/documents/calculus1/definitions/LHopitals/LHopitals";
import { Footer } from "../../../../../components/Footer/Footer";

export default function LHospitalsPage() {
  return (
    <div>
      <Head>
        <title>L'Hospital's Rule | Functional Tutoring</title>
        <meta
          name="description"
          content="Learn about L'Hospital's Rule and apply it to your own problems"
        />
      </Head>
      <Navbar />
      <LHopitals />
      <Footer />
    </div>
  );
}
