import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { AboutMe } from "../../components/about/AboutMe/AboutMe";

export default function BlogPage() {
  return (
    <div>
      <Head>
        <title>About Me | Functional Tutoring</title>
        <meta
          name="description"
          content="About Tyler Blovat, creator and tutor at Functional Tutoring."
        />
      </Head>
      <Navbar />
      <AboutMe />
    </div>
  );
}
