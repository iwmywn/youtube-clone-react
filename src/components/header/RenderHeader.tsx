import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

export default function RenderHeader() {
  return (
    <header
      id="header"
      className="bg-primary fixed inset-x-0 top-0 z-10 flex h-14 justify-between px-4"
    >
      <Left />
      <Middle />
      <Right />
    </header>
  );
}
