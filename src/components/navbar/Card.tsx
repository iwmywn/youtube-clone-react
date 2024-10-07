import { ReactNode } from "react";

interface Props {
  svg?: ReactNode;
  name: string;
  active?: boolean;
  imageUrl?: string;
  type?: string;
}

export default function Card({ svg, name, active, imageUrl, type }: Props) {
  return (
    <a
      href="#"
      className="flex h-10 cursor-pointer items-center gap-6 rounded-lg px-3 hover:bg-secondary/5"
      title={name}
    >
      {svg && svg}
      {imageUrl && (
        <img
          className="h-6 w-6 rounded-3xl"
          src={"/src/assets/" + imageUrl + "." + type}
          alt="name"
        />
      )}
      <span className={active ? "font-medium" : ""}>{name}</span>
    </a>
  );
}
