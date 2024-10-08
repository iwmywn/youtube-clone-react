import Video from "./Video";
import videos from "../../data/videos";

interface Props {
  theme: string;
}

export default function GridVideos({ theme }: Props) {
  let videosFilter = [...videos];

  if (theme !== "All")
    videosFilter = videosFilter.filter((video) => video.theme === theme);

  for (let i = 0; i < videosFilter.length; i++) {
    const j = Math.floor(Math.random() * i);
    [videosFilter[i], videosFilter[j]] = [videosFilter[j], videosFilter[i]];
  }

  const videoList = videosFilter.map((video) => (
    <Video
      key={video.id}
      urlId={video.urlId}
      thumbnailSrc={video.thumbnail}
      avatarSrc={video.Avatar}
      title={video.title}
      channelName={video.channelName}
      channelId={video.channelId}
      duration={video.duration}
      views={video.stats.views}
      date={video.stats.postDay}
    />
  ));

  return (
    <div
      id="content"
      className="tablet2:grid-cols-2 laptop:grid-cols-3 destop2:grid-cols-4 ml-6 mr-4 grid grid-cols-1 gap-x-4 gap-y-10 pt-6"
    >
      {videoList}
    </div>
  );
}
