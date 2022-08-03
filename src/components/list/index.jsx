import { Link } from "react-router-dom";
import { fetchData } from "../../helpers/fetchData";
import useFetchPokemons from "../../hooks/fetchPokemons";
import Card from "../card";
import Pager from "./pager";

const List = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0';
  const pokemons = useFetchPokemons(url);

  return (
    <>
      <ul className="list-unstyled row pokemons">
        { pokemons?.loading ? <p>Loading...</p> : pokemons?.results.map((pokemon, index) => (
          <li className="col-12 col-md-4 col-lg-3 mb-4" key={`i${index}`}>
            <Link to={`/pokemon/${pokemon.name}`}>
              <Card name={pokemon.name} />
            </Link>
          </li>
        )) }
      </ul>
      { !pokemons?.loading && <Pager info={{
        next: pokemons.next,
        prev: pokemons.previous
      }} />}
    </>
  )
}

export default List;