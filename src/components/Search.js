import { useContext, useState, useEffect } from "react";
import productsContext from "../context/ProductsContext";
import logo from "../codoacodo.png";
import { useLocation } from "react-router-dom";

const Search = ({ history }) => {
  const productContext = useContext(productsContext);
  const { getProducts } = productContext;
  const [query, SetQuery] = useState("");
  const url = new URLSearchParams(useLocation().search);
  const queryUrl = url.get("search");

  useEffect(() => {
    if (queryUrl) {
      getProducts(queryUrl);
    }
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return;
    }
    getProducts(query);
    history.push(`/items?search=${query}`);
  };

  return (
    <div className="header">
      <div className="nav-header">
        <form className="form" onSubmit={handleSubmit}>
          <a href="/">
            <img className="logo" src={logo} alt="Logo" />
          </a>
          <input
            className="input-search"
            type="text"
            placeholder="Buscar productos, marcas y más..."
            value={query}
            onChange={(e) => SetQuery(e.target.value)}
          />
          <button className="button-search" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
