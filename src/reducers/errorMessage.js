import { SET_ERROR_MESSAGE } from "../constants";

const initialState = '';

const errorMessage = (previousState = initialState, action) => {
  if (action.type === SET_ERROR_MESSAGE) {
    return action.errorMessage;
  }
  else {
    return previousState;
  }
}

export default errorMessage;