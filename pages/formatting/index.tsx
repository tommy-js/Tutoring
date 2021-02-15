import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Formatting } from "../../components/Formatting/Formatting";
import { Footer } from "../../components/Footer/Footer";

export default function FormattingPage() {
  return (
    <div>
      <Head>
        <title>Formatting</title>
        <meta
          name="description"
          content="Learn how to format your answers to our worksheets"
        />
      </Head>
      <Navbar />
      <Formatting />
      <Footer />
    </div>
  );
}
