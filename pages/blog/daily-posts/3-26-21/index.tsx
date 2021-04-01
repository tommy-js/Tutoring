import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32621 } from "../../../../components/blog/posts/daily_posts/DailyPost32621/DailyPost32621";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32421Page() {
  return (
    <div>
      <Head>
        <title>Daily Sat Prep | Word Problems & Inequalities</title>
        <meta
          name="description"
          content="Solve word problems and inequalities in today's problem set with Functional Tutoring."
        />
      </Head>
      <Navbar />
      <DailyPost32621 />
      <Footer />
    </div>
  );
}
