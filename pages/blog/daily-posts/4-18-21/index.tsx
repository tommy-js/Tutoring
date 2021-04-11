import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41821 } from "../../../../components/blog/posts/daily_posts/DailyPost41821/DailyPost41821";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41821Page() {
  return (
    <div>
      <Head>
        <title>Daily Precalculus |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost41821 />
      <Footer />
    </div>
  );
}
