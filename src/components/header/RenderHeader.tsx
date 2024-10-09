import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

interface NavProps {
  toggleNav: () => void;
}

export default function RenderHeader({ toggleNav }: NavProps) {
  return (
    <header
      id="header"
      className="fixed inset-x-0 top-0 z-10 flex h-14 justify-between bg-primary px-2 tablet:px-4"
    >
      <Left toggleNav={toggleNav} />
      <Middle />
      <Right />
    </header>
  );
}
