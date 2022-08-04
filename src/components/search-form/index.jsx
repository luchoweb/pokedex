import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Pokeball from "../../assets/images/pokeball.png";

const SearchForm = ({ query }) => {
  const navigate = useNavigate();
  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    if ( query && query !== 'none' )
      navigate(`/pokemon/${query.trim().toLowerCase()}`);
  });

  return (
    <>
      <div className="form-group m-auto" style={{
        maxWidth: "310px"
      }}>
        <h4 className="mt-0 mb-3">Enter a Pokemon name:</h4>
        <div className="d-flex gap-3">
          <input type="text" className="form-control" placeholder="Ex: pikachu, bulbasaur" onKeyUp={(e) => setPokemonName(e.target.value.trim().toLowerCase())} />
          <Link className="btn btn-danger" to={pokemonName !== '' ? `/pokemon/${pokemonName}` : '/search'}>Search</Link>
        </div>
      </div>

      { query === 'none' && (
        <div className="search-results text-center mt-5">
          <img src={Pokeball} alt="pokeball" height={70} />
          <p className="m-0 mt-3">The pokemon you are looking for doesn't exist in our system.</p>
          <p>Please check the name and try again.</p>
        </div>
      )}
    </>
  )
}

export default SearchForm;