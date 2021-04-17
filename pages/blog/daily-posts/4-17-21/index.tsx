import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41721 } from "../../../../components/blog/posts/daily_posts/DailyPost41721/DailyPost41721";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41721Page() {
  return (
    <div>
      <Head>
        <title>Daily Arithmetic</title>
        <meta
          name="description"
          content="Review converting decimals to fractions and finding the least common denominator of a pair of fractions"
        />
      </Head>
      <Navbar />
      <DailyPost41721 />
      <Footer />
    </div>
  );
}
