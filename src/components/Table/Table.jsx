import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../redux/actions/actions';

import { useTable, usePagination } from 'react-table';

import Modal from '../Modal/Modal';
import style from './Table.module.scss';

function Table({ modalActive, setModalActive }) {
  const dispatch = useDispatch();
  const res = useSelector(({ users }) => users.users);
  const COLUMNS = useSelector(({ columns }) => columns.columns);
  const applyModalColumns = useSelector(({ columns }) => columns.applyModalColumns);

  React.useEffect(() => {
    dispatch(setUsers());
  }, [dispatch]);

  const columns = React.useMemo(
    () => (applyModalColumns.length > 0 ? applyModalColumns : COLUMNS),
    [applyModalColumns, COLUMNS],
  );
  const data = React.useMemo(() => res, [res]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canNextPage,
    canPreviousPage,
    previousPage,
    pageOptions,
    setPageSize,
    state,
    prepareRow,
    setHiddenColumns,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination,
  );

  const { pageIndex, pageSize } = state;

  React.useEffect(() => {
    setHiddenColumns(
      columns.filter((column) => !column.isVisible).map((column) => column.accessor),
    );
  }, [setHiddenColumns, columns, applyModalColumns]);

  return (
    <>
      <Modal show={modalActive} hidden={setModalActive} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={style.pageBtns}>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          &#60;&#60;&#60;
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          &#62;&#62;&#62;
        </button>
      </div>
    </>
  );
}

export default Table;
