import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { CookiePolicy } from "../../components/CookiePolicy/CookiePolicy";

export default function CookiePolicyPage() {
  return (
    <div>
      <Head>
        <title>Our Cookie Policy | Functional Tutoring</title>
        <meta
          name="description"
          content="Learn what we do with your data at Functional Tutoring"
        />
      </Head>
      <Navbar />
      <CookiePolicy />
    </div>
  );
}
