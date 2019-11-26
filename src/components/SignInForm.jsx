import React, { useState } from 'react';
import { signin } from '../api';
import { TOKEN_STORAGE_NAME } from '../constants';

const SignInForm = props => {
  const { setErrorMessage, errorMessage } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    }
    else if (e.target.type === 'password') {
      setPassword(e.target.value);
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await signin(email, password);
      localStorage.setItem(TOKEN_STORAGE_NAME, res.token);
      props.history.push('/');
    }
    catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      console.error(errorMessage);
      setErrorMessage(errorMessage);
    }
  }

  const handleErrorModalClose = () => {
    setErrorMessage('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={handleChange} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={handleChange} />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {
        errorMessage &&
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <p>{errorMessage}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleErrorModalClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default SignInForm;