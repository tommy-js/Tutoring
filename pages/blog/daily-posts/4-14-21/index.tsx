import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41421 } from "../../../../components/blog/posts/daily_posts/DailyPost41421/DailyPost41421";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41421Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Precalculus | Complex Simplification, Synthetic Division &
          Fundamental Theorem of Algebra
        </title>
        <meta
          name="description"
          content="Simplify complex expressions and perform synthetic division with Functional Tutoring"
        />
      </Head>
      <Navbar />
      <DailyPost41421 />
      <Footer />
    </div>
  );
}
