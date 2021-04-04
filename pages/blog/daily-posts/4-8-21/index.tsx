import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4821 } from "../../../../components/blog/posts/daily_posts/DailyPost4821/DailyPost4821";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4821Page() {
  return (
    <div>
      <Head>
        <title>Daily Algebra</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost4821 />
      <Footer />
    </div>
  );
}
