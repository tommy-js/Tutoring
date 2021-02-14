import { Navbar } from "../../../../../components/navigation/Navbar/Navbar";
import { Similar } from "../../../../../components/materials/documents/geometry/worksheets/Similar/Similar";

export default function SimilarPage() {
  return (
    <div>
      <Head>
        <title>Similar & Congruent Shapes</title>
        <meta
          name="description"
          content="Explore the differences between similar and congruent shapes"
        />
      </Head>
      <Navbar />
      <Similar />
    </div>
  );
}
