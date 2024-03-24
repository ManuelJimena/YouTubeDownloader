import { useState } from "react";
import Youtube from "../VideoDownloader/Youtube";

const YouTubeLink = () => {
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
          placeholder="https://www.youtube.com/watch?v=rSDoXnslLsg"
          className="input_url"
          onChange={handleChangeURL}
          value={link}
        />
        <button className="btn search_btn" onClick={getID}>
          <span></span>
          <span></span>
            Buscar
          <span></span>
          <span></span>
        </button>
      </form>
      {id.length > 0 && <Youtube link={id} />}
    </>
  );
};

export default YouTubeLink;
