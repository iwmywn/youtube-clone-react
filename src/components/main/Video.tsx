import { more } from "../../data/icons";

interface Props {
  urlId: string;
  thumbnailSrc: string;
  avatarSrc: string;
  title: string;
  channelName: string;
  channelId: string;
  duration: string;
  views: string;
  date: string;
}

export default function Video({
  urlId,
  thumbnailSrc,
  avatarSrc,
  title,
  channelName,
  channelId,
  duration,
  views,
  date,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-[500px] cursor-pointer">
      <a
        href={"https://www.youtube.com/watch?v=" + urlId}
        target="_blank"
        className="relative block w-full overflow-hidden rounded-lg"
      >
        <img
          className="w-full object-cover"
          src={thumbnailSrc}
          alt="thumbnail"
        />
        <div className="pointer-events-none absolute bottom-2 right-2 rounded-[4px] bg-black/65 px-[5px] py-[2px] text-xs font-medium text-white">
          {duration}
        </div>
      </a>
      <div className="mt-3 flex w-full">
        <a
          href={"https://www.youtube.com/channel/" + channelId}
          target="_blank"
          className="mr-3 h-9 w-9 flex-shrink-0 overflow-hidden rounded-full"
        >
          <img className="object-cover" src={avatarSrc} alt="profile" />
        </a>
        <div className="flex flex-1 flex-col overflow-hidden">
          <a
            href={"https://www.youtube.com/watch?v=" + urlId}
            target="_blank"
            className="line-clamp-2 font-medium"
          >
            {title}
          </a>
          <div className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            <a
              href={"https://www.youtube.com/channel/" + channelId}
              className="text-accent"
            >
              {channelName}
            </a>
          </div>
          <div className="text-sm text-accent">
            <span>{views}</span>
            <span className="mx-1.5">•</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="mr-[-0.25rem] mt-[-0.5rem] flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
          {more.svg}
        </div>
      </div>
    </div>
  );
}
