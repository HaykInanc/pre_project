
export const loadProduct = (id) => {
    return async dispatch =>{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json()

        console.log(data);
        // dispatch(load_products_action(payload));
    }
};

