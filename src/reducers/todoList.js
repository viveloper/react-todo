import { GET_TODO_LIST_SUCCESS } from "../constants";

const initialState = [];

const todoList = (previousState = initialState, action) => {
  if (action.type === GET_TODO_LIST_SUCCESS) {
    return action.todoList;
  }
  else {
    return previousState;
  }
}

export default todoList;