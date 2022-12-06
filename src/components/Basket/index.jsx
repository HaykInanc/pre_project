import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BasketCard from '../BasketCard';
import { clear_basket_action } from '../../store/reducer/basketReducer';


export default function Basket() {
  const basket = useSelector(state => state.basket);
  const dispatch = useDispatch();

  return (
    <>
    {
      basket.length === 0
      ? ''
      :<div>
        <p>Корзина</p>

        <div>
            {
                basket.map(product => <BasketCard key={product.id} {...product}/>)
            }
        </div>
        <p>
          Итого: <span>{basket.reduce((prev, {price, count})=> prev + price * count, 0)}</span>
        </p>
        <button onClick={() => dispatch(clear_basket_action())}>Очистить корзину</button>
      </div>
    }
    
    </>
  )
}

// добавить кнопку очистки корзины
