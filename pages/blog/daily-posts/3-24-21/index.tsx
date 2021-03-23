import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32421 } from "../../../../components/blog/posts/daily_posts/DailyPost32421/DailyPost32421";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32421Page() {
  return (
    <div>
      <Head>
        <title>Daily Arithmetic 3/24/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted arithmetic problems to get you through the year"
        />
      </Head>
      <Navbar />
      <DailyPost32421 />
      <Footer />
    </div>
  );
}
