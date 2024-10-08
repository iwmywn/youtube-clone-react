import Header from "./Header";
import GridVideos from "./GridVideos";
import { useState } from "react";

export default function RenderMain() {
  const [selectedTheme, setSelectedTheme] = useState<string>("All");

  return (
    <main className="tablet3:ml-[72px] destop:ml-60 mt-14 overflow-x-hidden bg-primary">
      <Header setSelectedTheme={setSelectedTheme} />
      <GridVideos theme={selectedTheme} />
    </main>
  );
}
