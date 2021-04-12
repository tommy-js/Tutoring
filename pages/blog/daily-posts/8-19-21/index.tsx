import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41921 } from "../../../../components/blog/posts/daily_posts/DailyPost41921/DailyPost41921";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41921Page() {
  return (
    <div>
      <Head>
        <title>Daily Precalculus |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost41921 />
      <Footer />
    </div>
  );
}
