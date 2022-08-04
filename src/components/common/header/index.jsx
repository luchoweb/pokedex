import { Link } from "react-router-dom";

import "./styles.scss";
import Logo from "../../../assets/images/pokedex_logo.webp";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="pt-4 pb-4 pt-md-2 pb-md-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 mb-4 mb-md-0 col-md-6">
            <Link to="/" className="d-block d-md-inline text-center text-md-start">
              <img src={Logo} alt="Pokedex" height={70} width={194} />
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;