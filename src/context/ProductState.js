import {useReducer} from 'react';
import ProductsContext from "./ProductsContext";
import productsReducer from "./ProductoReducer";
import { GET_PRODUCTS, GET_PRODUCT} from '../types';
import clienteAxios from '../config/axios';

const ProductState = (props) => {
 const initialState = {
    products: [],
    product: null,
    breadproducts:[]
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  //get products  
  const getProducts = async (query)=>{
    try {
      const response = await clienteAxios.get(`/api/items?query=${query}`);
      dispatch({
        payload: {
          items:response.data.items,
          bread:response.data.breadcrumb
        },
        type: GET_PRODUCTS
      });
    } catch (error) {
      console.log(error);
    }
  }

  const getSingleProduct = async (id)=>{
    try {
      const response = await clienteAxios.get(`/api/items/${id}`);
      dispatch({
        payload: response.data.item,
        type: GET_PRODUCT
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductsContext.Provider
        value={{
            products: state.products,
            product: state.product,
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
