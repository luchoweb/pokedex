import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../helpers/fetchData";

const useFetchPokemon = (name) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if ( !pokemon ) {
      const fetchPokemon = async () => {
        const data = await fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`);
        console.log('data', data)
        
        if ( data ) {
          setPokemon(data);
          setloading(false);
        } else {
          navigate('/search/none');
        }
      } 

      fetchPokemon();
    }
  }, [pokemon, name]);

  return loading ? {loading} : pokemon;
}

export default useFetchPokemon;