import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41821 } from "../../../../components/blog/posts/daily_posts/DailyPost41821/DailyPost41821";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41821Page() {
  return (
    <div>
      <Head>
        <title>Daily Algebra</title>
        <meta
          name="description"
          content="Review algebra word problems and factor perfect squares with us at Functional Tutoring!"
        />
      </Head>
      <Navbar />
      <DailyPost41821 />
      <Footer />
    </div>
  );
}
