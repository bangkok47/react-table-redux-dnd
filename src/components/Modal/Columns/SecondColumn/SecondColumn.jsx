import React from 'react';
import { useDrop } from 'react-dnd';
import Item from '../../Item/Item';

import style from './SecondColumn.module.scss';

function SecondColumn({ selectedColumns, removeColumn, children, title }) {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'ITEM',
    drop: () => ({ name: title }),
  });

  /* 
  collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }), */

  return (
    <div className={style.selectedColumns}>
      <ul>
        {selectedColumns
          ? selectedColumns.map((col, idx) => (
              <Item>
                <li className={style.liElement} key={idx}>
                  <span>{col}</span>
                  <span id={col} className={style.deleteBtn} onClick={removeColumn}>
                    &#10060;
                  </span>
                </li>
              </Item>
            ))
          : null}
        {children}
      </ul>
    </div>
  );
}

export default SecondColumn;
