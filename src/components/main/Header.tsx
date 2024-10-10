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
      className={`flex h-8 cursor-pointer items-center whitespace-nowrap rounded-lg px-3 font-medium ${i === index ? "bg-secondary text-primary" : "bg-secondary/5 transition-all duration-300 hover:bg-secondary/10 dark:bg-secondary/15 dark:hover:bg-secondary/25"} `}
      key={item.id}
      onClick={() => handleClick(item.name, i)}
    >
      {item.name}
    </div>
  ));

  return (
    <>
      <header className="fixed top-14 z-10 flex h-14 w-full flex-nowrap items-center gap-x-3 bg-primary px-6 text-sm">
        {listItems}
      </header>
    </>
  );
}
