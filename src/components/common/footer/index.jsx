import "./styles.scss";
import Logo from "../../../assets/images/pokedex_logo_footer.webp";

const Footer = () => {
  return (
    <footer className="pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 mb-3 mb-lg-0">
            <img src={Logo} alt="pokedex" height={50} />
            <p className="mt-3 mb-0">This is another Pokedex web app. The idea was to practice and learn more about React. If you like it, please leave me a star on <a href="https://github.com/luchoweb/pokedex" className="link" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
            2
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
            3
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;