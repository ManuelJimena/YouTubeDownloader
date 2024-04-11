import './Briefing.scss';

const Briefing = () => {
  return (
    <div className="ftco-section why-section" id="why-section">
      <ul className="listitem items-more">
        <li>
          <div className="icon-holder">
              <i className="fa-solid fa-film"></i>
            <div className="arrow-holder"></div>
          </div>
          <div className="desc">
            <h5>
              <div className="why-title">
                <span className="step-count">1</span>Elegir contenido
              </div>
            </h5>
            <p>En la página de <b>YouTube</b> copia el enlace del <b>video</b> que quieres descargar.</p>
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
            <p>Espera a que se muestren las opciones y pulsa <b>Descargar</b> en la que prefieras.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Briefing;
