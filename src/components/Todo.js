import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllTodo} from '../actions/index'
import TodoContainer from '../containers/TodoContainer';

export class Todo extends Component {
  componentDidMount() {
    this.props.getAllTodo();
  }
  render() {
    return (
      <div>
        <h2>Todo</h2>
        <TodoContainer/>
      </div>
    )
  }
}

export default connect(null , { getAllTodo })(Todo)
