import { Link } from "react-router-dom";

import "./styles.scss";
import Logo from "../../../assets/images/pokedex_logo.webp";
import Menu from "./menu";

const Header = () => {
  const menuItems = [
    {
      link: '/',
      label: 'Home'
    },
    {
      link: '/about',
      label: 'About'
    },
    {
      link: '/legal',
      label: 'Legal'
    }
  ];

  return (
    <header className="pt-2 pb-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 mb-3 mb-md-0 col-md-6">
            <Link to="/" className="d-block text-center text-md-start">
              <img src={Logo} alt="Pokedex" height={70} width={194} />
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <Menu items={menuItems} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;