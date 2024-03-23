import PropTypes from 'prop-types';
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Info from "./components/Info/Info";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div className="main">
      <header>
        <Nav />
      </header>
      <Menu />
      <Info />
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
