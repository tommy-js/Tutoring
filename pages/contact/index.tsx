import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Contact } from "../../components/contact/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Contact Functional Tutoring with inquiries and suggestions"
        />
      </Head>
      <Navbar />
      <Contact />
    </div>
  );
}
