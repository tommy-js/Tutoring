import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41121 } from "../../../../components/blog/posts/daily_posts/DailyPost41121/DailyPost41121";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41121Page() {
  return (
    <div>
      <Head>
        <title>Daily Calculus |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost41121 />
      <Footer />
    </div>
  );
}
