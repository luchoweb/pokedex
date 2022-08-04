import Layout from "../layout";

import "./styles.scss";
import Pokeball from "../../assets/images/pokeball.png";
import { Link } from "react-router-dom";

const NotFoundView = () => {
  return (
    <Layout>
      <div className="container">
        <div className="pt-5 pb-5 text-center page-404">
          <img src={Pokeball} alt="Pokeball" height={100} />
          <h1 className="display-6 mt-3">Page not found</h1>
          <p>The page you are trying to visit has been moved or deleted, go to the <Link to="/" className="link">home page</Link>.</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundView;