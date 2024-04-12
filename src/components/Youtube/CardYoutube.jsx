import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';

const CardYoutube = ({ video, audio, isAudioLoading }) => {
  return (
    <article className="youtube_card">
      <div className="content">
        <figure className="img_figure">
          <img src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} alt={video.title} />
        </figure>
        <div className="content_info">
          <h3>{video.title}</h3>
          <div className="download_button">
            {video.video.map((v, index) => (
              <p key={index}>
                Video.mp4 <a target="_blank" rel="noopener noreferrer" className="btn download_btn" download="videoconvertido.mp4" href={`${v.url}&title=${video.title}`}>Descargar</a>
              </p>
            ))}
          </div>
          {isAudioLoading ? (
            <div className="audio_loading">
              <Spinner /> Procesando audio...
            </div>
          ) : audio ? (
            <div className="download_button">
              <p>
                Audio.mp3 <a target="_blank" rel="noopener noreferrer" className="btn download_btn" download="audioconvertido.mp3" href={audio.link}>Descargar</a>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
};

CardYoutube.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    video: PropTypes.arrayOf(PropTypes.shape({
      qualityLabel: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  audio: PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
    filesize: PropTypes.number,
    duration: PropTypes.number,
    status: PropTypes.string,
    msg: PropTypes.string,
  }),
  isAudioLoading: PropTypes.bool.isRequired,
};

export default CardYoutube;
