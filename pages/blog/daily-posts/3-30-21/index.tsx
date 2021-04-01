import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost33021 } from "../../../../components/blog/posts/daily_posts/DailyPost33021/DailyPost33021";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost33021Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Precalculus | Series Convergence, Trigonometric Equations &
          Function Domains
        </title>
        <meta
          name="description"
          content="Determine whether a series converges, work with trig equations and find the function domain."
        />
      </Head>
      <Navbar />
      <DailyPost33021 />
      <Footer />
    </div>
  );
}
