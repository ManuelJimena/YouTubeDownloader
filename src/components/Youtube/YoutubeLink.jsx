import { useState } from "react";
import { YoutubeIcon } from "../../Icons/Icons";
import Youtube from "./Youtube";

const YoutubeLink = () => {
  const [link, setLink] = useState("");
  const [id, setId] = useState("");

  const handleChangeURL = (e) => {
    setLink(e.target.value);
  };

  const getID = (e) => {
    e.preventDefault();
    setId(link);
    setLink("");
  };

  return (
    <>
      <form className="form_url">
        <input
          type="url"
          placeholder="https://www.youtube.com/watch?v=Fn0jK0oZy80"
          className="input_url"
          onChange={handleChangeURL}
          value={link}
        />
        <button className="btn btn_green" onClick={getID}>
          <YoutubeIcon /> Descargar
        </button>
      </form>
      {id.length > 0 && <Youtube link={id} />}
    </>
  );
};

export default YoutubeLink;
