import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { ReadingList } from "../../components/ReadingList/ReadingList";
import { Footer } from "../../components/Footer/Footer";

export default function ReadingListPage() {
  return (
    <div>
      <Head>
        <title>Reading List | Functional Tutoring</title>
        <meta
          name="description"
          content="What I'm currently reading, and what I hope to read soon"
        />
      </Head>
      <Navbar />
      <ReadingList />
      <Footer />
    </div>
  );
}
