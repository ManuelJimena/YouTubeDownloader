import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="end"></div>
      <div className="manueljimena">
        ©{currentYear} Powered by ManuelJimena
        <a className="github" href="https://github.com/ManuelJimena" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
