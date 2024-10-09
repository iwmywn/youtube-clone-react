import LargeNav from "./LargeNav";
import SmallNav from "./SmallNav";

interface NavProps {
  isLargeNav: boolean;
}

export default function RenderNavBar({ isLargeNav }: NavProps) {
  return (
    <>
      <LargeNav isLargeNav={isLargeNav} />
      <SmallNav isLargeNav={isLargeNav} />
    </>
  );
}
