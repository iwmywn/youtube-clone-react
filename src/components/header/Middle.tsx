import { search, voice } from "../../data/icons";

export default function Middle() {
  return (
    <section className="text-secondary flex max-w-screen-sm flex-1 items-center">
      <div className="border-secondary/20 flex h-10 flex-1 items-center rounded-bl-full rounded-tl-full border pl-4 pr-1">
        <input
          type="text"
          className="text-secondary bg-primary w-0 flex-1 border-none p-0 text-base outline-none"
          placeholder="Search"
        />
      </div>
      <div className="border-secondary/20 bg-secondary/5 hover:bg-secondary/10 mr-3 flex h-10 w-16 cursor-pointer items-center justify-center rounded-br-full rounded-tr-full border-y border-r">
        {search.svg}
      </div>
      <div className="bg-secondary/5 hover:bg-secondary/15 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
        {voice.svg}
      </div>
    </section>
  );
}
