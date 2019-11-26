import { SET_SELECTED_TODO } from "../constants";

const initialState = {};

const selectedTodo = (previousState = initialState, action) => {
  if (action.type === SET_SELECTED_TODO) {
    return action.todo;
  }
  else {
    return previousState;
  }
}

export default selectedTodo;