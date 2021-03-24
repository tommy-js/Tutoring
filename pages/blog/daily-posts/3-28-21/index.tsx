import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32821 } from "../../../../components/blog/posts/daily_posts/DailyPost32821/DailyPost32821";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32821Page() {
  return (
    <div>
      <Head>
        <title>Daily Arithmetic 3/28/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted arithmetic problems to get you through the year"
        />
      </Head>
      <Navbar />
      <DailyPost32821 />
      <Footer />
    </div>
  );
}
