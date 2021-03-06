import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { TheRoleTutoringWillPlay } from "../../../components/blog/posts/TheRoleTutoringWillPlay/TheRoleTutoringWillPlay";

export default function TheRoleTutoringWillPlayPage() {
  return (
    <div>
      <Head>
        <title>The Role Tutoring Will Play | Functional Tutoring</title>
        <meta
          name="description"
          content="What we expect from the future of the growing online tutoring industry."
        />
      </Head>
      <Navbar />
      <TheRoleTutoringWillPlay />
    </div>
  );
}
