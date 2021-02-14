import { Navbar } from "../../../components/navigation/Navbar/Navbar";
import { Geometry } from "../../../components/materials/Geometry/Geometry";

export default function GeometryPage() {
  return (
    <div>
      <Head>
        <title>Geometry</title>
        <meta
          name="description"
          content="Explore our worksheets and documents on plane geometry"
        />
      </Head>
      <Navbar />
      <Geometry />
    </div>
  );
}
