import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32521 } from "../../../../components/blog/posts/daily_posts/DailyPost32521/DailyPost32521";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32421Page() {
  return (
    <div>
      <Head>
        <title>Daily Pre-Calc 3/25/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted pre-calc problems to get you through your semester"
        />
      </Head>
      <Navbar />
      <DailyPost32521 />
      <Footer />
    </div>
  );
}
