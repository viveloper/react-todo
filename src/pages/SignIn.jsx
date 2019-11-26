import React from 'react';
import SignInFormContainer from '../containers/SignInFormContainer';

const SignIn = props => {  
  return (
    <div className="container">
      <h2>SignIn</h2>
      <SignInFormContainer history={props.history} />
    </div>
  );
}

export default SignIn;