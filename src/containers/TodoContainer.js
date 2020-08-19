import { connect } from 'react-redux';
import { getAllTodo } from '../actions/index';
import PrintTodo from '../components/PrintTodo';

const mapStateToProps = (state) =>({
  todos : state.todos
})

const mapDispatchToProps = dispatch => ({
  getAllTodo : () => dispatch(getAllTodo()),
})

export default connect( mapStateToProps, mapDispatchToProps )(PrintTodo)