import Video from "./Video";
import videos from "../../data/videos";

interface Props {
  theme: string;
}

export default function GridVideos({ theme = "All" }: Props) {
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
      avatarSrc={video.profileAvatar}
      title={video.title}
      channelName={video.channelName}
      channelId={video.channelId}
      views={video.stats.views}
      date={video.stats.postDay}
    />
  ));

  return (
    <div id="content" className="ml-6 mr-4 grid grid-cols-4 gap-x-4 gap-y-10">
      {videoList}
    </div>
  );
}
