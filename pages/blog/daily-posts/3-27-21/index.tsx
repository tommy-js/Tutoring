import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32721 } from "../../../../components/blog/posts/daily_posts/DailyPost32721/DailyPost32721";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32721Page() {
  return (
    <div>
      <Head>
        <title>Daily Calculus | Derivatives, Limits & Continuity</title>
        <meta
          name="description"
          content="Take derivatives, solve limits, and determine continuity of functions."
        />
      </Head>
      <Navbar />
      <DailyPost32721 />
      <Footer />
    </div>
  );
}
