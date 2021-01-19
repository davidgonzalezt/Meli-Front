import { useReducer } from "react";
import ProductsContext from "./ProductsContext";
import productsReducer from "./ProductoReducer";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
} from "../types";
import clienteAxios from "../config/axios";

const ProductState = (props) => {
  const initialState = {
    products: [],
    product: null,
    breadproducts: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  //get a list of products
  const getProducts = async (query) => {
    dispatch({ type: GET_PRODUCTS });
    try {
      const response = await clienteAxios.get(`/api/items?query=${query}`);
      dispatch({
        payload: {
          items: response.data.items,
          bread: response.data.breadcrumb,
        },
        type: GET_PRODUCTS_SUCCESS,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //get a product
  const getSingleProduct = async (id) => {
    dispatch({ type: GET_PRODUCT });
    try {
      const response = await clienteAxios.get(`/api/items/${id}`);
      dispatch({
        payload: response.data.item,
        type: GET_PRODUCT_SUCCESS,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        product: state.product,
        loading: state.loading,
        breadproducts: state.breadproducts,
        getProducts: getProducts,
        getSingleProduct: getSingleProduct,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductState;
