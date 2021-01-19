import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Porducts from "./components/Products";
import Search from "./components/Search";
import ProductsContext from "./context/ProductsContext";

const App = () => {
  const productsContext = useContext(ProductsContext);
  const { products } = productsContext;
  
  return (
    <Router>
      <Route path="/" component={Search} />

      {products.length > 1 ? (
        <Switch>
          <Route exact path="/items" component={Porducts} />
          <Route exact path="/items/:id" component={ProductDetails} />
        </Switch>
      ) : (
        <div className="anything">Busca lo que quieras</div>
      )}
    </Router>
  );
};

export default App;
