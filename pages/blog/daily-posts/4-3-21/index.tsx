import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4321 } from "../../../../components/blog/posts/daily_posts/DailyPost4321/DailyPost4321";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4321Page() {
  return (
    <div>
      <Head>
        <title>Daily Algebra 4/3/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted algebra problems to get you through the year"
        />
      </Head>
      <Navbar />
      <DailyPost4321 />
      <Footer />
    </div>
  );
}
