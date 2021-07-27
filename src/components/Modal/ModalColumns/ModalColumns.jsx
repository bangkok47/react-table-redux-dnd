import React from 'react';
import style from './ModalColumns.module.scss';
import Item from '../Item/Item';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../../redux/constants/modal-items';
import { setDraggedColumn } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';

function ModalColumns({ allStateColumns, addColumn, selectedColumns, removeColumn, value }) {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ITEM,
    drop: (item, monitor) => dispatch(setDraggedColumn(item.id)),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className={style.main}>
      <div className={style.allColumns}>
        <ul>
          {allStateColumns
            .filter((el) => el.Header.toLowerCase().includes(value.toLowerCase()))
            .map((column, idx) => (
              <Item key={idx} id={column.id}>
                <li>
                  <span id={column.Header} onClick={addColumn}>
                    {column.Header}
                  </span>
                </li>
              </Item>
            ))}
        </ul>
      </div>
      <div className={style.line}></div>
      <div className={style.selectedColumns} ref={drop}>
        <ul>
          {selectedColumns
            ? selectedColumns.map((column, idx) => (
                <Item key={idx}>
                  <li className={style.liElement}>
                    <span>{column}</span>
                    <span id={column} className={style.deleteBtn} onClick={removeColumn}>
                      &#10060;
                    </span>
                  </li>
                </Item>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default ModalColumns;
