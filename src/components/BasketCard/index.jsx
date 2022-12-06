import React from 'react'
import s from './style.module.sass'
import {useDispatch} from 'react-redux';
import { increment_count_action, decrement_count_action } from '../../store/reducer/basketReducer';

export default function BasketCard({id, name, price, count}) {
  const dispatch = useDispatch();

  return (
    <div className={s.card}>
        <p>{name}</p>
        <p>{price}</p>
        <p>{count}</p>
        <div>
          <button onClick={()=>dispatch(increment_count_action(id))}>+</button>
          <button onClick={()=>dispatch(decrement_count_action(id))}>-</button>
        </div>
    </div>
  )
}
