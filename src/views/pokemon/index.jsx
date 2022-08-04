import { useParams } from "react-router-dom";
import useFetchPokemon from "../../hooks/fetchPokemon";
import Layout from "../layout";
import RadarChart from "../../components/radar-chart";

import "./styles.scss";

const PokemonView = () => {
  const { name } = useParams();
  const pokemon = useFetchPokemon(name);
  const pokemonImage = pokemon?.sprites?.other?.home?.front_default;

  return (
    <Layout>
    { pokemon?.loading ? (
      <div className="container pt-5 pb-5">
        <h4 className="m-0 text-center display-6">Loading...</h4>
      </div>
    ) : (
      <div className="container pt-5 pb-5 pokemon">
        <div className="row align-items-center">
          <h1 className="mt-0 display-4 pokemon-name">
            <small className="d-block">Pokemon name:</small>
            <span>{ pokemon?.name }</span>
          </h1>

          <div className="col-12 col-md-6 text-center col-img mb-4 mb-md-0">
            <img src={ pokemonImage } alt={ pokemon?.name } height={300} />

            <div className="badge-box">
            { pokemon?.types.map((type, index) => (
              <div className={`badge bg-${type.type.name } me-1 p-2`} key={`i-${index}`}>
                <p className="m-0">{ type.type.name }</p>
              </div>
            )) }
            </div>
          </div>

          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <div className="stats mb-4">
              <RadarChart data={pokemon?.stats} />
            </div>
          </div>

          <div className="other-details mt-4 mt-lg-2">
            <h4>Other details</h4>
            <ul className="list-unstyled m-0 p-0 details">
              <li className="detail" key="1">
                <p className="m-0">
                  <strong>Weight</strong>: { pokemon?.weight } pounds
                </p>
              </li>
              <li className="detail" key="2">
                <p className="m-0">
                  <strong>Height</strong>: { pokemon?.height } inches
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )}
    </Layout>
  )
}

export default PokemonView;