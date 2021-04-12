import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost42421 } from "../../../../components/blog/posts/daily_posts/DailyPost42421/DailyPost42421";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost42421Page() {
  return (
    <div>
      <Head>
        <title>Daily Precalculus |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost42421 />
      <Footer />
    </div>
  );
}
