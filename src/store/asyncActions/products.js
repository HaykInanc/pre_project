
import { load_products_action } from "../reducer/productReducer";

// https://fakestoreapi.com/products
// https://dummyjson.com/products?limit=2&skip=2

export const loadProducts = async dispatch =>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json()

    const payload = data.map(({id, title, price}) =>({
        id, price,
        name: title
    }));

    dispatch(load_products_action(payload));
};

