import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { addTodo, setTodoFormTitle, updateTodo, setTodoFormButtonName } from '../actions';

const mapStateToProps = (state, props) => {
  return {
    todoFormTitle: state.todoFormTitle,
    todoFormButtonName: state.todoFormButtonName,
    selectedTodo: state.selectedTodo
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    setTodoFormTitle: title => {
      dispatch(setTodoFormTitle(title));
    },
    setTodoFormButtonName: buttonName => {
      dispatch(setTodoFormButtonName(buttonName));
    },
    addTodo: title => {
      dispatch(addTodo(props.token, title));
    },
    updateTodo: (id, todo) => {
      dispatch(updateTodo(props.token, id, todo));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);