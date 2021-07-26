import React from 'react';
import Item from '../../Item/Item';

import style from './FirstColumn.module.scss';

function FirstColumn({ allStateColumns, addColumn, value, children, title }) {
  return (
    <div className={style.allColumns}>
      <ul>
        {allStateColumns
          .filter((el) => el.Header.toLowerCase().includes(value.toLowerCase()))
          .map((column, idx) => (
            <Item>
              <li key={idx}>
                <span id={column.Header} onClick={addColumn}>
                  {column.Header}
                </span>
              </li>
            </Item>
          ))}
        {children}
      </ul>
    </div>
  );
}

export default FirstColumn;
