import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost42121 } from "../../../../components/blog/posts/daily_posts/DailyPost42121/DailyPost42121";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost42121Page() {
  return (
    <div>
      <Head>
        <title>Daily Precalculus |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost42121 />
      <Footer />
    </div>
  );
}
