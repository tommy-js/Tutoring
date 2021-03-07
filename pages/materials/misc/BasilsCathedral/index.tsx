import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { BasilsCathedral } from "../../../../components/materials/documents/misc/BasilsCathedral/BasilsCathedral";
import { Footer } from "../../../../components/Footer/Footer";

export default function BasilsCathedralPage() {
  return (
    <div>
      <Head>
        <title>St. Basil's Cathedral | Functional Tutoring</title>
        <meta
          name="description"
          content="Learn a little about St. Basil's Cathedral"
        />
      </Head>
      <Navbar />
      <BasilsCathedral />
      <Footer />
    </div>
  );
}
