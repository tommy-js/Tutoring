import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { MathInThePandemic } from "../../../components/blog/posts/MathInThePandemic/MathInThePandemic";

export default function BlogPage() {
  return (
    <div>
      <Head>
        <title>Math In The Pandemic | Functional Tutoring</title>
        <meta
          name="description"
          content="Our thoughts on how the pandemic is affecting mathematics students at every level"
        />
      </Head>
      <Navbar />
      <MathInThePandemic />
    </div>
  );
}
