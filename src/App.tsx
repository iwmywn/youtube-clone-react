import RenderHeader from "./components/header/RenderHeader";
import RenderNavBar from "./components/navbar/RenderNavBar";
import RenderMain from "./components/main/RenderMain";
import Popup from "./components/popup";
import "./index.css";
import { useState, memo } from "react";

const MemoizedRenderMain = memo(RenderMain);

export default function App() {
  const [isLargeNav, setIsLargeNav] = useState<boolean>(true);

  const toggleNav = () => {
    setIsLargeNav(!isLargeNav);
  };

  return (
    <>
      <Popup />
      <RenderHeader toggleNav={toggleNav} />
      <RenderNavBar isLargeNav={isLargeNav} />
      <main
        className={`mt-14 overflow-x-hidden bg-primary tablet3:ml-[72px] ${isLargeNav && "destop:ml-60"} `}
      >
        <MemoizedRenderMain isLargeNav={isLargeNav} />
      </main>
    </>
  );
}
