import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41321 } from "../../../../components/blog/posts/daily_posts/DailyPost41321/DailyPost41321";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41321Page() {
  return (
    <div>
      <Head>
        <title>Daily Algebra |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost41321 />
      <Footer />
    </div>
  );
}
