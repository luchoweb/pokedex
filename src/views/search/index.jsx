import { useParams } from "react-router-dom";
import Layout from "../layout";
import SearchForm from "../../components/search-form";

const SearchView = () => {
  const { query } = useParams();

  return (
    <Layout>
      <div className="container pt-5 pb-5" style={{
        minHeight: "300px"
      }}>
        <SearchForm query={query} />
      </div>
    </Layout>
  )
}

export default SearchView;