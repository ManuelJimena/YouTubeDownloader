import { useEffect, useState, useRef } from "react";
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
  const [video, setVideo] = useState();
  const [audio, setAudio] = useState();
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [error, setError] = useState("");
  const intervalRef = useRef(null);

  useEffect(() => {
    const clearIntervalRef = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    (async () => {
      setError("");
      setIsVideoLoading(true);
      const id = youtubeUtils.GetYoutubeID(link);
      if (!id || !youtubeUtils.VerifyYoutubeLink(link)) {
        setError("Enlace no válido");
        setIsVideoLoading(false);
        return;
      }

      const YoutubeController = new YoutubeClass();
      try {
        const videoResponse = await YoutubeController.DownloadVideo(id);
        if (videoResponse.status === "OK") {
          const videoResult = MapYoutube(videoResponse);
          setVideo(videoResult);
        } else {
          setError("No se ha encontrado el video");
        }
      } catch (videoError) {
        console.error("Error al obtener el video:", videoError);
        setError("Error al obtener el video");
      } finally {
        setIsVideoLoading(false);
      }

      setIsAudioLoading(true);
      const AudioController = new YoutubeAudio();
      try {
        const audioResponse = await AudioController.DownloadAudio(id);
        if (audioResponse.status === "ok") {
          setAudio(audioResponse);
          setIsAudioLoading(false);
        } else {
          intervalRef.current = setInterval(async () => {
            try {
              const newAudioResponse = await AudioController.DownloadAudio(id);
              if (newAudioResponse.status === "ok") {
                setAudio(newAudioResponse);
                setIsAudioLoading(false);
                clearIntervalRef();
              }
            } catch (intervalError) {
              console.error("Error durante la verificación del audio:", intervalError);
            }
          }, 6000);
        }
      } catch (audioError) {
        console.error("Error inicial al obtener el audio:", audioError);
      }
    })();

    return () => clearIntervalRef();
  }, [link]);

  const closeError = () => setError("");

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
