import React from 'react';
import { Redirect } from 'react-router-dom';
import { TOKEN_STORAGE_NAME } from '../constants';

const withAuth = WrappedComponent => {
  const WithAuth = props => {
    const token = localStorage.getItem(TOKEN_STORAGE_NAME);
    if (token) {
      return <WrappedComponent {...props} token={token} />;
    }
    else {
      return <Redirect to="/signin" />;
    }
  }
  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;
  return WithAuth;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;