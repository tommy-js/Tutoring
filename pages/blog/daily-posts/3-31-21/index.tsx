import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost33121 } from "../../../../components/blog/posts/daily_posts/DailyPost33121/DailyPost33121";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost33121Page() {
  return (
    <div>
      <Head>
        <title>Daily SAT Prep | Word Problems</title>
        <meta
          name="description"
          content="Get some practice in for the SAT by doing some word problems."
        />
      </Head>
      <Navbar />
      <DailyPost33121 />
      <Footer />
    </div>
  );
}
