import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Blog } from "../../components/blog/Blog/Blog";
import { Footer } from "../../components/Footer/Footer";

export default function BlogPage() {
  return (
    <div>
      <Head>
        <title>Functional Tutoring Blog</title>
        <meta
          name="description"
          content="Check out our past publications and uploads!"
        />
      </Head>
      <Navbar />
      <Blog />
      <Footer />
    </div>
  );
}
