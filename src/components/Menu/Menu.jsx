import PropTypes from 'prop-types';
import "./Menu.scss";
import YoutubeLink from "../Youtube/YoutubeLink";

const MenuButton = ({ onClick }) => (
  <button
    className={`select_btn`}
    onClick={onClick}
    aria-label={`Descargar`}
    type="button"
  >
    <i className="fab fa-youtube"></i> YouTube
  </button>
);

const Menu = () => {
  const openYouTubePage = () => {
    window.open('https://www.youtube.com', '_blank');
  };

  return (
    <div className="content_data">
      <div className="block_info">
        <div className="menu">
          <MenuButton onClick={openYouTubePage} />
        </div>
        <div className="title">
          <h1>Descarga Contenido de YouTube Gratis</h1>
        </div>
        <YoutubeLink />
      </div>
    </div>
  );
};

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Menu;
