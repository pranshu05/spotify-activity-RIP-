import { Music } from "../components/Music";
import { SpotifyPlayer } from "../components/Spotify";

export const MusicPage = () => {
  return (
    <div>
      <div className="music-page-cont">
        <SpotifyPlayer />
        <Music />
      </div>
    </div>
  );
};
