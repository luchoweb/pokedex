import { Link, useParams } from "react-router-dom";
import useFetchPokemons from "../../hooks/fetchPokemons";
import Card from "../card";

import "./styles.scss";

const List = () => {
  const limit = 12;
  const { page } = useParams();
  const offset = page > 2 ? (limit * page) - limit : (parseInt(page) === 2 ? 12 : 0);
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const pokemons = useFetchPokemons(url);

  return (
    <>
      <ul className="list-unstyled row pokemons">
        { pokemons?.loading ? <p>Loading...</p> : pokemons?.results.map((pokemon, index) => (
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