import { create, notifications } from "../../data/icons";

export default function Right() {
  return (
    <section className="flex w-60 items-center justify-end gap-3">
      <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-secondary/15">
        {create.svg}
      </div>
      <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-secondary/15">
        {notifications.svg}
      </div>
      <div className="flex w-16 justify-center">
        <img
          className="h-8 w-8 cursor-pointer rounded-full"
          src="/src/assets/profile.jpg"
          alt="profile"
        />
      </div>
    </section>
  );
}
