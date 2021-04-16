import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41521 } from "../../../../components/blog/posts/daily_posts/DailyPost41521/DailyPost41521";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41521Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Precalculus | Quadratic Equations, Circle Midpoint & Word
          Problems
        </title>
        <meta
          name="description"
          content="Solve quadratic equations, find the midpoint of a circle, and solve word problems"
        />
      </Head>
      <Navbar />
      <DailyPost41521 />
      <Footer />
    </div>
  );
}
