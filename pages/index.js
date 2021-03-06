import Head from "next/head";
import { AppPage } from "../components/front_page/AppPage/AppPage";
import { Navbar } from "../components/navigation/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { CookieBar } from "../components/CookieBar/CookieBar";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Functional Tutoring</title>
        <meta
          name="description"
          content="Superior mathematics tutoring for less!"
        />
      </Head>
      <Navbar />
      <AppPage />
      <CookieBar />
    </main>
  );
}
