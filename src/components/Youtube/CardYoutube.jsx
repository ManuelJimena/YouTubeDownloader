import PropTypes from 'prop-types'; // Importa PropTypes

export const CardYouTube = (props) => {
  const { video } = props;
  
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
              <p key={index}>{v.qualityLabel}.mp4 <a target="_blank" rel="noopener noreferrer" className="btn btn_blue" download="videoconvertido.mp4" href={`${v.url}&title=${video.title}`}>Descargar</a></p>
            ))}
          </div>
          <p></p>
        </div>
      </div>
    </article>
  );
};

// Añade las PropTypes al final
CardYouTube.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    video: PropTypes.arrayOf(PropTypes.shape({
      qualityLabel: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};
