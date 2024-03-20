import { useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Importa PropTypes
import { Youtube as YoutubeClass } from "../../services/youtube";
import { CardYoutube } from "./CardYoutube";
import "./Youtube.scss";
import { Loader } from "../Loader/Loader";
import { MapYoutube } from "../../utils/MapFetchs";
import { GetYoutubeID, VerifyYoutubeLink } from "../../utils/Functions";
import { Error } from "../Error/Error";

export const Youtube = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { link } = props;
  const [video, setVideo] = useState();
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {    
        setError("")    
        setIsLoading(true);
        const id = GetYoutubeID(link);
        if (id && VerifyYoutubeLink(link))  {
          const YoutubeController = new YoutubeClass();
          const response = await YoutubeController.DownloadVideo(id); 
          if (response.status === "OK") {
            const result = MapYoutube(response);
            setVideo(result); 
          }else{
            setError("El video no se puede encontrar")
          }
        }else{
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

  if (isLoading) return <Loader />;
  return (
    <>
      {error.length > 0 && <Error errortext={error} closeError={closeError} />}
      {video ? <CardYoutube video={video} /> : ""}
    </>
  );
};

// Añade las PropTypes al final
Youtube.propTypes = {
  link: PropTypes.string.isRequired,
};
