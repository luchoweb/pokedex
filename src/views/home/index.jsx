import useFetchPokemons from "../../hooks/fetchPokemons";
import { useParams } from "react-router-dom";
import List from "../../components/list";
import Layout from "../layout";

const HomeView = () => {
  const limit = 12;
  const { page } = useParams();
  const offset = page > 2 ? (limit * page) - limit : (parseInt(page) === 2 ? 12 : 0);
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const pokemons = useFetchPokemons(url);

  return (
    <Layout>
      <div className="container pt-4 pb-4">
        <List data={pokemons} page={page} />
      </div>
    </Layout>
  )
}

export default HomeView;