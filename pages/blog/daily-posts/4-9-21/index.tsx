import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4921 } from "../../../../components/blog/posts/daily_posts/DailyPost4921/DailyPost4921";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4921Page() {
  return (
    <div>
      <Head>
        <title>Daily Precalculus |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost4921 />
      <Footer />
    </div>
  );
}
