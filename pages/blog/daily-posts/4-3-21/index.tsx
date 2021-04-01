import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4321 } from "../../../../components/blog/posts/daily_posts/DailyPost4321/DailyPost4321";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4321Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Algebra | Root Solving, Expression Simplification & Factorials
        </title>
        <meta
          name="description"
          content="Solve for roots, simplify expressions, and take factorials with Functional Tutoring."
        />
      </Head>
      <Navbar />
      <DailyPost4321 />
      <Footer />
    </div>
  );
}
