import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import PageNotFound from './pages/PageNotFound';
import { TOKEN_STORAGE_NAME } from './constants';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" render={(props) => (
            localStorage.getItem(TOKEN_STORAGE_NAME) ? <Redirect to="/" /> : <SignIn {...props} />
          )} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
