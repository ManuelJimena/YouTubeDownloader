import youtube from "../../assets/youtube.webp";
import "./Info.scss";

const Info = () => {
  return (
    <div className="info_section">
      <div className="info">
        <figure>
          <img src={youtube} alt="Descargar videos de Youtube gratis"/>
        </figure>
        <div className="text_info">
          <h3>Características de YouTubeDownloader</h3>
          <b>YouTubeDownloader</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
};

export default Info;
