import useFetchPokemon from "../../hooks/fetchPokemon";

import "./styles.scss";

const Card = ({ name }) => {
  const pokemon = useFetchPokemon(name);
  const pokemonImage = pokemon?.sprites?.other?.home?.front_default;
  
  return !pokemon?.loading && (
    <div className="card">
      <img src={pokemonImage} className="card-img-top" alt={ pokemon.name } />
      <div className="card-body">
        <h5 className="card-title">{ pokemon.name }</h5>
      </div>
    </div>
  )
}

export default Card;