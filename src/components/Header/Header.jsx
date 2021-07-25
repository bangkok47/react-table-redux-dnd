import React from 'react';

import style from './Header.module.scss';
import Button from '../Button/Button';

function Header({ modalHandler }) {
  return (
    <div className={style.header}>
      <div>Users Table</div>

      <Button onClick={modalHandler}>Select Grid Column</Button>
    </div>
  );
}

export default Header;
