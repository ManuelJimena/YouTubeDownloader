import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { YoutubeVideo as YoutubeClass } from "../../services/video";
import CardVideo from "./CardVideo";
import "./Youtube.scss";
import Spinner  from "../Spinner/Spinner";
import MapYoutube from "../../utils/MapFetchs";
import youtubeUtils from "../../utils/Functions";
import Error from "../Error/Error";

const Youtube = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { link } = props;
  const [video, setVideo] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {    
        setError("");    
        setIsLoading(true);
        const id = youtubeUtils.GetYoutubeID(link);
        if (id && youtubeUtils.VerifyVideoLink(link)) {
          const YoutubeController = new YoutubeClass();
          const response = await YoutubeController.DownloadVideo(id); 
          if (response.status === "OK") {
            const result = MapYoutube(response);
            setVideo(result); 
          } else {
            setError("No se ha encontrado el video");
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
      {video ? <CardVideo video={video} /> : ""}
    </>
  );
};

Youtube.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Youtube;
