import React from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import TodoFormContainer from '../containers/TodoFormContainer';
import Navbar from '../components/Navbar';
import withAuth from '../hoc/withAuth';

const Home = props => {
  const { token, history } = props;
  return (
    <>
      <Navbar history={history} />
      <div className="container">
        <TodoFormContainer token={token} />
        <hr/>
        <TodoListContainer token={token} history={history} />
      </div>
    </>
  );
}

export default withAuth(Home);