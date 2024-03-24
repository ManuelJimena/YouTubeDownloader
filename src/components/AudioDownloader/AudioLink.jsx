import { useState } from "react";
import AudioDownloader from "./AudioDownloader";

const AudioLink = () => {
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
      <form className="form_url" onSubmit={getID}>
        <input
          type="url"
          placeholder="https://www.youtube.com/watch?v=rSDoXnslLsg"
          className="input_url"
          onChange={handleChangeURL}
          value={link}
        />
        <button className="btn search_btn" type="submit">
          Buscar
        </button>
      </form>
      {id && <AudioDownloader videoId={id} />}
    </>
  );
};

export default AudioLink;
