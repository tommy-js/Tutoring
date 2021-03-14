import Head from "next/head";
import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { AddSub } from "../../../../../components/materials/documents/arithmetic/worksheets/AddSub/AddSub";

export default function AddSubPage() {
  return (
    <main>
      <Head>
        <title>
          Addition & Subtraction Practice Problems | Functional Tutoring
        </title>
        <meta
          name="description"
          content="Practice adding and subtracting whole numbers"
        />
      </Head>
      <Navbar />
      <AddSub />
    </main>
  );
}
