import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost42721 } from "../../../../components/blog/posts/daily_posts/DailyPost42721/DailyPost42721";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost42721Page() {
  return (
    <div>
      <Head>
        <title>Daily Arithmetic | Multiplying 3 Terms</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost42721 />
      <Footer />
    </div>
  );
}
