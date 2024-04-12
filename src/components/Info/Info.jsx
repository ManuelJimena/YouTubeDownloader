import youtube from "../../assets/youtube.webp";
import Briefing from "../Briefing/Briefing";
import "./Info.scss";

const Info = () => {
  return (
    <>
    <Briefing />
    <div className="info_section">
      <div className="info">
        <figure>
          <img src={youtube} alt="Descargar videos de Youtube gratis"/>
        </figure>
        <div className="text_info">
          <h3>Características de YouTubeDownloader</h3>
            <p><b>YouTubeDownloader</b> permite descargar <b>vídeos</b> en formato <b>.mp4</b> y extraer <b>audio</b> en formato <b>.mp3</b>. Las APIs que utiliza son gratuitas, por tanto la calidad máxima de los vídeos está limitada a <b>720p</b> y tiene un <b>número limitado de descargas diarias</b>, que se restablecen automáticamente al día siguiente.</p>
            <p>La conversión de vídeo a formato .mp3 puede requerir un tiempo considerable, especialmente cuando se trata de vídeos más largos. Esta espera se justifica por la transformación necesaria para extraer audio de calidad a partir del vídeo.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Info;
