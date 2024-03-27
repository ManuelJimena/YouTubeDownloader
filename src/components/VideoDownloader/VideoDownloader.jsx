import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { YoutubeVideo as YoutubeClass } from "../../services/video";
import { YoutubeAudio as YoutubeAudioClass } from "../../services/audio";
import CardVideo from "./CardVideo";
import "./VideoDownloader.scss";
import Spinner from "../Spinner/Spinner";
import MapYoutube from "../../utils/MapFetchs";
import youtubeUtils from "../../utils/Functions";
import Error from "../Error/Error";

const VideoDownloader = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { link } = props;
  const [video, setVideo] = useState();
  const [audioLink, setAudioLink] = useState("");
  const [error, setError] = useState("");

  const fetchAudioLink = async (id, duration, retryCount = 0) => {
    const AudioController = new YoutubeAudioClass();
    const responseAudio = await AudioController.DownloadAudio(id);

    console.log("Respuesta del audio:", responseAudio);
    const maxRetries = duration > 300 ? 10 : 3;
    const retryInterval = duration > 300 ? 10000 : 3000;

    if (responseAudio.status === 'processing' && retryCount < maxRetries) {
      setTimeout(() => fetchAudioLink(id, duration, retryCount + 1), retryInterval);
    } else if (responseAudio.link) {
      setAudioLink(responseAudio.link);
    } else {
      console.error("No se pudo obtener el enlace de descarga del audio después de varios intentos.");
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setError("");
        setIsLoading(true);
        const id = youtubeUtils.GetYoutubeID(link);
        if (id && youtubeUtils.VerifyVideoLink(link)) {
          const YoutubeController = new YoutubeClass();
          const responseVideo = await YoutubeController.DownloadVideo(id);

          console.log("Respuesta del video:", responseVideo);

          if (responseVideo.status === "OK") {
            const resultVideo = MapYoutube(responseVideo);
            setVideo(resultVideo);
            await fetchAudioLink(id, responseVideo.lengthSeconds);
          } else {
            setError("No se ha encontrado el video o el video no se puede descargar.");
          }
        } else {
          setError("Enlace no válido");
        }
      } catch (error) {
        console.error("Error al cargar el video o el audio:", error);
        setError(error.message || "Error al procesar la descarga.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [link]);

  const closeError = () => {
    setError("");
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      {error.length > 0 && <Error errortext={error} closeError={closeError} />}
      {video && <CardVideo video={video} audioLink={audioLink} />}
    </>
  );
};

VideoDownloader.propTypes = {
  link: PropTypes.string.isRequired,
};

export default VideoDownloader;
