import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost42521 } from "../../../../components/blog/posts/daily_posts/DailyPost42521/DailyPost42521";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost42521Page() {
  return (
    <div>
      <Head>
        <title>Daily Precalculus |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost42521 />
      <Footer />
    </div>
  );
}
