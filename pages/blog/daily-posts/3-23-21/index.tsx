import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32321 } from "../../../../components/blog/posts/daily_posts/DailyPost32321/DailyPost32321";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32321Page() {
  return (
    <div>
      <Head>
        <title>Daily Algebra | Factoring, Root Finding & Distribution</title>
        <meta
          name="description"
          content="Go over factoring, finding roots, and distributing equations at Functional Tutoring."
        />
      </Head>
      <Navbar />
      <DailyPost32321 />
      <Footer />
    </div>
  );
}
