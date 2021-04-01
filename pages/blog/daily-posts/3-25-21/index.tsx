import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost32521 } from "../../../../components/blog/posts/daily_posts/DailyPost32521/DailyPost32521";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost32421Page() {
  return (
    <div>
      <Head>
        <title>
          Daily Pre-Calc | Logarithmic Equations, Complex Simplification &
          Imaginary Roots
        </title>
        <meta
          name="description"
          content="Solve logarithmic equations, simplify complex numbers and find imaginary roots."
        />
      </Head>
      <Navbar />
      <DailyPost32521 />
      <Footer />
    </div>
  );
}
