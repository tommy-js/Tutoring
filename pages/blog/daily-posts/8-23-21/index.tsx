import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost42321 } from "../../../../components/blog/posts/daily_posts/DailyPost42321/DailyPost42321";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost42321Page() {
  return (
    <div>
      <Head>
        <title>Daily Precalculus |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost42321 />
      <Footer />
    </div>
  );
}
