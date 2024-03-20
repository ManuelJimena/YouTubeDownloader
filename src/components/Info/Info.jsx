import youtube from "../../assets/youtube.webp";
import "./Info.scss";

export const Info = () => {
  return (
    <div className="info_section">
      <h2>Características de DescargaVideos</h2>
      <p>Descarga videos de Youtube</p>
      <div className="info">
        <figure>
          <img src={youtube} alt="Descargar videos de Youtube gratis"/>
        </figure>
        <div className="text_info">
          <h3>Descarga Videos de Youtube</h3>
          <b>DescargaVideos</b> te ofrece una solución fácil y gratuita para
          descargar videos de YouTube. Con una interfaz intuitiva y amigable,
          podrás acceder a tus videos favoritos sin conexión en cuestión de
          segundos.
        </div>
      </div>
    </div>
  );
};