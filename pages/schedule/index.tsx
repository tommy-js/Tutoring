import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Schedule } from "../../components/schedule/Schedule/Schedule";

export default function SchedulePage() {
  return (
    <div>
      <Head>
        <title>Scheduling | Functional Tutoring</title>
        <meta
          name="description"
          content="Schedule your session today with Functional Tutoring!"
        />
      </Head>
      <Navbar />
      <Schedule />
    </div>
  );
}
