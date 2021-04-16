import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41321 } from "../../../../components/blog/posts/daily_posts/DailyPost41321/DailyPost41321";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41321Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Algebra | Zero Product Property, Polynomial Addition & Systems
          of Equations
        </title>
        <meta
          name="description"
          content="Go over the Zero Product Property, add polynomials, and review systems of equations"
        />
      </Head>
      <Navbar />
      <DailyPost41321 />
      <Footer />
    </div>
  );
}
