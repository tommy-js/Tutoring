import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4621 } from "../../../../components/blog/posts/daily_posts/DailyPost4621/DailyPost4621";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4621Page() {
  return (
    <div>
      <Head>
        <title>Daily Calculus 4/6/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted calculus I problems to get you through the semester"
        />
      </Head>
      <Navbar />
      <DailyPost4621 />
      <Footer />
    </div>
  );
}
