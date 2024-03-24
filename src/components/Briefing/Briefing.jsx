import './Briefing.scss';

const Briefing = () => {
  return (
    <div className="ftco-section why-section" id="why-section">
      <ul className="listitem items-more">
        <li>
          <div className="icon-holder">
              <i className="fa-solid fa-box-archive"></i>
            <div className="arrow-holder"></div>
          </div>
          <div className="desc">
            <h5>
              <div className="why-title">
                <span className="step-count">1</span>Seleccionar contenido
              </div>
            </h5>
            <p>Seleccione que tipo de archivo quiere descargar: <b>Video</b> o <b>Audio</b>.</p>
          </div>
        </li>
        <li>
          <div className="icon-holder">
            <i className="fa-regular fa-paste"></i>
            <div className="arrow-holder"></div>
          </div>
          <div className="desc">
            <h5>
              <div className="why-title">
                <span className="step-count">2</span>Pegar enlace
              </div>
            </h5>
            <p>Pega el <b>enlace de YouTube</b> en el cuadro de búsqueda y pulsa el botón <b>Buscar</b>.</p>
          </div>
        </li>
        <li>
          <div className="icon-holder">
            <i className="fa-solid fa-download"></i>
          </div>
          <div className="desc">
            <h5>
              <div className="why-title">
                <span className="step-count">3</span>Descargar archivo
              </div>
            </h5>
            <p>Espere a que se complete la conversión y pulse en <b>Descargar</b> para descargar el archivo en su dispositivo.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Briefing;
