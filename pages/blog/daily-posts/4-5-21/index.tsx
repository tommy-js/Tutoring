import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4521 } from "../../../../components/blog/posts/daily_posts/DailyPost4521/DailyPost4521";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4521Page() {
  return (
    <div>
      <Head>
        <title>Daily SAT Prep 4/5/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted SAT prep problems to get you through the year"
        />
      </Head>
      <Navbar />
      <DailyPost4521 />
      <Footer />
    </div>
  );
}
