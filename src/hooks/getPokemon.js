const GetPokemon = async (name) => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemonJson = await pokemon.json();
  return pokemonJson;
}

export default GetPokemon;