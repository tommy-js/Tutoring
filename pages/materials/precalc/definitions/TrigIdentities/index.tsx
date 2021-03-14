import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { TrigIdentities } from "../../../../../components/materials/documents/precalc/definitions/TrigIdentities/TrigIdentities";

export default function TrigIdentitiesPage() {
  return (
    <div>
      <Head>
        <title>Trigonometric Identities | Functional Tutoring</title>
        <meta
          name="description"
          content="Get up to speed with important trig identities in preparation for calculus"
        />
      </Head>
      <Navbar />
      <TrigIdentities />
    </div>
  );
}
