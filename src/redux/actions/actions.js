import { ActionTypes } from '../constants/action-types';
import axios from 'axios';

export const setUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'http://www.filltext.com/?rows=100&firstname={firstName}&lastname={lastName}&phone={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true&email={email}&ip={ip}&pwd={password}&id={index}',
    );
    dispatch({
      type: ActionTypes.SET_USERS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.USERS_ERROR,
      payload: console.log(error),
    });
  }
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
