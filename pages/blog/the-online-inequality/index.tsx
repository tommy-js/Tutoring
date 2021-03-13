import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { TheOnlineInequality } from "../../../components/blog/posts/TheOnlineInequality/TheOnlineInequality";

export default function TheOnlineInequalityPage() {
  return (
    <div>
      <Head>
        <title>The Online Inequality | Functional Tutoring</title>
        <meta
          name="description"
          content="Discuss whether or not online education is accessible for the Americans who need it."
        />
      </Head>
      <Navbar />
      <TheOnlineInequality />
    </div>
  );
}
