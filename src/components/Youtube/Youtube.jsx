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

const Youtube = ({ link }) => {
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [video, setVideo] = useState();
  const [audio, setAudio] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      setError("");
      const id = youtubeUtils.GetYoutubeID(link);
      if (!id || !youtubeUtils.VerifyYoutubeLink(link)) {
        setError("Enlace no válido");
        return;
      }

      setIsVideoLoading(true);
      setIsAudioLoading(true);
      const YoutubeController = new YoutubeClass();
      const AudioController = new YoutubeAudio();
      try {
        const videoResponse = await YoutubeController.DownloadVideo(id);
        if (videoResponse.status === "OK") {
          const videoResult = MapYoutube(videoResponse);
          setVideo(videoResult);
        } else {
          setError("No se ha encontrado el video");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsVideoLoading(false);
      }

      try {
        const audioResponse = await AudioController.DownloadAudio(id);
        if (audioResponse.status === "ok") {
          setAudio(audioResponse);
        } else {
          console.error("Error al obtener el audio");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsAudioLoading(false);
      }
    })();
  }, [link]);

  const closeError = () => {
    setError("");
  };

  if (isVideoLoading) return <Spinner />;

  return (
    <>
      {error && <Error errortext={error} closeError={closeError} />}
      {video && (
        <CardYoutube
          video={video}
          audio={audio}
          isAudioLoading={isAudioLoading} 
        />
      )}
    </>
  );
};

Youtube.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Youtube;
