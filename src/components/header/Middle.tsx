import { search, voice } from "../../data/icons";

export default function Middle() {
  return (
    <section className="flex max-w-screen-sm flex-1 items-center text-secondary">
      <div className="flex h-10 flex-1 items-center rounded-bl-full rounded-tl-full border border-secondary/20 pl-4 pr-1">
        <input
          type="text"
          className="w-0 flex-1 border-none bg-primary p-0 text-base text-secondary outline-none"
          placeholder="Search"
        />
      </div>
      <div className="bg-accent/5 hover:bg-accent/10 mr-3 flex h-10 w-16 cursor-pointer items-center justify-center rounded-br-full rounded-tr-full border-y border-r border-secondary/20">
        {search.svg}
      </div>
      <div className="bg-accent/10 hover:bg-accent/20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
        {voice.svg}
      </div>
    </section>
  );
}
