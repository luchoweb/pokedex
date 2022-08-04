import { Link } from "react-router-dom";

import "./styles.scss";
import Logo from "../../../assets/images/pokedex_logo_footer.webp";

const Footer = () => {
  const stacks = [
    "React",
    "Node",
    "Chart JS",
    "SASS",
    "Netlify",
    "Git",
    "GitHub",
    "PokeApi",
  ];

  return (
    <footer className="pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 mb-4 mb-lg-0">
            <img src={Logo} alt="pokedex" height={50} />
            <p className="mt-3 mb-0">This is another Pokedex web app. The idea was to practice and learn more about React. If you like it, please give me a star on <a href="https://github.com/luchoweb/pokedex" className="link" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a>.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4 mb-md-0">
            <h5>Stacks / Tools</h5>
            <ul className="ps-3 d-flex gap-1 flex-wrap stacks">
              { stacks.map((stack, index) => (
                <li className="stack me-4" key={`i-${index}`}>
                  { stack }
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Important!</h5>
            <p className="m-0">
              If you are a Nintendo&reg; attorney, you may want to visit our <Link to="/legal" className="link"><strong>Legal</strong></Link> page. Thanks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;