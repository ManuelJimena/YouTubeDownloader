import PropTypes from 'prop-types';

const CardVideo = ({ video, audioLink }) => {
  const downloadAudio = () => {
    if (!audioLink) {
      console.error("No hay enlace de descarga de audio disponible.");
      return;
    }

    const link = document.createElement("a");
    link.href = audioLink;
    link.download = `${video.title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <article className="youtube_card">
      <div className="content">
        <figure className="img_figure">
          <img src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} alt={video.title} />
        </figure>
        <div className="content_info">
          <h3>{video.title}</h3>
          <div className="download_button">
            {video.video && video.video.map((v, index) => (
              <p key={index}>
                {v.qualityLabel}.mp4 <a target="_blank" rel="noopener noreferrer" className="btn download_btn" download={`${video.title}.mp4`} href={`${v.url}&title=${video.title}`}>Descargar Video</a>
              </p>
            ))}
            <button onClick={downloadAudio} className="btn download_btn">Descargar Audio</button>
          </div>
        </div>
      </div>
    </article>
  );
};

CardVideo.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    video: PropTypes.arrayOf(PropTypes.shape({
      qualityLabel: PropTypes.string,
      url: PropTypes.string,
    })),
  }).isRequired,
  audioLink: PropTypes.string,
};

export default CardVideo;
