import { GET_PRODUCTS, GET_PRODUCT } from "../types";

const productosReducer  = (state, action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload.items,
                breadproducts: action.payload.bread
            }
        case GET_PRODUCT:
            return{
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
}

export default productosReducer;