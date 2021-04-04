import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41021 } from "../../../../components/blog/posts/daily_posts/DailyPost41021/DailyPost41021";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41021Page() {
  return (
    <div>
      <Head>
        <title>Daily SAT Prep |</title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost41021 />
      <Footer />
    </div>
  );
}
