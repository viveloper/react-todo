import { combineReducers } from 'redux';
import todoFormTitle from './todoFormTitle';
import todoFormButtonName from './todoFormButtonName';
import todoList from './todoList';
import selectedTodo from './selectedTodo';
import errorMessage from './errorMessage';
import loading from './loading';

const rootReducer = combineReducers({
  todoFormTitle,
  todoFormButtonName,
  todoList,
  selectedTodo,
  loading,
  errorMessage
});

export default rootReducer;