import { home, shorts, subscriptions, yourVideos } from "../../data/icons";

export default function SmallNav() {
  const nav = [home, shorts, subscriptions, yourVideos];

  return (
    <nav
      id="nav"
      className="fixed bottom-0 left-0 top-14 z-10 hidden w-[72px] bg-primary px-1 py-[5px] tablet3:block destop:hidden"
    >
      {nav.map((item) => (
        <div className="flex h-[74px] w-full cursor-pointer flex-col items-center justify-center gap-[5px] rounded-lg text-[10px] hover:bg-accent/15">
          {item.svg} <span>{item.name}</span>
        </div>
      ))}
    </nav>
  );
}
