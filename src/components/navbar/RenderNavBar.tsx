import Card from "./Card";
import Title from "./Title";
import Footer from "./Footer";
import * as icons from "../../data/icons";

export default function RenderNavBar() {
  return (
    <nav
      id="nav"
      className="fixed bottom-0 left-0 top-14 z-10 hidden w-60 overflow-x-hidden overflow-y-scroll bg-primary text-sm"
    >
      <section className="border-b border-secondary/20 p-3">
        <Card svg={icons.home.svg} name={icons.home.name} active />
        <Card svg={icons.shorts.svg} name={icons.shorts.name} />
        <Card svg={icons.subscriptions.svg} name={icons.subscriptions.name} />
        <div className="mt-3 border-t border-secondary/20 pt-3">
          <Title svg={icons.arrow.svg} name="You" />
          <Card svg={icons.channel.svg} name={icons.channel.name} />
          <Card svg={icons.history.svg} name={icons.history.name} />
          <Card svg={icons.playlists.svg} name={icons.playlists.name} />
          <Card svg={icons.yourVideos.svg} name={icons.yourVideos.name} />
          <Card svg={icons.yourPodcasts.svg} name={icons.yourPodcasts.name} />
          <Card svg={icons.watchLater.svg} name={icons.watchLater.name} />
          <Card svg={icons.liked.svg} name={icons.liked.name} />
        </div>
      </section>
      <section className="border-b border-secondary/20 p-3">
        <Title name="Subscriptions" />
        <Card imageUrl="englishspeeches" name="English Speeches" type="jpg" />
        <Card imageUrl="kaicenat" name="Kai Cenat" type="jpg" />
        <Card imageUrl="mrbeast" name="Mr Beast" type="jpg" />
        <Card imageUrl="aprilhan" name="April Han" type="jpg" />
        <Card imageUrl="mrnigelng" name="mrnigelng" type="jpg" />
        <Card imageUrl="7clouds" name="7clouds" type="jpg" />
        <Card imageUrl="jakpiggott" name="Jak Piggott" type="jpg" />
        <Card svg={icons.arrowDown.svg} name={icons.arrowDown.name} />
      </section>
      <section className="border-b border-secondary/20 p-3">
        <Title name="Explore" />
        <Card svg={icons.trending.svg} name={icons.trending.name} />
        <Card svg={icons.music.svg} name={icons.music.name} />
        <Card svg={icons.gaming.svg} name={icons.gaming.name} />
        <Card svg={icons.news.svg} name={icons.news.name} />
        <Card svg={icons.sports.svg} name={icons.sports.name} />
        <Card svg={icons.learning.svg} name={icons.learning.name} />
        <Card svg={icons.fashionbeauty.svg} name={icons.fashionbeauty.name} />
      </section>
      <section className="border-b border-secondary/20 p-3">
        <Title name="More from Youtube" />
        <Card svg={icons.ytbpremium.svg} name={icons.ytbpremium.name} />
        <Card svg={icons.ytbstudio.svg} name={icons.ytbstudio.name} />
        <Card svg={icons.ytbmusic.svg} name={icons.ytbmusic.name} />
        <Card svg={icons.ytbkids.svg} name={icons.ytbkids.name} />
      </section>
      <section className="border-b border-secondary/20 p-3">
        <Card svg={icons.settings.svg} name={icons.settings.name} />
        <Card svg={icons.reportHistory.svg} name={icons.reportHistory.name} />
        <Card svg={icons.help.svg} name={icons.help.name} />
        <Card svg={icons.sendFeedback.svg} name={icons.sendFeedback.name} />
      </section>
      <Footer />
    </nav>
  );
}
