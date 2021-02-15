import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Faq } from "../../components/faq/Faq/Faq";
import { Footer } from "../../components/Footer/Footer";

export default function FaqPage() {
  return (
    <div>
      <Head>
        <title>Frequently Asked Questions</title>
        <meta
          name="description"
          content="Before contacting us, visit this page to see if your question has already been answered!"
        />
      </Head>
      <Navbar />
      <Faq />
      <Footer />
    </div>
  );
}
