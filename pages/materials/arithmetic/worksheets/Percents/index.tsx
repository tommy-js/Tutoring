import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Percentages } from "../../../../../components/materials/documents/arithmetic/worksheets/Percentages/Percentages";
import { Footer } from "../../../../../components/Footer/Footer";

export default function PercentsPage() {
  return (
    <main>
      <Head>
        <title>Percent Practice Problems | Functional Tutoring</title>
        <meta
          name="description"
          content="Get up to speed on your percents by doing practice problems with us!"
        />
      </Head>
      <Navbar />
      <Percentages />
      <Footer />
    </main>
  );
}
