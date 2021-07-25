import React from 'react';

import style from './Button.module.scss';

function Button({ children, onClick }) {
  return (
    <div>
      <button onClick={onClick} className={style.btn}>
        {children}
      </button>
    </div>
  );
}

export default Button;
