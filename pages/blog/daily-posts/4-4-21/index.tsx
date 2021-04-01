import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4421 } from "../../../../components/blog/posts/daily_posts/DailyPost4421/DailyPost4421";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4421Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Precalculus | Function Composition, Complex Roots & Function
          Inverses
        </title>
        <meta
          name="description"
          content="Perform function composition, find complex roots, and find function inverses."
        />
      </Head>
      <Navbar />
      <DailyPost4421 />
      <Footer />
    </div>
  );
}
