import { all, call } from 'redux-saga/effects';
import todoList from './todoList';

function* rootSaga() {
  yield all([call(todoList)]);
}

export default rootSaga;