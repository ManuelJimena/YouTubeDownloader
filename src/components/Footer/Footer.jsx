import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="end"></div>
      <p className="manueljimena">
        ©{currentYear} Powered by ManuelJimena |
        <a className="github" href="https://github.com/ManuelJimena" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
