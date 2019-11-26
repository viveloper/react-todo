import React, { useEffect } from 'react';
import { TOKEN_STORAGE_NAME } from '../constants';
import Loading from './Loading';

const TodoList = props => {
  const { getTodoList, todoList, deleteTodo, setErrorMessage, errorMessage, history, setTodoFormTitle, setTodoFormButtonName, setSelectedTodo, updateTodo, loading } = props;
  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  const handleErrorModalClose = () => {
    if (errorMessage === 'Request failed with status code 401') {
      // logout
      localStorage.removeItem(TOKEN_STORAGE_NAME);
      history.push('/signin');
    }
    setErrorMessage('');
  }

  const handleCheck = todo => {
    todo.completed = !todo.completed
    updateTodo(todo._id, todo);
  }

  const handleUpdate = todo => {
    const { title } = todo;
    setTodoFormTitle(title);
    setTodoFormButtonName('Update');
    setSelectedTodo(todo);
  }

  const handleDelete = id => {
    deleteTodo(id);
  }

  console.log('render TodoList');
  return (
    <div>
      {
        todoList.map(todo => (
          <div key={todo._id} className="card my-2">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div><input type="checkbox" checked={todo.completed} style={{ width: '25px', height: '25px' }} onClick={() => handleCheck(todo)} /></div>
                <div style={{ marginLeft: '10px' }}>{todo.title}</div>
              </div>
              <div>
                <button type="button" className="btn btn-outline-secondary mr-2" onClick={() => handleUpdate(todo)}>Update</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(todo._id)}>Delete</button>
              </div>
            </div>
          </div>
        )).reverse()
      }
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
      {
        loading && <Loading width="200" height="200" />
      }
    </div>
  );
}

export default TodoList;