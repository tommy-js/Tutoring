import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4721 } from "../../../../components/blog/posts/daily_posts/DailyPost4721/DailyPost4721";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4721Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Arithmetic | Improper Fractions, Addition & Decimals
        </title>
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <DailyPost4721 />
      <Footer />
    </div>
  );
}
