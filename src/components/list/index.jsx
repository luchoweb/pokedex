import useFetchPokemons from "../../hooks/fetchPokemons";
import Card from "../card";
import Pager from "./pager";

const List = () => {
  const pokemons = useFetchPokemons();

  return (
    <>
      <ul className="pokemons">
        { pokemons?.loading ? <p>Loading...</p> : pokemons?.results.map((pokemon, index) => (
          <li key={`i${index}`}>
            <Card data={pokemon.name} />
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