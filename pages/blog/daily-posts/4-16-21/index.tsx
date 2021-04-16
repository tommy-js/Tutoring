import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost41621 } from "../../../../components/blog/posts/daily_posts/DailyPost41621/DailyPost41621";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost41621Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Calculus | L'Hospital's Rule, Indefinite Integration & Critical
          Points
        </title>
        <meta
          name="description"
          content="Review L'Hospital's Rule, indefinite integration, and finding critical points with Functional Tutoring"
        />
      </Head>
      <Navbar />
      <DailyPost41621 />
      <Footer />
    </div>
  );
}
