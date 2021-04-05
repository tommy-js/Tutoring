import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41421 } from "../../../../components/blog/posts/daily_posts/DailyPost41421/DailyPost41421";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41421Page() {
  return (
    <div>
      <Head>
        <title>Daily Precalculus |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost41421 />
      <Footer />
    </div>
  );
}
