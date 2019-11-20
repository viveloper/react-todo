import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {getTodoList} from '../actions';

const mapStateToProps = (state, props) => {  
  return {
    todoList: state.todoList
  }
}

const mapDispatchToProps = (dispatch, props) => {  
  const {token} = props;
  return {
    getTodoList: () => {
      dispatch(getTodoList(token));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);