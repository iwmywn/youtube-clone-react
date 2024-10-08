import { menu, logo } from "../../data/icons";

export default function Left() {
  return (
    <section className="flex w-64 items-center">
      <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-secondary hover:bg-secondary/15">
        {menu.svg}
      </div>
      <div className="ml-4 flex h-full cursor-pointer items-center">
        {logo.svg}
      </div>
    </section>
  );
}
