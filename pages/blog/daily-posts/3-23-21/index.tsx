import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32321 } from "../../../../components/blog/posts/daily_posts/DailyPost32321/DailyPost32321";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32321Page() {
  return (
    <div>
      <Head>
        <title>Daily Algebra 3/23/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted algebra problems to get you through your semester"
        />
      </Head>
      <Navbar />
      <DailyPost32321 />
      <Footer />
    </div>
  );
}
