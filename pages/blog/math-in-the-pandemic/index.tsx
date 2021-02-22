import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { MathInThePandemic } from "../../../components/blog/posts/MathInThePandemic/MathInThePandemic";
import { Footer } from "../../../components/Footer/Footer";

export default function BlogPage() {
  return (
    <div>
      <Head>
        <title>Math In The Pandemic</title>
        <meta
          name="description"
          content="Our thoughts on how the pandemic is affecting mathematics students at every level"
        />
      </Head>
      <Navbar />
      <MathInThePandemic />
      <Footer />
    </div>
  );
}
