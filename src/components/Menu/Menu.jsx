import { useState } from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';
import VideoLink from '../VideoDownloader/VideoLink';
import AudioLink from '../AudioDownloader/AudioLink';
import Icons from '../../Icons/Icons';

const MENU_TYPES = {
  VIDEO: 'video',
  AUDIO: 'audio',
};

const MenuButton = ({ type, isActive, changeMenu }) => (
  <button
    className={`select_btn ${isActive ? 'active' : ''}`}
    onClick={() => changeMenu(type)}
    aria-label={`Descargar ${type}`}
  >
    {type === MENU_TYPES.VIDEO ? <Icons.FilmIcon /> : <Icons.AudioIcon />} {type.charAt(0).toUpperCase() + type.slice(1)}
  </button>
);

MenuButton.propTypes = {
  type: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  changeMenu: PropTypes.func.isRequired,
};

const Menu = () => {
  const [menu, setMenu] = useState(MENU_TYPES.VIDEO);

  return (
    <div className="content_data">
      <div className="block_info">
        <div className="menu">
          <MenuButton type={MENU_TYPES.VIDEO} isActive={menu === MENU_TYPES.VIDEO} changeMenu={setMenu} />
          <MenuButton type={MENU_TYPES.AUDIO} isActive={menu === MENU_TYPES.AUDIO} changeMenu={setMenu} />
        </div>
        <div className="title">
          <h1>Descarga Contenido de YouTube Gratis</h1>
        </div>
        {menu === MENU_TYPES.VIDEO && <VideoLink />}
        {menu === MENU_TYPES.AUDIO && <AudioLink />}
      </div>
    </div>
  );
};

export default Menu;
