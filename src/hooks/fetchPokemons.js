import { useEffect, useState } from "react";
import { fetchData } from "../helpers/fetchData";

const useFetchPokemons = (url) => {
  const [pokemons, setPokemons] = useState(undefined);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);

    const fetchPokemons = async () => {
      const data = await fetchData(url);
      setPokemons(data);
      setloading(false);
    } 

    fetchPokemons();
  }, [url]);

  return loading ? {loading} : pokemons;
}

export default useFetchPokemons;