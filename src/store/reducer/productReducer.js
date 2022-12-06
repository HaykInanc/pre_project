
const default_state = [];

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export const load_products_action = payload => ({type: LOAD_PRODUCTS, payload});
export const add_product_action = (name, price) => ({
    type: ADD_PRODUCT,
    payload: {name, price}
  });


export const productReducer = (state=default_state, action) =>{
    if (action.type === ADD_PRODUCT){
        return [...state, {
            id: Date.now(),
            ...action.payload
        }] 
    }else if(action.type === LOAD_PRODUCTS){
        return action.payload
    }else {
        return state
    }
} 