import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost33021 } from "../../../../components/blog/posts/daily_posts/DailyPost33021/DailyPost33021";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost33021Page() {
  return (
    <div>
      <Head>
        <title>Daily Pre-Calc 3/30/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted pre-calc problems to get you through the year"
        />
      </Head>
      <Navbar />
      <DailyPost33021 />
      <Footer />
    </div>
  );
}
