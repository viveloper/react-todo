import React from 'react';

const TodoForm = props => {
  const { setTodoFormTitle, todoFormTitle, setTodoFormButtonName, todoFormButtonName, addTodo, selectedTodo, updateTodo } = props;
  const handleChange = (e) => {
    setTodoFormTitle(e.target.value);
  }
  const handleClick = () => {
    if (todoFormTitle !== '') {
      if (todoFormButtonName === 'ADD') {
        addTodo(todoFormTitle);
      }
      else {
        const todo = {
          title: todoFormTitle,
          completed: selectedTodo.completed
        }
        updateTodo(selectedTodo._id, todo);
        setTodoFormButtonName('ADD');
      }
      setTodoFormTitle('');
    }
  }
  return (
    <form>
      <textarea className="form-control my-2" onChange={handleChange} value={todoFormTitle}></textarea>
      <button type="button" className="btn btn-primary btn-block mb-2" onClick={handleClick}>{todoFormButtonName}</button>
    </form>
  );
}

export default TodoForm;