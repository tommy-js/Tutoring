import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost42221 } from "../../../../components/blog/posts/daily_posts/DailyPost42221/DailyPost42221";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost42221Page() {
  return (
    <div>
      <Head>
        <title>Daily Precalculus |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost42221 />
      <Footer />
    </div>
  );
}
