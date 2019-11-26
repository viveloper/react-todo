import { GET_TODO_LIST, SET_ERROR_MESSAGE, ADD_TODO, DELETE_TODO, UPDATE_TODO, SET_TODO_FORM_TITLE, SET_TODO_FORM_BUTTON_NAME, SET_SELECTED_TODO } from "../constants"

export const setTodoFormTitle = title => ({
  type: SET_TODO_FORM_TITLE,
  title
});

export const setTodoFormButtonName = buttonName => ({
  type: SET_TODO_FORM_BUTTON_NAME,
  buttonName
});

export const getTodoList = token => ({
  type: GET_TODO_LIST,
  token
});

export const addTodo = (token, title) => ({
  type: ADD_TODO,
  token,
  title
});

export const updateTodo = (token, id, todo) => ({
  type: UPDATE_TODO,
  token,
  id,
  todo
});

export const deleteTodo = (token, id) => ({
  type: DELETE_TODO,
  token,
  id
});

export const setSelectedTodo = todo => ({
  type: SET_SELECTED_TODO,
  todo
})

export const setErrorMessage = message => ({
  type: SET_ERROR_MESSAGE,
  errorMessage: message
});