import useFetchPokemon from "../../hooks/fetchPokemon";

import "./styles.scss";

const Card = ({ name }) => {
  const pokemon = useFetchPokemon(name);
  const pokemonImage = pokemon?.sprites?.other?.home?.front_default;
  
  return !pokemon?.loading && (
    <div className="card">
      <img src={pokemonImage} className="card-img-top" alt={ pokemon.name } loading="lazy" />
      <div className="card-body">
        <h5 className="card-title mb-3">{ pokemon.name }</h5>
        { pokemon.types.map((type, index) => (
          <div className={`badge bg-${type.type.name } me-1 p-2`} key={`i-${index}`}>
            <p className="m-0">{ type.type.name }</p>
          </div>
        )) }
      </div>
    </div>
  )
}

export default Card;