import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { getTodoList, setErrorMessage, updateTodo, deleteTodo, setTodoFormTitle, setTodoFormButtonName, setSelectedTodo } from '../actions';

const mapStateToProps = (state, props) => {
  return {
    todoList: state.todoList,
    loading: state.loading,
    errorMessage: state.errorMessage
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const { token } = props;
  return {
    getTodoList: () => {
      dispatch(getTodoList(token));
    },    
    updateTodo: (id, todo) => {
      dispatch(updateTodo(props.token, id, todo));
    },
    deleteTodo: id => {
      dispatch(deleteTodo(token, id));
    },
    setTodoFormTitle: title => {
      dispatch(setTodoFormTitle(title));
    },
    setTodoFormButtonName: buttonName => {
      dispatch(setTodoFormButtonName(buttonName));
    },
    setSelectedTodo: todo => {
      dispatch(setSelectedTodo(todo));
    },
    setErrorMessage: message => {
      dispatch(setErrorMessage(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);