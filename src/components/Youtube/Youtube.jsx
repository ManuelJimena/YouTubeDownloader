import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { YoutubeVideo as YoutubeClass } from "../../services/video";
import { YoutubeAudio } from "../../services/audio";
import CardYoutube from "./CardYoutube";
import "./Youtube.scss";
import Spinner  from "../Spinner/Spinner";
import MapYoutube from "../../utils/MapFetchs";
import youtubeUtils from "../../utils/Functions";
import Error from "../Error/Error";

const Youtube = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { link } = props;
  const [video, setVideo] = useState();
  const [audio, setAudio] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {    
        setError("");    
        setIsLoading(true);
        const id = youtubeUtils.GetYoutubeID(link);
        if (id && youtubeUtils.VerifyYoutubeLink(link)) {
          const YoutubeController = new YoutubeClass();
          const AudioController = new YoutubeAudio();
          const videoPromise = YoutubeController.DownloadVideo(id);
          const audioPromise = AudioController.DownloadAudio(id);
          const [videoResponse, audioResponse] = await Promise.all([videoPromise, audioPromise]); // 

          if (videoResponse.status === "OK") {
            const videoResult = MapYoutube(videoResponse);
            setVideo(videoResult); 
          } else {
            setError("No se ha encontrado el video");
          }
          if (audioResponse.status === "ok") {
            setAudio(audioResponse); 
          } else {
            setError("Error al obtener el audio");
          }
        } else {
          setError("Enlace no válido");
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
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
      {video && <CardYoutube video={video} audio={audio} />}
    </>
  );
};

Youtube.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Youtube;
