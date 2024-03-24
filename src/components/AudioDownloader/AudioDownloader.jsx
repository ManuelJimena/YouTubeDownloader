import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { YoutubeAudio } from "../../services/audio";
import youtubeUtils from "../../utils/Functions";

const AudioDownloader = ({ videoId }) => {
  const [audioDetails, setAudioDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAudioDetails = async () => {
      setLoading(true);
      const id = youtubeUtils.GetYoutubeID(videoId);
      if (!id) {
        setError("ID de vídeo no válido");
        setLoading(false);
        return;
      }

      const audioService = new YoutubeAudio();
      try {
        const data = await audioService.DownloadAudio(id);
        if (data && data.link) {
          setAudioDetails({ link: data.link, title: data.title });
        } else {
          throw new Error("No se pudo obtener la información del audio");
        }
      } catch (error) {
        console.error("Error al obtener la información del audio:", error);
        setError("Error al obtener la información del audio");
      } finally {
        setLoading(false);
      }
    };

    if (videoId) {
      fetchAudioDetails();
    }
  }, [videoId]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleDownload = () => {
    if (audioDetails) {
      youtubeUtils.downloadaudio(audioDetails.link, audioDetails.title);
    }
  };

  return (
    audioDetails && (
      <div>
        <h3>{audioDetails.title}</h3>
        <button onClick={handleDownload}>Descargar Audio</button>
      </div>
    )
  );
};

AudioDownloader.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default AudioDownloader;
