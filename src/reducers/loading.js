import {
  GET_TODO_LIST,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  GET_TODO_LIST_SUCCESS,
  ADD_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  GET_TODO_LIST_FAILURE,
  ADD_TODO_FAILURE,
  UPDATE_TODO_FAILURE,
  DELETE_TODO_FAILURE
} from "../constants";

const initialState = false;

const loading = (previousState = initialState, action) => {
  switch (action.type) {
    case GET_TODO_LIST:
    case ADD_TODO:
    case UPDATE_TODO:
    case DELETE_TODO:
      return true;
    case GET_TODO_LIST_SUCCESS:
    case ADD_TODO_SUCCESS:
    case UPDATE_TODO_SUCCESS:
    case DELETE_TODO_SUCCESS:
    case GET_TODO_LIST_FAILURE:
    case ADD_TODO_FAILURE:
    case UPDATE_TODO_FAILURE:
    case DELETE_TODO_FAILURE:
      return false;
    default:
      return previousState;
  }
}

export default loading;