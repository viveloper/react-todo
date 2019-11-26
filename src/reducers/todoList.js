import { GET_TODO_LIST_SUCCESS, ADD_TODO_SUCCESS, DELETE_TODO_SUCCESS, UPDATE_TODO_SUCCESS } from "../constants";

const initialState = [];

const todoList = (previousState = initialState, action) => {
  if (action.type === GET_TODO_LIST_SUCCESS) {
    return action.todoList;
  }
  else if(action.type === ADD_TODO_SUCCESS) {
    return [...previousState, action.todo];
  }
  else if(action.type === UPDATE_TODO_SUCCESS) {
    const newState = [];
    previousState.forEach(todo => {
      if(todo._id === action.todo._id){
        newState.push(action.todo);
      }
      else{
        newState.push(todo);
      }
    });
    return newState;
  }
  else if(action.type === DELETE_TODO_SUCCESS) {
    const newState = [];
    previousState.forEach(todo => {
      if(todo._id !== action.id){
        newState.push(todo);
      }
    });
    return newState;
  }
  else {
    return previousState;
  }
}

export default todoList;