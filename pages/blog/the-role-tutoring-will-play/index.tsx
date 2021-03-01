import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { TheRoleTutoringWillPlay } from "../../../components/blog/posts/TheRoleTutoringWillPlay/TheRoleTutoringWillPlay";
import { Footer } from "../../../components/Footer/Footer";

export default function TheRoleTutoringWillPlayPage() {
  return (
    <div>
      <Head>
        <title>The Role Tutoring Will Play</title>
        <meta
          name="description"
          content="What we expect from the future of the growing online tutoring industry."
        />
      </Head>
      <Navbar />
      <TheRoleTutoringWillPlay />
      <Footer />
    </div>
  );
}
