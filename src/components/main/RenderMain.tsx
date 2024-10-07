import Header from "./Header";
import GridVideos from "./GridVideos";

export default function RenderMain() {
  return (
    <main className="ml-60 mt-14 overflow-x-hidden bg-primary">
      <Header />
      <GridVideos />
    </main>
  );
}
