import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Qualifications } from "../../components/qualifications/Qualifications/Qualifications";
import { Footer } from "../../components/Footer/Footer";

export default function QualificationsPage() {
  return (
    <div>
      <Head>
        <title>My Qualifications | Functional Tutoring</title>
        <meta
          name="description"
          content="Learn what makes Functional Tutoring qualified to help you become a better student."
        />
      </Head>
      <Navbar />
      <Qualifications />
      <Footer />
    </div>
  );
}
