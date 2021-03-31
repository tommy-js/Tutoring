import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4121 } from "../../../../components/blog/posts/daily_posts/DailyPost4121/DailyPost4121";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4121Page() {
  return (
    <div>
      <Head>
        <title>Daily Calculus 4/1/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted calculus I problems to get you through the semester"
        />
      </Head>
      <Navbar />
      <DailyPost4121 />
      <Footer />
    </div>
  );
}
