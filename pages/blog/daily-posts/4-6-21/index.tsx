import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4621 } from "../../../../components/blog/posts/daily_posts/DailyPost4621/DailyPost4621";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4621Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Calculus | Intermediate Value Theorem, Maximums & Minimums &
          Inflection Points
        </title>
        <meta
          name="description"
          content="Review the Intermediate Value Theorem, find function max and mins, and find inflection points."
        />
      </Head>
      <Navbar />
      <DailyPost4621 />
      <Footer />
    </div>
  );
}
