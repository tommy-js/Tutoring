import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4421 } from "../../../../components/blog/posts/daily_posts/DailyPost4421/DailyPost4421";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4421Page() {
  return (
    <div>
      <Head>
        <title>Daily Pre-Calc 4/4/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted pre-calc problems to get you through the year"
        />
      </Head>
      <Navbar />
      <DailyPost4421 />
      <Footer />
    </div>
  );
}
