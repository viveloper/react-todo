import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_TODO_LIST, GET_TODO_LIST_SUCCESS, GET_TODO_LIST_FAILURE, SET_ERROR_MESSAGE, ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE, DELETE_TODO, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE, UPDATE_TODO, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAILURE } from '../constants';
import { getTodoList as getTodoListAPI, addTodo as addTodoAPI, updateTodo as updateTodoAPI, deleteTodo as deleteTodoAPI } from '../api';

// worker saga
function* getTodoList(action) {
  try {
    const todoList = yield call(getTodoListAPI, action.token);
    yield put({
      type: GET_TODO_LIST_SUCCESS,
      todoList
    });
  }
  catch (error) {
    yield put({
      type: GET_TODO_LIST_FAILURE
    });
    yield put({
      type: SET_ERROR_MESSAGE,
      errorMessage: error.message
    });
  }
}
function* addTodo(action) {
  try {
    const todo = yield call(addTodoAPI, action.token, action.title);
    yield put({
      type: ADD_TODO_SUCCESS,
      todo
    });
  }
  catch (error) {
    yield put({
      type: ADD_TODO_FAILURE
    });
    yield put({
      type: SET_ERROR_MESSAGE,
      errorMessage: error.message
    });
  }
}
function* updateTodo(action) {
  try{
    const todo = yield call(updateTodoAPI, action.token, action.id, action.todo);
    yield put({
      type: UPDATE_TODO_SUCCESS,
      todo
    });
  }
  catch(error){
    yield put({
      type: UPDATE_TODO_FAILURE
    });
    yield put({
      type: SET_ERROR_MESSAGE,
      errorMessage: error.message
    });
  }
}
function* deleteTodo(action) {
  try {
    yield call(deleteTodoAPI, action.token, action.id);
    yield put({
      type: DELETE_TODO_SUCCESS,
      id: action.id
    });
  }
  catch (error) {
    yield put({
      type: DELETE_TODO_FAILURE
    });
    yield put({
      type: SET_ERROR_MESSAGE,
      errorMessage: error.message
    });
  }
}

// watcher saga
function* todoList() {
  yield takeLatest(GET_TODO_LIST, getTodoList);
  yield takeLatest(ADD_TODO, addTodo);
  yield takeLatest(UPDATE_TODO, updateTodo);
  yield takeLatest(DELETE_TODO, deleteTodo);
}

export default todoList;