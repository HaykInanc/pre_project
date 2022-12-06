import React from 'react'
import s from './style.module.sass';
import { useDispatch } from 'react-redux';
import { add_to_basket_action } from '../../store/reducer/basketReducer';

export default function Product({id, name, price}) {

  const dispatch = useDispatch();

  const addToBasket = () => dispatch(
      add_to_basket_action(id, name, price)
  );

  return (
    <div className={s.product}>
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={addToBasket}>Добавть в корзину</button>
    </div>
  )
}
