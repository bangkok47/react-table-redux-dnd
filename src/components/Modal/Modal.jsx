import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addedColumns, removeSelectedColumn, setNewColumns } from '../../redux/actions/actions';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import style from './Modal.module.scss';
import Button from '../Button/Button';
import ModalColumns from './ModalColumns/ModalColumns';

function Modal({ show, hidden }) {
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
    setValue('');
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
          <DndProvider backend={HTML5Backend}>
            <ModalColumns
              allStateColumns={allStateColumns}
              addColumn={addColumn}
              value={value}
              selectedColumns={selectedColumns}
              removeColumn={removeColumn}
            />
          </DndProvider>
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
