import Head from "next/head";
import { Policy } from "../../components/policy/Policy/Policy";
import { Navbar } from "../../components/navigation/Navbar/Navbar";

export default function PolicyPage() {
  return (
    <div>
      <Head>
        <title>Our Policies</title>
        <meta
          name="description"
          content="Be informed before your tutoring session on our policies and expectations"
        />
      </Head>
      <Navbar />
      <Policy />
    </div>
  );
}
