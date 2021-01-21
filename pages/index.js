import Head from "next/head";
import { AppPage } from "../components/AppPage/AppPage";
import { Navbar } from "../components/navigation/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AppPage />
    </div>
  );
}
