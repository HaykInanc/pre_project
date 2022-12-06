import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Basket from '../Basket';
import Product from '../Product';
import { loadProducts } from '../../store/asyncActions/products';
import { add_product_action } from '../../store/reducer/productReducer';

export default function Products() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadProducts);
  }, []);
  
  const submit = event=>{
    event.preventDefault();
    const {name, price} = event.target;

    dispatch(add_product_action(name.value, +price.value));
    name.value = '';
    price.value = '';
  }

  return (
    <div>
        <form onSubmit={submit}>
            <input type="text" name='name' placeholder='name'/>
            <input type="number" name='price' placeholder='price'/>
            <button>Добавить</button>
        </form>
        <div>
          {
            products.map(product => <Product key={product.id} {...product}/>)
          }
        </div>
    </div>
  )
}
