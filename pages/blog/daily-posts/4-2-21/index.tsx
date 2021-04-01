import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4221 } from "../../../../components/blog/posts/daily_posts/DailyPost4221/DailyPost4221";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4221Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Arithmetic | Greatest Common Divisor, Squaring & Square Rooting
        </title>
        <meta
          name="description"
          content="Find the greatest common divisor, take squares and square roots of numbers"
        />
      </Head>
      <Navbar />
      <DailyPost4221 />
      <Footer />
    </div>
  );
}
