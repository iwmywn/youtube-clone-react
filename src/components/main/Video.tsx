import { more } from "../../data/icons";

interface Props {
  urlId: string;
  thumbnailSrc: string;
  avatarSrc: string;
  title: string;
  channelName: string;
  channelId: string;
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
  views,
  date,
}: Props) {
  return (
    <div className="cursor-pointer">
      <a
        href={"https://www.youtube.com/watch?v=" + urlId}
        target="_blank"
        className="block overflow-hidden rounded-lg"
      >
        <img
          className="w-full object-cover"
          src={thumbnailSrc}
          alt="thumbnail"
        />
      </a>
      <div className="mt-3 flex w-full">
        <a
          href={"https://www.youtube.com/channel/" + channelId}
          target="_blank"
          className="mr-3 h-9 w-9 flex-shrink-0 overflow-hidden rounded-full"
        >
          <img className="object-cover" src={avatarSrc} alt="profile" />
        </a>
        <div className="flex flex-col">
          <a
            href={"https://www.youtube.com/watch?v=" + urlId}
            target="_blank"
            className="line-clamp-2 font-medium"
          >
            {title}
          </a>
          <div className="mt-1 text-sm">
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
