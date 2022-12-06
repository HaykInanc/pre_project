
const default_state = [];

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';
export const CLEAR_BASKET = 'CLEAR_BASKET';

export const add_to_basket_action = (id, name, price) =>{
    return {
      type: ADD_TO_BASKET,
      payload: {id, name, price}
    }
  }

export const clear_basket_action = () => ({type: CLEAR_BASKET})

export const increment_count_action = id => ({
    type: INCREMENT_COUNT, 
    payload: id
});

export  const decrement_count_action = id => ({
    type: DECREMENT_COUNT, 
    payload: id
});

const checkProduct = (state, product) => {
    const productInState = state.find(({id}) => id === product.id);
    if (productInState){
        productInState.count++;
        return [...state]
    }else{
        return [...state, {...product, count: 1}]
    }
}

export const basketReducer = (state=default_state, action) =>{
    if (action.type === 'ADD_TO_BASKET'){
        return checkProduct(state, action.payload);
    }else if (action.type === 'INCREMENT_COUNT') {
        state.find(({id}) => id === action.payload).count++
        return [...state]
    }else if (action.type === 'DECREMENT_COUNT') {
        const target = state.find(({id}) => id === action.payload);
        if (target.count === 1){
            state = state.filter(({id}) => id !== action.payload);
        }else{
            state.find(({id}) => id === action.payload).count--;
        }
        return [...state]
    }else if (action.type === 'CLEAR_BASKET'){
        return default_state
    }else {
        return state
    }
} 