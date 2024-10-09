import { ReactNode } from "react";

interface Props {
  svg?: ReactNode;
  name: string;
}

export default function Title({ svg, name }: Props) {
  return (
    <div
      className={`flex h-10 items-center gap-2 px-3 font-medium ${svg && "cursor-pointer rounded-lg hover:bg-accent/15"} `}
      title={name}
    >
      <span className="text-base">{name}</span>
      {svg && svg}
    </div>
  );
}
