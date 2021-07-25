import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button/Button';

import { addedColumns, removeSelectedColumn, setNewColumns } from '../../redux/actions/actions';

import style from './Modal.module.scss';

function Modal({ show, hidden, allColumnsHeaders }) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const selectedColumns = useSelector(({ columns }) => columns.selectedColumns);
  const allStateColumns = useSelector(({ columns }) => columns.columns);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const addColumn = (e) => {
    const id = e.target.id;
    if (selectedColumns.includes(id)) {
      return;
    }

    dispatch(addedColumns(id));
  };

  const removeColumn = (e) => {
    const id = e.target.id;

    dispatch(removeSelectedColumn(id));
  };

  const setedNewColumns = () => {
    dispatch(setNewColumns());

    hidden(false);
  };

  return (
    <div className={show ? style.modal : style.modal_closed}>
      <div className={style.content}>
        <div className={style.header}>
          <h4>Select columns for the grid</h4>
        </div>
        <hr />
        <input value={value} onChange={handleInputChange} type="text" placeholder="Search..." />

        <div className={style.main}>
          <div className={style.allColumns}>
            <ul>
              {allStateColumns
                .filter((el) => el.Header.toLowerCase().includes(value.toLowerCase()))
                .map((column, idx) => (
                  <li key={idx}>
                    <span id={column.Header} onClick={addColumn}>
                      {column.Header}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
          <div className={style.line}></div>
          <div className={style.selectedColumns}>
            <ul>
              {selectedColumns
                ? selectedColumns
                    .filter((el, idx) => selectedColumns.indexOf(el) === idx)
                    .map((col, idx) => (
                      <li className={style.liElement} key={idx}>
                        <span>{col}</span>
                        <span id={col} className={style.deleteBtn} onClick={removeColumn}>
                          DEL
                        </span>
                      </li>
                    ))
                : null}
            </ul>
          </div>
        </div>
        <hr />
        <div className={style.footer}>
          <div></div>
          <Button onClick={setedNewColumns}>Apply</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
