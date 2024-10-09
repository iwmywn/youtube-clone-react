import Header from "./Header";
import GridVideos from "./GridVideos";
import { useState, memo } from "react";

interface NavProps {
  isLargeNav: boolean;
}

const MemoizedHeader = memo(Header);
const MemoizedGridVideos = memo(GridVideos);

export default function RenderMain({ isLargeNav }: NavProps) {
  const [selectedTheme, setSelectedTheme] = useState<string>("All");

  return (
    <>
      <MemoizedHeader setSelectedTheme={setSelectedTheme} />
      <div
        id="content"
        className={`ml-2 mr-4 grid grid-cols-1 gap-x-4 gap-y-10 pl-4 pt-6 tablet2:grid-cols-2 tablet2:pl-0 laptop:grid-cols-3 ${isLargeNav ? "destop3:grid-cols-4 destop5:grid-cols-5" : "destop2:grid-cols-4 destop4:grid-cols-5"} `}
      >
        <MemoizedGridVideos theme={selectedTheme} />
      </div>
    </>
  );
}
