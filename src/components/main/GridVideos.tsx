import Video from "./Video";
import videos from "../../data/videos";

export default function GridVideos() {
  const videoList = videos.map((video) => (
    <Video
      key={video.id}
      thumbnailSrc={video.thumbnail}
      avatarSrc={video.profileAvatar}
      title={video.title}
      channelName={video.channelName}
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
