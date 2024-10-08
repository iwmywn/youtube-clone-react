import RenderHeader from "./components/header/RenderHeader";
import RenderNavBar from "./components/navbar/RenderNavBar";
import RenderMain from "./components/main/RenderMain";
import "./index.css";

export default function App() {
  return (
    <>
      <RenderHeader />
      <RenderNavBar />
      <RenderMain />
    </>
  );
}
