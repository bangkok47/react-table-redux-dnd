import { ActionTypes } from '../constants/action-types';

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export const addedColumns = (id) => {
  return {
    type: ActionTypes.SELECTED_COLUMNS,
    payload: id,
  };
};

export const removeSelectedColumn = (id) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_COLUMN,
    payload: id,
  };
};

export const setNewColumns = () => {
  return {
    type: ActionTypes.SET_NEW_COLUMNS,
  };
};

export const setDraggedColumn = (column) => {
  return {
    type: ActionTypes.DRAG_COLUMN,
    payload: column,
  };
};
