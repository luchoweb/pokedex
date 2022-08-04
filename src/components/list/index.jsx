import { Link } from "react-router-dom";
import Card from "../card";

import "./styles.scss";

const List = ({ data, page }) => {
  return (
    <>
      <ul className="list-unstyled row pokemons">
        { data?.loading ? <p>Loading...</p> : data?.results.map((pokemon, index) => (
          <li className="col-6 col-md-4 col-lg-3 mb-4 pokemon" key={`i-${index}`}>
            <Link to={`/pokemon/${pokemon.name}`} className="link">
              <Card name={pokemon.name} />
            </Link>
          </li>
        )) }
      </ul>
      
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link className="page-link" to={`/page/${page > 1 ? parseInt(page) - 1 : 1}`}>
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to={`/page/${page > 1 ? parseInt(page) + 1 : 2}`}>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default List;