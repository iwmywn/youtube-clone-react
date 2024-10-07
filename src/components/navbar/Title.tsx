import { ReactNode } from "react";

interface Props {
  svg?: ReactNode;
  name: string;
}

export default function Title({ svg, name }: Props) {
  return (
    <div
      className={
        svg
          ? "flex h-10 cursor-pointer items-center gap-2 rounded-lg px-3 font-medium hover:bg-secondary/5"
          : "flex h-10 items-center gap-2 px-3 font-medium"
      }
      title={name}
    >
      <span className="text-base">{name}</span>
      {svg && svg}
    </div>
  );
}
