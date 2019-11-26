import { SET_TODO_FORM_TITLE } from "../constants";

const initialState = '';

const todoFormTitle = (previousState = initialState, action) => {
  if(action.type === SET_TODO_FORM_TITLE){
    return action.title;
  }
  else{
    return previousState;
  }
}

export default todoFormTitle;