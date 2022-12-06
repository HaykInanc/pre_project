import {combineReducers, createStore, applyMiddleware} from 'redux';
import { basketReducer } from './reducer/basketReducer';
import {productReducer} from './reducer/productReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    products: productReducer,
    basket: basketReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk));