import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_TODO_LIST, GET_TODO_LIST_SUCCESS, GET_TODO_LIST_FAILURE } from '../constants';
import { getTodoList as getTodoListAPI } from '../api';

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
    const { status, statusText } = error.response;
    console.error(status, statusText);
    yield put({
      type: GET_TODO_LIST_FAILURE
    });
  }
}

// watcher saga
function* todoList() {
  yield takeLatest(GET_TODO_LIST, getTodoList);
}

export default todoList;