import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { getTodoList, setErrorMessage, deleteTodo, setTodoFormTitle, setTodoFormButtonName, setSelectedTodo } from '../actions';

const mapStateToProps = (state, props) => {
  return {
    todoList: state.todoList,
    errorMessage: state.errorMessage
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const { token } = props;
  return {
    getTodoList: () => {
      dispatch(getTodoList(token));
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