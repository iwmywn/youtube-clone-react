import LargeNav from "./LargeNav";
import SmallNav from "./SmallNav";
import { useState } from "react";

export default function RenderNavBar() {
  const [active, setActive] = useState<Boolean>(false);
  return (
    <>
      <LargeNav />
      <SmallNav />
    </>
  );
}
