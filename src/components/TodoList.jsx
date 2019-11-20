import React, { useEffect } from 'react';

const TodoList = props => {
  const { getTodoList, todoList } = props;
  useEffect(() => {
    getTodoList();
  }, [getTodoList]);
  console.log('render TodoList');
  return (
    <div className="container">
      <header>
        <h2 className="d-flex justify-content-center">TODO LIST</h2>
      </header>
      <form>
        <textarea className="form-control mb-2"></textarea>
        <button type="button" className="btn btn-primary btn-block mb-2">ADD</button>
      </form>      
      <div>
        {
          todoList.map(todo => (
            <div key={todo._id} className="card my-2">
              <div className="card-body">
                {todo.title}
              </div>
            </div>
          )).reverse()
        }
      </div>
    </div>
  );
}

export default TodoList;