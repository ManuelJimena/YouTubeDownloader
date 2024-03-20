import PropTypes from 'prop-types';
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

const App = ({ children }) => {
  return (
    <div className="main">
      <header>
        <Nav />
      </header>
      <div className="container">
        {children}
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default App;
