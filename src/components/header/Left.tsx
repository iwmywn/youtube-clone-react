import { menu, logo } from "../../data/icons";

interface NavProps {
  toggleNav: () => void;
}

export default function Left({ toggleNav }: NavProps) {
  return (
    <section className="flex w-auto items-center tablet:w-60">
      <div
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-secondary hover:bg-secondary/10 dark:hover:bg-secondary/15"
        onClick={toggleNav}
      >
        {menu.svg}
      </div>
      <a href="/" className="ml-4 flex h-full cursor-pointer items-center">
        {logo.svg}
      </a>
    </section>
  );
}
