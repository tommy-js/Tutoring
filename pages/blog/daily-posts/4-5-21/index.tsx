import Head from "next/head";
import { Navbar } from "../../../../components/navigation/Navbar/Navbar";
import { DailyPost4521 } from "../../../../components/blog/posts/daily_posts/DailyPost4521/DailyPost4521";
import { Footer } from "../../../../components/Footer/Footer";

export default function DailyPost4521Page() {
  return (
    <div>
      <Head>
        <title>
          Daily SAT Prep | Equation Solving, Imaginary Numbers & System of
          Equations
        </title>
        <meta
          name="description"
          content="Solve simple equations, get up to speed with imaginary numbers, and solve a system of equations."
        />
      </Head>
      <Navbar />
      <DailyPost4521 />
      <Footer />
    </div>
  );
}
