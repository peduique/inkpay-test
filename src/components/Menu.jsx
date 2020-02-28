import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Menu.module.css';

import { actions } from '../actions/counter';

const Menu = () => {
  let { pathname } = useLocation();
  const [location, setLocation] = useState(pathname);

  const dispatch = useDispatch();
  const handleIncrementCounter = () => dispatch(actions.increment());

  const counter = useSelector(state => state);

  useEffect(() => {
    if (location !== pathname) handleIncrementCounter();
    setLocation(pathname);
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li>
          <Link to="/" className={styles.item}>Home Page</Link>
        </li>
        <li>
          <Link to="/counter" className={styles.item}>Counter Page</Link>
        </li>
      </ul>
      
      <span className={styles.counter}>Page transition count: {counter}</span>

    </nav>
  );
}

export default Menu;