import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Schedule } from "../../components/schedule/Schedule/Schedule";
import { Footer } from "../../components/Footer/Footer";

export default function SchedulePage() {
  return (
    <div>
      <Head>
        <title>Scheduling</title>
        <meta
          name="description"
          content="Schedule your session today with Functional Tutoring!"
        />
      </Head>
      <Navbar />
      <Schedule />
      <Footer />
    </div>
  );
}
