import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../context/ProductsContext";

const Porducts = () => {
  const productsContext = useContext(ProductsContext);
  const { products, breadproducts } = productsContext;

  return (
    <>
      <div className="card-container">
        <p className="breadcrumb">
        {breadproducts.length>0 ? breadproducts.map(b=>(`${b.name} > `)) : "Codo a Codo"}
        </p>
        {products.slice(0, 4).map((product) => (
          <div className="card" key={product.id}>
            <div className="card-content">
              <Link to={`/items/${product.id}`}>
                <div
                  className="card-img"
                  style={{ backgroundImage: `url(${product.picture})` }}
                ></div>
              </Link>
              <div className="card-body">
                <p className="price">$ {product.price.amount}</p>
                <div className="content">
                  <Link to={`/items/${product.id}`}>
                    <p>{product.title}</p>
                  </Link>
                  <p>Completo Unical</p>
                </div>
              </div>
            </div>
            <div className="zone">
              <p>{product.location}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Porducts;
