import React from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import withAuth from '../hoc/withAuth';

const Home = props => {
  const { token } = props;
  return (
    <TodoListContainer token={token} />
  );
}

export default withAuth(Home);