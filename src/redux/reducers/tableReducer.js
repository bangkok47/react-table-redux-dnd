import { ActionTypes } from '../constants/action-types';

const initialState = {
  columns: [
    {
      Header: 'Id',
      accessor: 'id',
      isVisible: true,
    },
    {
      Header: 'First Name',
      accessor: 'firstname',
      isVisible: true,
    },
    {
      Header: 'Last Name',
      accessor: 'lastname',
      isVisible: true,
    },
    {
      Header: 'State',
      accessor: 'state',
      isVisible: false,
    },
    {
      Header: 'City',
      accessor: 'city',
      isVisible: false,
    },
    {
      Header: 'Address',
      accessor: 'address',
      isVisible: false,
    },
    {
      Header: 'Email',
      accessor: 'email',
      isVisible: false,
    },
    {
      Header: 'Ip',
      accessor: 'ip',
      isVisible: false,
    },
    {
      Header: 'Pwd',
      accessor: 'pwd',
      isVisible: false,
    },
    {
      Header: 'Phone',
      accessor: 'phone',
      isVisible: false,
    },
    {
      Header: 'Zip',
      accessor: 'zip',
      isVisible: false,
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

    default:
      return state;
  }
};
