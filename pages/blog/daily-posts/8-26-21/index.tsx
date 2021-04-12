import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost42621 } from "../../../../components/blog/posts/daily_posts/DailyPost42621/DailyPost42621";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost42621Page() {
  return (
    <div>
      <Head>
        <title>Daily Precalculus |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost42621 />
      <Footer />
    </div>
  );
}
