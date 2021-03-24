import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost33121 } from "../../../../components/blog/posts/daily_posts/DailyPost33121/DailyPost33121";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost33121Page() {
  return (
    <div>
      <Head>
        <title>Daily SAT Prep 3/31/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted SAT prep problems to get you through the year"
        />
      </Head>
      <Navbar />
      <DailyPost33121 />
      <Footer />
    </div>
  );
}
