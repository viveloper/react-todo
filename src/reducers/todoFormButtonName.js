import { SET_TODO_FORM_BUTTON_NAME } from "../constants";

const initialState = 'ADD';

const todoFormButtonName = (previousState = initialState, action) => {
  if(action.type === SET_TODO_FORM_BUTTON_NAME){
    return action.buttonName;
  }
  else{
    return previousState;
  }
}

export default todoFormButtonName;