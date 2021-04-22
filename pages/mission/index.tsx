import Head from "next/head";
import { Mission } from "../../components/Mission/Mission";
import { Navbar } from "../../components/navigation/Navbar/Navbar";

export default function MissionPage() {
  return (
    <div>
      <Head>
        <title>Our Mission | Functional Tutoring</title>
        <meta
          name="description"
          content="The mission and greater purpose of Functional Tutoring"
        />
      </Head>
      <Navbar />
      <Mission />
    </div>
  );
}
