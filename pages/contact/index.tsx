import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Contact } from "../../components/contact/Contact/Contact";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact Us | Functional Tutoring</title>
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
