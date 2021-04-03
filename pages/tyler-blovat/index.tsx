import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { TylerBlovat } from "../../components/TylerBlovat/TylerBlovat";

export default function QualificationsPage() {
  return (
    <div>
      <Head>
        <title>Tyler Blovat | Functional Tutoring</title>
        <meta
          name="description"
          content="About Functional Tutoring founder and tutor Tyler Blovat"
        />
      </Head>
      <Navbar />
      <TylerBlovat />
    </div>
  );
}
