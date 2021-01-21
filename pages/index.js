import Head from "next/head";
import { AppPage } from "../components/front_page/AppPage/AppPage";
import { Navbar } from "../components/navigation/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AppPage />
    </div>
  );
}
