import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4221 } from "../../../../components/blog/posts/daily_posts/DailyPost4221/DailyPost4221";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4221Page() {
  return (
    <div>
      <Head>
        <title>Daily Arithmetic 4/2/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted arithmetic problems to get you through the year"
        />
      </Head>
      <Navbar />
      <DailyPost4221 />
      <Footer />
    </div>
  );
}
