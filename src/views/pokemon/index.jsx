import { useParams } from "react-router-dom";
import useFetchPokemon from "../../hooks/fetchPokemon";

const PokemonView = () => {
  const { name } = useParams();
  const pokemon = useFetchPokemon(name);

  return pokemon?.loading ? <p>Loading...</p> : (
    <h1>{ pokemon.name }</h1>
  )
}

export default PokemonView;