import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { ReadingList } from "../../components/ReadingList/ReadingList";

export default function ReadingListPage() {
  return (
    <div>
      <Head>
        <title>Reading List</title>
        <meta
          name="description"
          content="What I'm currently reading, and what I hope to read soon"
        />
      </Head>
      <Navbar />
      <ReadingList />
    </div>
  );
}
