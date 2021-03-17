import Head from "next/head";
import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { FamiliesInLockdown } from "../../../components/blog/posts/FamiliesInLockdown/FamiliesInLockdown";

export default function FamilesInLockdownPage() {
  return (
    <div>
      <Head>
        <title>Families in Lockdown | Functional Tutoring</title>
        <meta
          name="description"
          content="How lockdown is impacting families and revealing gender inequality"
        />
      </Head>
      <Navbar />
      <FamiliesInLockdown />
    </div>
  );
}
