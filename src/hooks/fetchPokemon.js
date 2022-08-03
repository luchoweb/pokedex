import { useEffect, useState } from "react";
import { fetchData } from "../helpers/fetchData";

const useFetchPokemon = (name) => {
  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if ( !pokemon ) {
      const fetchPokemon = async () => {
        const data = await fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(data);
        setloading(false);
      } 

      fetchPokemon();
    }
  }, [pokemon, name]);

  return loading ? {loading} : pokemon;
}

export default useFetchPokemon;