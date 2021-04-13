import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost42021 } from "../../../../components/blog/posts/daily_posts/DailyPost42021/DailyPost42021";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost42021Page() {
  return (
    <div>
      <Head>
        <title>Daily Precalculus |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost42021 />
      <Footer />
    </div>
  );
}
