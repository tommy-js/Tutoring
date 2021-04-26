import Head from "next/head";
import { Landing } from "../../components/LandingPage/Landing/Landing";
import { Navbar } from "../../components/navigation/Navbar/Navbar";

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>Get Started | Functional Tutoring</title>
        <meta name="description" content="Why should you use our services?" />
      </Head>
      <Navbar />
      <Landing />
    </div>
  );
}
