import RenderHeader from "./components/header";
import RenderNavBar from "./components/navbar";
import RenderMain from "./components/main";
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
