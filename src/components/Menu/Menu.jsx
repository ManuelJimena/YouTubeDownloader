import { useState } from "react";
import "./Menu.scss";
import YoutubeLink from "../Youtube/YoutubeLink";
import Icons from "../../Icons/Icons";

const Menu = () => {
  const [menu, setMenu] = useState("youtube");
  const changeMenu = (value) => {
    setMenu(value);
  };

  return (
    <div className="content_data">
      <div className="block_info">
        <div className="menu">
          <button
            className={`select_btn ${menu === "youtube" ? "active" : ""}`}
            onClick={() => changeMenu("youtube")}
          >
            <Icons.FilmIcon /> Video
          </button>
        </div>
        <div className="title">
          <h1>Descarga Contenido de Youtube Gratis</h1>
        </div>
        {menu === "youtube" && <YoutubeLink />}
      </div>
    </div>
  );
};

export default Menu;