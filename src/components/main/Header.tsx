import { useState } from "react";
import theme from "../../data/headerData";

interface Props {
  setSelectedTheme: (theme: string) => void;
}

export default function Header({ setSelectedTheme }: Props) {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (name: string, index: number) => {
    setIndex(index);
    setSelectedTheme(name);
  };

  const listItems = theme.map((item, i) => (
    <div
      className={
        i === index
          ? "flex h-8 cursor-pointer items-center whitespace-nowrap rounded-lg bg-black px-3 font-medium text-white"
          : "flex h-8 cursor-pointer items-center whitespace-nowrap rounded-lg bg-black/5 px-3 font-medium"
      }
      key={item.id}
      onClick={() => handleClick(item.name, i)}
    >
      {item.name}
    </div>
  ));

  return (
    <>
      <header className="flex h-14 flex-nowrap items-center gap-x-3 px-6 text-sm">
        {listItems}
      </header>
    </>
  );
}
