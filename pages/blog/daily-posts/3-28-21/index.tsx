import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32821 } from "../../../../components/blog/posts/daily_posts/DailyPost32821/DailyPost32821";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32821Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Arithmetic | Simplification, Multiplication & Long Division
        </title>
        <meta
          name="description"
          content="Simplify expressions, perform multiplication and long division."
        />
      </Head>
      <Navbar />
      <DailyPost32821 />
      <Footer />
    </div>
  );
}
