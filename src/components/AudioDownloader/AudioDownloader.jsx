import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { YoutubeAudio } from "../../services/audio";
import { YoutubeVideo } from "../../services/video";
import youtubeUtils from "../../utils/Functions";
import CardVideo from "../VideoDownloader/CardVideo";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

const AudioDownloader = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [audioLink, setAudioLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchDetails = async () => {
      const id = youtubeUtils.GetYoutubeID(videoId);
      if (!id) {
        setError("Enlace no válido");
        setLoading(false);
        return;
      }

      const videoService = new YoutubeVideo();
      try {
        const videoData = await videoService.DownloadVideo(id);
        if (videoData && videoData.status === "OK") {
          setVideoDetails({
            id: id,
            title: videoData.title,
            thumbnail: videoData.thumbnail,
            video: [],
          });

          const audioService = new YoutubeAudio();
          const audioData = await audioService.DownloadAudio(id);
          if (audioData && audioData.link) {
            setAudioLink(audioData.link);
          } else {
            setError("No se pudo obtener el enlace de descarga del audio");
          }
        } else {
          setError("No se ha encontrado el video.");
        }
      } catch (e) {
        console.error(e);
        setError("Ocurrió un error inesperado al obtener los detalles del vídeo o del audio");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [videoId]);

  const handleDownloadAudio = () => {
    if (audioLink && videoDetails) {
      youtubeUtils.downloadaudio(audioLink, videoDetails.title);
    }
  };

  const closeError = () => {
    setError("");
  };

  if (loading) return <Spinner />;
  if (error) return <Error errortext={error} closeError={closeError} />;

  return (
    videoDetails && (
      <div>
        <CardVideo video={videoDetails} onDownload={handleDownloadAudio} />
      </div>
    )
  );
};

AudioDownloader.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default AudioDownloader;
