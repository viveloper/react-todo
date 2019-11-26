import { connect } from 'react-redux';
import SignInForm from '../components/SignInForm';
import { setErrorMessage } from '../actions';

const mapStateToProps = (state, props) => {
  return {
    errorMessage: state.errorMessage
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    setErrorMessage: message => {
      dispatch(setErrorMessage(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);