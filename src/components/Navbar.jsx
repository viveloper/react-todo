import React from 'react';
import { Link } from 'react-router-dom';
import { TOKEN_STORAGE_NAME } from '../constants';

const Navbar = props => {
  const { history } = props;
  const handleLogout = () => {
    localStorage.removeItem(TOKEN_STORAGE_NAME);
    history.push('/signin');
  }

  return (
    <>
      <nav className="navbar-light bg-light">
        <div className="container d-flex align-items-center">
          <div className="py-2">
            <Link className="navbar-brand" to="/"><img src="/img/react-redux-logo.png" alt="logo.png" width="80px" /></Link>
          </div>
          <div className="flex-fill d-flex justify-content-between align-items-center">
            <div>
              <Link className="nav-link" to="/" style={{ fontSize: '1.8rem', color:'#284B63' }}>TODO LIST</Link>
            </div>
            <div className="my-2 my-lg-0">
              <button className="btn btn-secondary" type="button" onClick={handleLogout}>LOGOUT</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;