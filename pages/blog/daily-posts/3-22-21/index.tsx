import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32221 } from "../../../../components/blog/posts/daily_posts/DailyPost32221/DailyPost32221";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32221Page() {
  return (
    <div>
      <Head>
        <title>Daily Calculus | Limits, Derivatives & Antiderivatives</title>
        <meta
          name="description"
          content="Review the concepts of limits, derivatives and antiderivatives in this daily problem set."
        />
      </Head>
      <Navbar />
      <DailyPost32221 />
      <Footer />
    </div>
  );
}
