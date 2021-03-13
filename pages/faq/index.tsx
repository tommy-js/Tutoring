import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Faq } from "../../components/faq/Faq/Faq";

export default function FaqPage() {
  return (
    <div>
      <Head>
        <title>Frequently Asked Questions | Functional Tutoring</title>
        <meta
          name="description"
          content="Before contacting us, visit this page to see if your question has already been answered!"
        />
      </Head>
      <Navbar />
      <Faq />
    </div>
  );
}
