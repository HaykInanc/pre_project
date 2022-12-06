import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.sass';

export default function Nav() {
  return (
    <nav className={s.nav}>
        <NavLink to='/'>Главная страница</NavLink>
        <NavLink to='/about'>О Компании</NavLink>
        <NavLink to='/basket'>Корзина</NavLink>
    </nav>
  )
}
