import { useState } from "react";
import theme from "../../data/headerData";

export default function Header() {
  const [indexd, setIndex] = useState(0);
  const listItems = theme.map((item, index) => (
    <a
      href="#"
      className={
        index === indexd
          ? "flex h-8 cursor-pointer items-center whitespace-nowrap rounded-lg bg-black px-3 text-white"
          : "flex h-8 cursor-pointer items-center whitespace-nowrap rounded-lg bg-black/5 px-3"
      }
      key={item.id}
      onClick={() => setIndex(index)}
    >
      {item.name}
    </a>
  ));

  return (
    <header className="flex h-14 flex-nowrap items-center gap-x-3 px-6 text-sm">
      {listItems}
    </header>
  );
}
