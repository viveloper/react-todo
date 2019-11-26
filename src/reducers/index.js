import { combineReducers } from 'redux';
import todoFormTitle from './todoFormTitle';
import todoFormButtonName from './todoFormButtonName';
import todoList from './todoList';
import selectedTodo from './selectedTodo';
import errorMessage from './errorMessage';

const rootReducer = combineReducers({
  todoFormTitle,
  todoFormButtonName,
  todoList,
  selectedTodo,
  errorMessage
});

export default rootReducer;