import { useState } from "react";
import "./Menu.scss";
import { YoutubeLink } from "../Youtube/YoutubeLink";
import { YoutubeIcon } from "../../Icons/Icons";

export const Menu = () => {
  const [menu, setMenu] = useState("youtube");
  const changeMenu = (value) => {
    setMenu(value);
  };

  return (
    <div className="content_data">
      <div className="block_info">
        <div className="menu">
          <button
            className={`btn_transparent ${menu === "youtube" ? "active" : ""}`}
            onClick={() => changeMenu("youtube")}
          >
            <YoutubeIcon /> Youtube
          </button>
        </div>
        <div className="title">
          <h1>Descarga Videos Gratis</h1>
          <h2>Descarga videos de Youtube</h2>
        </div>
        {menu === "youtube" && <YoutubeLink />}
      </div>
    </div>
  );
};
