import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32921 } from "../../../../components/blog/posts/daily_posts/DailyPost32921/DailyPost32921";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32921Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Algebra | Solving Exponential Equations, Series & Binomial
          Theorem
        </title>
        <meta
          name="description"
          content="Solve exponential equations, work with series and use the Binomial Theorem."
        />
      </Head>
      <Navbar />
      <DailyPost32921 />
      <Footer />
    </div>
  );
}
