import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { SubmissionThanks } from "../../components/SubmissionThanks/SubmissionThanks";
import { Footer } from "../../components/Footer/Footer";

export default function SubmissionThanksPage() {
  return (
    <div>
      <Navbar />
      <SubmissionThanks />
      <Footer />
    </div>
  );
}
