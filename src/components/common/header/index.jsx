import "./styles.scss";
import Logo from "../../../assets/images/pokedex_logo.webp";

const Header = () => {
  return (
    <header className="pt-2 pb-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img src={Logo} alt="Pokedex" height={70} width={194} />
          </div>
          <div className="col-12 col-md-6">
            <ul className="menu list-unstyled m-0 p-0 d-flex align-items-center justify-content-end gap-4">
              <li className="menu-item">
                <a href="/" className="menu-link">Home</a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">About</a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">Legal</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;