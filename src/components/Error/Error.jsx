import PropTypes from 'prop-types';
import "./Error.scss";

const Error = ({ errortext, closeError }) => {
  return (
    <div className="error_container">
      <div className="error" onClick={closeError}>
        <div className="error__icon">
          <i className="fa-solid fa-circle-exclamation"></i>
        </div>
        <div className="error__title">{errortext}</div>
        <div className="error__close">
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
};

Error.propTypes = {
  errortext: PropTypes.string.isRequired,
  closeError: PropTypes.func.isRequired,
};

export default Error;
