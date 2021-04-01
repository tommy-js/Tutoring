import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4121 } from "../../../../components/blog/posts/daily_posts/DailyPost4121/DailyPost4121";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4121Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Calculus | Continuity, Derivatives & Radius of Convergence
        </title>
        <meta
          name="description"
          content="Determine the continuity of a function, take derivatives, and find a series' radius of convergence."
        />
      </Head>
      <Navbar />
      <DailyPost4121 />
      <Footer />
    </div>
  );
}
