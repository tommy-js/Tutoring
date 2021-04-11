import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41521 } from "../../../../components/blog/posts/daily_posts/DailyPost41521/DailyPost41521";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41521Page() {
  return (
    <div>
      <Head>
        <title>Daily Precalculus |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost41521 />
      <Footer />
    </div>
  );
}
