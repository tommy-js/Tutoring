import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32221 } from "../../../../components/blog/posts/daily_posts/DailyPost32221/DailyPost32221";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32221Page() {
  return (
    <div>
      <Head>
        <title>Daily Calculus 3/22/21 | Functional Tutoring</title>
        <meta
          name="description"
          content="Assorted calculus problems to get you through your semester"
        />
      </Head>
      <Navbar />
      <DailyPost32221 />
      <Footer />
    </div>
  );
}
