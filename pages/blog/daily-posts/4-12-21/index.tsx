import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41221 } from "../../../../components/blog/posts/daily_posts/DailyPost41221/DailyPost41221";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41221Page() {
  return (
    <div>
      <Head>
        <title>Daily Arithmetic |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost41221 />
      <Footer />
    </div>
  );
}
