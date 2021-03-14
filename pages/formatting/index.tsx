import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Formatting } from "../../components/Formatting/Formatting";

export default function FormattingPage() {
  return (
    <div>
      <Head>
        <title>Formatting | Functional Tutoring</title>
        <meta
          name="description"
          content="Learn how to format your answers to our worksheets"
        />
      </Head>
      <Navbar />
      <Formatting />
    </div>
  );
}
