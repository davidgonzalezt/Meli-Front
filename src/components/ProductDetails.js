import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsContext from "../context/ProductsContext";

const ProductDetails = () => {
  const productsContext = useContext(ProductsContext);
  const { product, getSingleProduct } = productsContext;
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getSingleProduct(id);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {product !== null ? (
        <div className="card-container">
          <p className="breadcrumb">Codo a Codo</p>
          <div className="card-details">
            <div className="card-header">
              <div className="box-img">
                <div
                  className="img-details"
                  style={{ backgroundImage: `url(${product.picture})` }}
                ></div>
              </div>
              <div className="info">
                <p>
                  {product.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                  {product.sold_quantity} vendidos
                </p>
                <p>{product.title}</p>
                <h1>${product.price.amount}</h1>
                <button className="buy">Comprar</button>
              </div>
            </div>
            <div className="description">
              <h1>Descripción del Producto</h1>
              <p className="parrafo">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductDetails;
