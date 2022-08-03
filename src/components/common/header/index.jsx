import { Link } from "react-router-dom";

import "./styles.scss";
import Logo from "../../../assets/images/pokedex_logo.webp";

const Header = () => {
  return (
    <header className="pt-2 pb-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <Link to="/">
              <img src={Logo} alt="Pokedex" height={70} width={194} />
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <ul className="menu list-unstyled m-0 p-0 d-flex align-items-center justify-content-end gap-4">
              <li className="menu-item">
                <Link to="/" className="menu-link">Home</Link>
              </li>
              <li className="menu-item">
                <Link to="/about" className="menu-link">About</Link>
              </li>
              <li className="menu-item">
                <Link to="/legal" className="menu-link">Legal</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;