import { GET_TODO_LIST } from "../constants"

export const getTodoList = token => ({
  type: GET_TODO_LIST,
  token
})