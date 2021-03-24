import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32921 } from "../../../../components/blog/posts/daily_posts/DailyPost32921/DailyPost32921";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32921Page() {
  return (
    <div>
      <Head>
        <title>Daily algebra 3/29/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted algebra problems to get you through the year"
        />
      </Head>
      <Navbar />
      <DailyPost32921 />
      <Footer />
    </div>
  );
}
