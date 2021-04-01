import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32421 } from "../../../../components/blog/posts/daily_posts/DailyPost32421/DailyPost32421";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32421Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Arithmetic | Simple Expressions, Fractional Multiplication &
          Division
        </title>
        <meta
          name="description"
          content="Learn how to solve simple equations and multiply and divide fractions."
        />
      </Head>
      <Navbar />
      <DailyPost32421 />
      <Footer />
    </div>
  );
}
