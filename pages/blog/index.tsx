import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Blog } from "../../components/blog/Blog/Blog";

export default function BlogPage() {
  return (
    <div>
      <Head>
        <title>Blog | Functional Tutoring</title>
        <meta
          name="description"
          content="Check out our past publications and uploads!"
        />
      </Head>
      <Navbar />
      <Blog />
    </div>
  );
}
