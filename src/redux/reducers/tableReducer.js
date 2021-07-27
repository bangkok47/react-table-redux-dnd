import { ActionTypes } from '../constants/action-types';

const initialState = {
  columns: [
    {
      Header: 'Id',
      accessor: 'id',
      isVisible: true,
      name: 'Id',
    },
    {
      Header: 'First Name',
      accessor: 'firstname',
      isVisible: true,
      name: 'First Name',
    },
    {
      Header: 'Last Name',
      accessor: 'lastname',
      isVisible: true,
      name: 'Last Name',
    },
    {
      Header: 'State',
      accessor: 'state',
      isVisible: false,
      name: 'State',
    },
    {
      Header: 'City',
      accessor: 'city',
      isVisible: false,
      name: 'City',
    },
    {
      Header: 'Address',
      accessor: 'address',
      isVisible: false,
      name: 'Address',
    },
    {
      Header: 'Email',
      accessor: 'email',
      isVisible: false,
      name: 'Email',
    },
    {
      Header: 'Ip',
      accessor: 'ip',
      isVisible: false,
      name: 'Ip',
    },
    {
      Header: 'Pwd',
      accessor: 'pwd',
      isVisible: false,
      name: 'Pwd',
    },
    {
      Header: 'Phone',
      accessor: 'phone',
      isVisible: false,
      name: 'Phone',
    },
    {
      Header: 'Zip',
      accessor: 'zip',
      isVisible: false,
      name: 'Zip',
    },
  ],
  selectedColumns: [],
  applyModalColumns: [],
};

export const tableReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_COLUMNS:
      return {
        ...state,
        selectedColumns: [...state.selectedColumns, payload],
      };

    case ActionTypes.REMOVE_SELECTED_COLUMN: {
      const prevState = [...state.selectedColumns];
      const newCols = prevState.filter((el) => el !== payload);

      return {
        ...state,
        selectedColumns: newCols,
      };
    }

    case ActionTypes.SET_NEW_COLUMNS: {
      const newCols = [...state.selectedColumns];

      const newColumns = newCols.reduce(
        (acc, el, i) => (
          (acc[i] = {
            Header: el,
            accessor: el.toLowerCase().split(' ').join(''),
            isVisible: true,
            id: el,
          }),
          acc
        ),
        [],
      );

      return {
        ...state,
        applyModalColumns: [...newColumns],
      };
    }

    case ActionTypes.DRAG_COLUMN: {
      const draggedColumn = [...state.selectedColumns, payload];
      const filteredDraggedColumn = [...new Set(draggedColumn)];

      return {
        ...state,
        selectedColumns: [...filteredDraggedColumn],
      };
    }

    default:
      return state;
  }
};
