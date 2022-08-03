export const getPokemons = async (url) => {
  const pokemons = await fetch(url);
  const pokemonsJson = await pokemons.json();
  return pokemonsJson;
}
