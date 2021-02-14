import Head from "next/head";
import { Navbar } from "../../components/navigation/Navbar/Navbar";
import { Pricing } from "../../components/pricing/Pricing/Pricing";

export default function PricingPage() {
  return (
    <div>
      <Head>
        <title>Pricing</title>
        <meta
          name="description"
          content="Stay up to date with our pricing and deals"
        />
      </Head>
      <Navbar />
      <Pricing />
    </div>
  );
}
