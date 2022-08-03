import { useEffect, useState } from "react";
import { getPokemons } from "../helpers/getPokemons";

const useFetchPokemons = () => {
  const [pokemons, setPokemons] = useState(undefined);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if ( !pokemons ) {
      const fetchData = async () => {
        const data = await getPokemons('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0');
        setPokemons(data);
        setloading(false);
      } 

      fetchData();
    }
  }, [pokemons]);

  return loading ? {loading} : pokemons;
}

export default useFetchPokemons;