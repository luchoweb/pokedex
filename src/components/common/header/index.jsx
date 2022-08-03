import "./styles.scss";
import Logo from "../../../assets/images/pokedex_logo.webp";

const Header = () => {
  return (
    <header className="pt-2 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={Logo} alt="Pokedex" height={70} width={194} />
          </div>
          <div className="col-12 col-md-6">
            Menu
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;